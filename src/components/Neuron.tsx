import { useEffect, useRef, useState } from 'react';
import { Slider } from '@/components/ui/slider';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

interface Seg {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  w: number;
}

/**
 * A clickable leaky integrate-and-fire neuron with realistic morphology and
 * electrophysiology. Clicking injects current; the membrane potential
 * integrates and leaks. At threshold it fires an action potential (with a true
 * depolarize / repolarize / afterhyperpolarization waveform on a mV axis) that
 * propagates saltatorily down the myelinated axon to a downstream cell.
 */
const Neuron = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const injectRef = useRef<() => void>(() => {});
  const stepRef = useRef(0.16);
  const audioOnRef = useRef(false);
  const enableAudioRef = useRef<() => void>(() => {});
  const [spikeCount, setSpikeCount] = useState(0);
  const [step, setStep] = useState(0.16);
  const [audioOn, setAudioOn] = useState(false);
  const [ltp, setLtp] = useState(false);

  const toggleAudio = () => {
    const next = !audioOn;
    setAudioOn(next);
    audioOnRef.current = next;
    if (next) enableAudioRef.current();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    // ---- model ----
    const tauLeak = 6; // gentle leak so clicks accumulate at a human pace
    const threshold = 1;
    const reset = -0.18;
    const apDur = 0.09; // visible action-potential duration on the trace (s)
    const apTravel = 0.6; // axon conduction time (s)
    const windowSec = 5;

    let V = 0;
    let apStart = -10;
    let total = 0;
    const history: { t: number; mv: number }[] = [];
    const spikes: number[] = [];

    let potFactor = 1; // synaptic strength (raised by long-term potentiation)
    let potentiated = false;
    const ltpThreshold = 10;

    // ---- spike audio (an electrophysiology rig pipes spikes to a speaker) ----
    let audioCtx: AudioContext | null = null;
    let noiseBuf: AudioBuffer | null = null;
    enableAudioRef.current = () => {
      if (audioCtx) {
        audioCtx.resume();
        return;
      }
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      audioCtx = new AC();
      const len = Math.floor(audioCtx.sampleRate * 0.04);
      noiseBuf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    };
    const playSpike = () => {
      if (!audioOnRef.current || !audioCtx || !noiseBuf) return;
      const src = audioCtx.createBufferSource();
      src.buffer = noiseBuf;
      const bp = audioCtx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 1500;
      bp.Q.value = 0.7;
      const g = audioCtx.createGain();
      const tnow = audioCtx.currentTime;
      g.gain.setValueAtTime(0.0001, tnow);
      g.gain.exponentialRampToValueAtTime(0.45, tnow + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, tnow + 0.035);
      src.connect(bp);
      bp.connect(g);
      g.connect(audioCtx.destination);
      src.start(tnow);
      src.stop(tnow + 0.05);
    };

    injectRef.current = () => {
      V = Math.min(1.8, V + stepRef.current * potFactor);
    };

    // ---- precompute morphology (local coords, soma at 0,0) ----
    const somaR = 17;
    const dendrites: Seg[] = [];
    const grow = (x: number, y: number, ang: number, len: number, w: number, depth: number) => {
      if (depth <= 0 || len < 7) return;
      const x2 = x + Math.cos(ang) * len;
      const y2 = y + Math.sin(ang) * len;
      dendrites.push({ x1: x, y1: y, x2, y2, w });
      const branches = depth > 1 ? 2 : 1;
      for (let i = 0; i < branches; i++) {
        const spread = (0.25 + Math.random() * 0.5) * (i === 0 ? 1 : -1);
        grow(x2, y2, ang + spread, len * (0.72 + Math.random() * 0.12), Math.max(0.8, w * 0.68), depth - 1);
      }
    };
    [Math.PI - 1.0, Math.PI - 0.5, Math.PI, Math.PI + 0.5, Math.PI + 1.0].forEach((a, i) => {
      grow(Math.cos(a) * somaR, Math.sin(a) * somaR, a, i === 2 ? 44 : 34, 3.4, 4);
    });
    const dendriteLeft = Math.min(-somaR, ...dendrites.map((s) => Math.min(s.x1, s.x2)));

    const somaPts: [number, number][] = [];
    const SB = 12;
    for (let i = 0; i < SB; i++) {
      const a = (i / SB) * Math.PI * 2;
      const r = somaR * (0.82 + Math.random() * 0.34);
      somaPts.push([Math.cos(a) * r, Math.sin(a) * r]);
    }

    const apWave = (u: number) => {
      if (u < 0.16) return lerp(-55, 40, u / 0.16); // depolarization
      if (u < 0.42) return lerp(40, -80, (u - 0.16) / 0.26); // repolarization + undershoot
      return lerp(-80, -71, (u - 0.42) / 0.58); // afterhyperpolarization recovery
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // jamie.spike() from the console fires the neuron
    const onExternalSpike = () => {
      V = 1.3;
    };
    window.addEventListener('jamie:spike', onExternalSpike);

    const blobPath = (cx: number, cy: number, pts: [number, number][]) => {
      const n = pts.length;
      const mid = (a: [number, number], b: [number, number]) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      ctx.beginPath();
      const m0 = mid(pts[n - 1], pts[0]);
      ctx.moveTo(cx + m0[0], cy + m0[1]);
      for (let i = 0; i < n; i++) {
        const cur = pts[i];
        const m = mid(cur, pts[(i + 1) % n]);
        ctx.quadraticCurveTo(cx + cur[0], cy + cur[1], cx + m[0], cy + m[1]);
      }
      ctx.closePath();
    };

    const capsule = (x: number, y: number, w: number, h: number) => {
      const r = h / 2;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.arc(x + w - r, y + r, r, -Math.PI / 2, Math.PI / 2);
      ctx.lineTo(x + r, y + h);
      ctx.arc(x + r, y + r, r, Math.PI / 2, -Math.PI / 2);
      ctx.closePath();
    };

    let raf = 0;
    let last = 0;

    const frame = (ts: number) => {
      const t = ts / 1000;
      const dt = last ? Math.min(0.05, t - last) : 0.016;
      last = t;
      const isDark = document.documentElement.classList.contains('dark');

      // ---- integrate ----
      const inAP = t < apStart + apDur;
      if (inAP) {
        V = reset; // held during the spike
      } else {
        V += (dt / tauLeak) * -V;
        if (V >= threshold) {
          apStart = t;
          spikes.push(t);
          total += 1;
          setSpikeCount(total);
          playSpike();
          if (!potentiated && total >= ltpThreshold) {
            potentiated = true;
            potFactor = 1.7;
            setLtp(true);
          }
          V = reset;
        }
      }
      const firing = t < apStart + apDur;
      const mv = firing ? apWave((t - apStart) / apDur) : -70 + V * 15;
      history.push({ t, mv });
      while (history.length && history[0].t < t - windowSec - 0.5) history.shift();
      while (spikes.length && spikes[0] < t - apTravel - 0.3) spikes.shift();

      // ---- colors ----
      const line = isDark ? 'rgba(165,180,210,0.55)' : 'rgba(90,110,150,0.55)';
      const muted = isDark ? 'rgba(165,180,210,0.3)' : 'rgba(90,110,150,0.3)';
      const faint = isDark ? 'rgba(165,180,210,0.14)' : 'rgba(90,110,150,0.14)';
      const myelin = isDark ? 'rgba(150,175,220,0.28)' : 'rgba(120,150,205,0.24)';
      const warm = isDark ? '#fb923c' : '#f97316';
      const warmGlow = isDark ? 'rgba(251,146,60,0.9)' : 'rgba(249,115,22,0.85)';

      ctx.clearRect(0, 0, width, height);

      // ---- layout (centered) ----
      const neuronH = Math.min(190, height * 0.55);
      const cy = neuronH / 2;
      const leftReach = -dendriteLeft + 8;
      const axonLen = Math.max(120, Math.min(240, width * 0.42));
      const hillock = somaR + 10;
      const rightReach = hillock + axonLen + 46;
      const figW = leftReach + rightReach;
      const somaX = (width - figW) / 2 + leftReach;
      const axonStartX = somaX + hillock;
      const axonEndX = axonStartX + axonLen;
      const targetX = axonEndX + 34;

      const vis = Math.max(0, Math.min(1, V));
      const somaR2 = Math.round(96 + (249 - 96) * vis);
      const somaG = Math.round(125 + (115 - 125) * vis);
      const somaB = Math.round(180 + (22 - 180) * vis);

      // ---- downstream cell ----
      const arrived = spikes.some((s) => t - s >= apTravel && t - s < apTravel + 0.2);
      ctx.strokeStyle = line;
      ctx.lineCap = 'round';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(targetX, cy - 26);
      ctx.lineTo(targetX, cy + 26);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(targetX + 6, cy, potentiated ? 11 : 9, 0, Math.PI * 2);
      ctx.fillStyle = arrived ? warm : muted;
      if (arrived) {
        ctx.shadowBlur = 16;
        ctx.shadowColor = warmGlow;
      }
      ctx.fill();
      ctx.shadowBlur = 0;

      // ---- dendrites ----
      ctx.strokeStyle = `rgba(${somaR2},${somaG},${somaB},${0.5 + vis * 0.4})`;
      ctx.lineCap = 'round';
      for (const s of dendrites) {
        ctx.lineWidth = s.w;
        ctx.beginPath();
        ctx.moveTo(somaX + s.x1, cy + s.y1);
        ctx.lineTo(somaX + s.x2, cy + s.y2);
        ctx.stroke();
      }

      // ---- axon: myelin internodes + nodes of Ranvier ----
      const nInter = 5;
      const gap = 7;
      const segW = (axonLen - gap * (nInter - 1)) / nInter;
      const nodeX: number[] = [];
      // thin axon core
      ctx.strokeStyle = muted;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(axonStartX, cy);
      ctx.lineTo(axonEndX, cy);
      ctx.stroke();
      // hillock cone
      ctx.fillStyle = `rgb(${somaR2},${somaG},${somaB})`;
      ctx.beginPath();
      ctx.moveTo(somaX + somaR - 2, cy - 7);
      ctx.lineTo(axonStartX, cy - 2.5);
      ctx.lineTo(axonStartX, cy + 2.5);
      ctx.lineTo(somaX + somaR - 2, cy + 7);
      ctx.closePath();
      ctx.fill();
      // myelin sheaths
      ctx.fillStyle = myelin;
      ctx.strokeStyle = isDark ? 'rgba(150,175,220,0.4)' : 'rgba(120,150,205,0.4)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nInter; i++) {
        const sx = axonStartX + i * (segW + gap);
        capsule(sx, cy - 6, segW, 12);
        ctx.fill();
        ctx.stroke();
        if (i < nInter - 1) nodeX.push(sx + segW + gap / 2);
      }

      // ---- soma ----
      blobPath(somaX, cy, somaPts);
      ctx.fillStyle = firing ? '#fde047' : `rgb(${somaR2},${somaG},${somaB})`;
      if (vis > 0.12 || firing) {
        ctx.shadowBlur = 12 + vis * 16;
        ctx.shadowColor = warmGlow;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(somaX, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.fill();

      // ---- terminal branches onto the downstream cell ----
      ctx.strokeStyle = line;
      ctx.lineWidth = 2.2;
      for (const a of [-0.5, 0, 0.5]) {
        const bx = targetX - 8 + Math.cos(a) * 0;
        const by = cy + Math.sin(a) * 18;
        ctx.beginPath();
        ctx.moveTo(axonEndX, cy);
        ctx.quadraticCurveTo(axonEndX + 16, cy, bx, by);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(bx, by, potentiated ? 4 : 3, 0, Math.PI * 2);
        ctx.fillStyle = arrived ? warm : muted;
        ctx.fill();
      }

      // ---- saltatory action potential: jumps node to node ----
      // The AP regenerates only at the initial segment, the nodes of Ranvier,
      // and the terminal; it is silent under the myelin, so it appears to leap.
      const sites = [axonStartX, ...nodeX, axonEndX];
      const nSites = sites.length;
      for (const s of spikes) {
        const age = t - s;
        if (age >= 0 && age < apTravel) {
          const idxF = (age / apTravel) * (nSites - 1);
          const idx = Math.min(nSites - 1, Math.floor(idxF));
          const localF = idxF - idx; // 0..1 within this node's dwell
          const sx = sites[idx];

          // regeneration ring expanding as the AP arrives at this node
          if (localF < 0.55) {
            const k = localF / 0.55;
            ctx.beginPath();
            ctx.arc(sx, cy, 5 + k * 13, 0, Math.PI * 2);
            ctx.strokeStyle = isDark
              ? `rgba(251,146,60,${(1 - k) * 0.7})`
              : `rgba(249,115,22,${(1 - k) * 0.7})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }

          // bright active node
          ctx.beginPath();
          ctx.arc(sx, cy, 6, 0, Math.PI * 2);
          ctx.fillStyle = warm;
          ctx.shadowBlur = 16;
          ctx.shadowColor = warmGlow;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // ---- membrane potential trace (mV) ----
      const traceTop = neuronH + 18;
      const traceH = height - traceTop - 6;
      if (traceH > 24) {
        const x0 = 30;
        const x1 = width - 8;
        const tw = x1 - x0;
        const mvMin = -90;
        const mvMax = 50;
        const vy = (m: number) => traceTop + (1 - (m - mvMin) / (mvMax - mvMin)) * traceH;
        const tx = (tt: number) => x0 + ((tt - (t - windowSec)) / windowSec) * tw;

        ctx.font = '10px Inter, system-ui, sans-serif';
        ctx.textBaseline = 'middle';

        // guide lines + labels
        const guides: [number, string, boolean][] = [
          [40, '+40', false],
          [-55, '-55', true],
          [-70, '-70', false],
        ];
        for (const [m, label, dashed] of guides) {
          ctx.strokeStyle = dashed ? muted : faint;
          ctx.setLineDash(dashed ? [4, 4] : []);
          ctx.beginPath();
          ctx.moveTo(x0, vy(m));
          ctx.lineTo(x1, vy(m));
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = muted;
          ctx.fillText(label, 2, vy(m));
        }

        // trace
        ctx.strokeStyle = warm;
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        let started = false;
        for (const h of history) {
          const x = tx(h.t);
          if (x < x0 - 2) continue;
          const y = vy(h.mv);
          if (!started) {
            ctx.moveTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('jamie:spike', onExternalSpike);
      if (audioCtx) audioCtx.close();
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => injectRef.current()}
        className="w-full max-w-2xl cursor-pointer select-none"
        aria-hidden
      >
        <canvas ref={canvasRef} className="w-full" style={{ height: 360 }} />
      </div>

      <div className="w-full max-w-xs mt-4">
        <div className="flex justify-between text-xs text-text-muted mb-2">
          <span>Injected current per click</span>
          <span className="font-medium text-text-secondary">{Math.round(step * 1000)} pA</span>
        </div>
        <Slider
          value={[step]}
          min={0.05}
          max={1.2}
          step={0.01}
          onValueChange={(v) => {
            setStep(v[0]);
            stepRef.current = v[0];
          }}
          aria-label="Injected current per click"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
        <button
          type="button"
          onClick={() => injectRef.current()}
          className="rounded-full bg-text-primary text-background px-4 py-2 text-sm font-medium transition hover:opacity-90"
        >
          Inject current
        </button>
        <button
          type="button"
          onClick={toggleAudio}
          aria-pressed={audioOn}
          className="rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-surface"
        >
          {audioOn ? '🔊 Sound on' : '🔇 Listen'}
        </button>
        <p className="text-sm text-text-muted">
          Spikes fired: <span className="font-medium text-text-secondary">{spikeCount}</span>
        </p>
      </div>

      {ltp && (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-600 dark:text-fuchsia-300 animate-fade-in">
          ⚡ Long-term potentiation induced: the synapse is now stronger
        </div>
      )}
    </div>
  );
};

export default Neuron;
