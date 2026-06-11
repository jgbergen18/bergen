import { useEffect, useRef, useState } from 'react';

/**
 * A clickable leaky integrate-and-fire neuron, simulated continuously on a
 * canvas. Each click injects a brief synaptic current; the membrane potential
 * integrates it and leaks back toward rest. When it crosses threshold the
 * neuron fires an action potential down the axon to a downstream synapse and
 * resets. A live membrane-potential trace and spike raster scroll below.
 */
const Neuron = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const injectRef = useRef<() => void>(() => {});
  const [spikeCount, setSpikeCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    // --- model parameters (arbitrary units, threshold = 1) ---
    const tauLeak = 6; // membrane leak time constant (s) — gentle, so clicks accumulate
    const clickStep = 0.16; // potential added per click (~7+ clicks to fire)
    const threshold = 1;
    const reset = -0.18;
    const refractory = 0.12; // s
    const apTravel = 0.42; // axon conduction time (s)
    const windowSec = 5; // trace window

    let V = 0;
    let refractoryUntil = -1;
    let total = 0;
    const history: { t: number; v: number }[] = [];
    const spikes: number[] = [];

    injectRef.current = () => {
      V = Math.min(1.8, V + clickStep);
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

    let raf = 0;
    let last = 0;

    const frame = (ts: number) => {
      const now = ts / 1000;
      const dt = last ? Math.min(0.05, now - last) : 0.016;
      last = now;
      const isDark = document.documentElement.classList.contains('dark');

      // --- integrate (leak toward rest) ---
      let spikedNow = false;
      if (now < refractoryUntil) {
        V = reset;
      } else {
        V += (dt / tauLeak) * -V;
        if (V >= threshold) {
          spikes.push(now);
          history.push({ t: now, v: 1.3 }); // overshoot for a sharp spike in the trace
          V = reset;
          refractoryUntil = now + refractory;
          spikedNow = true;
          total += 1;
          setSpikeCount(total);
        }
      }
      if (!spikedNow) history.push({ t: now, v: V });
      while (history.length && history[0].t < now - windowSec - 0.5) history.shift();
      while (spikes.length && spikes[0] < now - windowSec - 0.5) spikes.shift();

      // --- colors ---
      const line = isDark ? 'rgba(165,180,210,0.5)' : 'rgba(90,110,150,0.5)';
      const muted = isDark ? 'rgba(165,180,210,0.28)' : 'rgba(90,110,150,0.28)';
      const faint = isDark ? 'rgba(165,180,210,0.14)' : 'rgba(90,110,150,0.14)';
      const warm = isDark ? '#fb923c' : '#f97316';
      const warmGlow = isDark ? 'rgba(251,146,60,0.9)' : 'rgba(249,115,22,0.85)';

      ctx.clearRect(0, 0, width, height);

      // --- layout ---
      const neuronH = Math.min(190, height * 0.55);
      const cy = neuronH / 2;
      const axonLen = Math.max(120, Math.min(230, width - 170));
      const figureWidth = axonLen + 105;
      const somaX = (width - figureWidth) / 2 + 54;
      const axonStartX = somaX + 28;
      const axonEndX = axonStartX + axonLen;
      const termX = axonEndX + 16;

      // dendrites
      ctx.strokeStyle = line;
      ctx.lineCap = 'round';
      ctx.lineWidth = 2.5;
      for (const a of [-2.4, -3.14, 2.4, -1.9, 1.9]) {
        ctx.beginPath();
        ctx.moveTo(somaX - 16, cy);
        ctx.lineTo(somaX - 16 + Math.cos(a) * 38, cy + Math.sin(a) * 38);
        ctx.stroke();
      }

      // axon + terminals
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(axonStartX, cy);
      ctx.lineTo(axonEndX, cy);
      ctx.stroke();
      ctx.lineWidth = 2.5;
      for (const a of [-0.6, 0, 0.6]) {
        ctx.beginPath();
        ctx.moveTo(axonEndX, cy);
        ctx.lineTo(axonEndX + Math.cos(a) * 22, cy + Math.sin(a) * 22);
        ctx.stroke();
      }

      // downstream synapse (flashes when an AP arrives)
      const arrived = spikes.some((s) => now - s >= apTravel && now - s < apTravel + 0.18);
      ctx.beginPath();
      ctx.arc(termX, cy, 7, 0, Math.PI * 2);
      if (arrived) {
        ctx.fillStyle = warm;
        ctx.shadowBlur = 14;
        ctx.shadowColor = warmGlow;
      } else {
        ctx.fillStyle = muted;
        ctx.shadowBlur = 0;
      }
      ctx.fill();
      ctx.shadowBlur = 0;

      // travelling action potentials
      for (const s of spikes) {
        const age = now - s;
        if (age >= 0 && age < apTravel) {
          const fx = axonStartX + (age / apTravel) * (axonEndX - axonStartX);
          ctx.beginPath();
          ctx.arc(fx, cy, 5.5, 0, Math.PI * 2);
          ctx.fillStyle = warm;
          ctx.shadowBlur = 12;
          ctx.shadowColor = warmGlow;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // soma
      const vis = Math.max(0, Math.min(1, V));
      const firing = now < refractoryUntil + 0.05;
      const sr = Math.round(96 + (249 - 96) * vis);
      const sg = Math.round(125 + (115 - 125) * vis);
      const sb = Math.round(180 + (22 - 180) * vis);
      ctx.beginPath();
      ctx.arc(somaX, cy, firing ? 32 : 26 + vis * 6, 0, Math.PI * 2);
      ctx.fillStyle = firing ? '#fde047' : `rgb(${sr},${sg},${sb})`;
      if (vis > 0.15 || firing) {
        ctx.shadowBlur = 10 + vis * 16;
        ctx.shadowColor = warmGlow;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(somaX, cy, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.fill();

      // --- trace + raster ---
      const traceTop = neuronH + 18;
      const traceH = height - traceTop - 6;
      if (traceH > 24) {
        const x0 = 8;
        const x1 = width - 8;
        const tw = x1 - x0;
        const vmin = -0.35;
        const vmax = 1.45;
        const vy = (v: number) => traceTop + (1 - (v - vmin) / (vmax - vmin)) * traceH;
        const tx = (t: number) => x0 + ((t - (now - windowSec)) / windowSec) * tw;

        // threshold + rest guides
        ctx.strokeStyle = muted;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(x0, vy(threshold));
        ctx.lineTo(x1, vy(threshold));
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = faint;
        ctx.beginPath();
        ctx.moveTo(x0, vy(0));
        ctx.lineTo(x1, vy(0));
        ctx.stroke();

        // membrane potential trace
        ctx.strokeStyle = warm;
        ctx.lineWidth = 2;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        let started = false;
        for (const h of history) {
          const x = tx(h.t);
          if (x < x0 - 2) continue;
          const y = vy(h.v);
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
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => injectRef.current()}
        className="w-full max-w-2xl cursor-pointer select-none"
        aria-hidden
      >
        <canvas ref={canvasRef} className="w-full" style={{ height: 340 }} />
      </div>
      <div className="flex items-center gap-4 mt-3">
        <button
          type="button"
          onClick={() => injectRef.current()}
          className="rounded-full bg-text-primary text-background px-4 py-2 text-sm font-medium transition hover:opacity-90"
        >
          Inject current
        </button>
        <p className="text-sm text-text-muted">
          Spikes fired: <span className="font-medium text-text-secondary">{spikeCount}</span>
        </p>
      </div>
    </div>
  );
};

export default Neuron;
