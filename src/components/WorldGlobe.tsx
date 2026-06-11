import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export interface GlobeRole {
  type: 'school' | 'work';
  title: string;
  org: string;
  dates: string;
}

export interface GlobeLocation {
  name: string;
  lat: number;
  lng: number;
  roles: GlobeRole[];
}

const SCHOOL = '#6366f1';
const WORK = '#f97316';

// Simplified continent outlines as [lng, lat] perimeters, used to dot the land.
const CONTINENTS: number[][][] = [
  // North America
  [[-166,66],[-156,71],[-130,70],[-110,72],[-90,72],[-82,73],[-80,67],[-90,62],[-95,57],[-82,55],[-78,62],[-70,62],[-64,60],[-56,52],[-64,47],[-70,43],[-74,40],[-76,35],[-81,30],[-80,25],[-83,28],[-89,29],[-94,29],[-97,25],[-95,20],[-88,21],[-86,15],[-83,9],[-87,13],[-95,16],[-105,20],[-112,24],[-117,33],[-122,37],[-124,42],[-124,48],[-130,53],[-138,58],[-148,60],[-158,57],[-164,60]],
  // South America
  [[-79,9],[-70,12],[-60,10],[-50,4],[-49,-1],[-41,-3],[-35,-7],[-39,-14],[-48,-25],[-55,-35],[-62,-40],[-66,-46],[-70,-52],[-74,-49],[-72,-42],[-71,-30],[-70,-18],[-77,-12],[-81,-5],[-80,1]],
  // Greenland
  [[-45,60],[-30,68],[-20,72],[-22,78],[-32,82],[-50,82],[-58,78],[-54,70],[-50,62]],
  // Africa
  [[-17,15],[-13,24],[-6,31],[2,36],[11,34],[20,33],[28,33],[32,31],[35,27],[38,18],[43,11],[51,12],[45,3],[41,-5],[38,-16],[33,-26],[26,-33],[19,-34],[13,-23],[9,-5],[5,4],[-2,5],[-9,5],[-15,10]],
  // Eurasia
  [[-9,43],[-6,36],[3,42],[12,41],[19,40],[24,38],[28,41],[36,36],[35,31],[38,28],[43,13],[52,16],[58,23],[57,25],[50,30],[49,30],[62,25],[67,24],[73,18],[77,8],[80,13],[86,20],[90,22],[92,21],[98,16],[100,8],[105,9],[109,18],[111,21],[118,24],[122,31],[121,40],[126,40],[130,43],[140,46],[150,52],[160,60],[170,66],[178,69],[170,72],[140,73],[110,77],[75,76],[55,70],[40,67],[33,70],[25,71],[18,69],[12,65],[10,60],[5,58],[7,54],[2,51],[-2,49]],
  // Australia
  [[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-18],[150,-24],[153,-29],[149,-37],[143,-39],[136,-35],[129,-32],[123,-34],[115,-34],[113,-27]],
  // Madagascar
  [[43,-12],[50,-15],[49,-25],[44,-22]],
  // United Kingdom
  [[-5,50],[-1,53],[-3,58],[-6,55]],
  // Japan
  [[130,31],[136,35],[141,40],[140,43],[133,34]],
  // Borneo
  [[109,2],[117,1],[117,-4],[110,-4]],
  // New Guinea
  [[131,-1],[141,-3],[147,-8],[138,-9]],
  // Sumatra
  [[95,5],[100,0],[104,-6],[98,-3]],
  // New Zealand
  [[167,-44],[174,-41],[178,-39],[173,-46]],
];

const pointInPoly = (lng: number, lat: number, poly: number[][]) => {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0];
    const yi = poly[i][1];
    const xj = poly[j][0];
    const yj = poly[j][1];
    if (yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

const isLand = (lng: number, lat: number) => CONTINENTS.some((p) => pointInPoly(lng, lat, p));

const WorldGlobe = ({ locations }: { locations: GlobeLocation[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const selectedRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let tilt = 0.5;
    let size = 0;
    let R = 0;
    let cx = 0;
    let cy = 0;

    let rot = locations.length ? -(locations[0].lng * Math.PI) / 180 : 0;
    let targetRot: number | null = null;
    let targetTilt: number | null = null;
    let hoverCanvas = false;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let moved = 0;
    let hovered = -1;

    // precompute dotted continents from the land polygons
    const landDots: { latR: number; lngR: number }[] = [];
    for (let lat = -84; lat <= 84; lat += 3.5) {
      for (let lng = -180; lng < 180; lng += 3.5) {
        if (isLand(lng, lat)) {
          landDots.push({ latR: (lat * Math.PI) / 180, lngR: (lng * Math.PI) / 180 });
        }
      }
    }

    const pinScreens: { i: number; sx: number; sy: number; depth: number }[] = [];

    const resize = () => {
      size = canvas.clientWidth;
      R = size * 0.4;
      cx = size / 2;
      cy = size / 2;
      canvas.width = Math.floor(size * dpr);
      canvas.height = Math.floor(size * dpr);
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const project = (latR: number, lngR: number) => {
      const a = lngR + rot;
      const x0 = Math.cos(latR) * Math.sin(a);
      const y0 = Math.sin(latR);
      const z0 = Math.cos(latR) * Math.cos(a);
      const y1 = y0 * Math.cos(tilt) - z0 * Math.sin(tilt);
      const z1 = y0 * Math.sin(tilt) + z0 * Math.cos(tilt);
      return { sx: cx + x0 * R, sy: cy - y1 * R, depth: z1 };
    };

    let raf = 0;
    let last = 0;

    const frame = (ts: number) => {
      const t = ts / 1000;
      const dt = last ? Math.min(0.05, t - last) : 0.016;
      last = t;
      const isDark = document.documentElement.classList.contains('dark');
      const sel = selectedRef.current;

      // rotation
      if (!dragging) {
        if (targetRot !== null) {
          rot += (targetRot - rot) * Math.min(1, dt * 5);
          if (Math.abs(targetRot - rot) < 0.002) {
            rot = targetRot;
            targetRot = null;
          }
        } else if (sel === null && !hoverCanvas) {
          rot += dt * 0.22;
        }
        if (targetTilt !== null) {
          tilt += (targetTilt - tilt) * Math.min(1, dt * 5);
          if (Math.abs(targetTilt - tilt) < 0.002) {
            tilt = targetTilt;
            targetTilt = null;
          }
        }
      }

      ctx.clearRect(0, 0, size, size);

      // atmosphere glow
      const atm = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.25);
      atm.addColorStop(0, 'rgba(99,102,241,0)');
      atm.addColorStop(1, isDark ? 'rgba(99,102,241,0.18)' : 'rgba(99,102,241,0.14)');
      ctx.fillStyle = atm;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // ocean disk
      const disk = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.2, cx, cy, R);
      if (isDark) {
        disk.addColorStop(0, '#1e293b');
        disk.addColorStop(1, '#0b1220');
      } else {
        disk.addColorStop(0, '#e0efff');
        disk.addColorStop(1, '#a9cdf2');
      }
      ctx.fillStyle = disk;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // dotted continents
      for (const d of landDots) {
        const p = project(d.latR, d.lngR);
        if (p.depth <= 0.02) continue;
        const a = 0.4 + p.depth * 0.55;
        ctx.fillStyle = isDark ? `rgba(134,239,172,${a})` : `rgba(74,168,110,${a})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 1.15, 0, Math.PI * 2);
        ctx.fill();
      }

      // pins
      pinScreens.length = 0;
      locations.forEach((loc, i) => {
        const p = project((loc.lat * Math.PI) / 180, (loc.lng * Math.PI) / 180);
        pinScreens.push({ i, sx: p.sx, sy: p.sy, depth: p.depth });
        if (p.depth <= 0) return;
        const color = loc.roles[0].type === 'school' ? SCHOOL : WORK;
        const isSel = sel === i;
        const isHov = hovered === i;
        const base = isSel ? 5.5 : 4.2;
        const r = base + Math.sin(t * 2 + i) * 0.6; // gentle bob

        // pulsing halo
        const pulse = (t * 0.8 + i * 0.37) % 1;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r + 3 + pulse * 12, 0, Math.PI * 2);
        ctx.strokeStyle = color + Math.round((1 - pulse) * 80).toString(16).padStart(2, '0');
        ctx.lineWidth = 2;
        ctx.stroke();

        // white-ringed sticker dot
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r + 1.8, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(255,255,255,0.92)' : '#ffffff';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = isSel || isHov ? 16 : 10;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (isSel || isHov) {
          // label
          const label = loc.name;
          ctx.font = '600 12px Inter, system-ui, sans-serif';
          const w = ctx.measureText(label).width;
          const lx = Math.min(Math.max(p.sx - w / 2, 4), size - w - 12);
          const ly = p.sy - r - 22;
          ctx.fillStyle = isDark ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.95)';
          ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
          ctx.lineWidth = 1;
          const pad = 6;
          ctx.beginPath();
          ctx.roundRect(lx - pad, ly - 13, w + pad * 2, 22, 6);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = isDark ? '#e2e8f0' : '#0f172a';
          ctx.textBaseline = 'middle';
          ctx.fillText(label, lx, ly - 1);
        }
      });

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // ---- interaction ----
    const pointAt = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      let best = -1;
      let bestD = 16;
      for (const p of pinScreens) {
        if (p.depth <= 0) continue;
        const d = Math.hypot(p.sx - x, p.sy - y);
        if (d < bestD) {
          bestD = d;
          best = p.i;
        }
      }
      return best;
    };

    const centerOn = (i: number) => {
      let desired = -(locations[i].lng * Math.PI) / 180;
      while (desired - rot > Math.PI) desired -= Math.PI * 2;
      while (desired - rot < -Math.PI) desired += Math.PI * 2;
      targetRot = desired;
      targetTilt = (locations[i].lat * Math.PI) / 180;
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      moved = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      targetRot = null;
      targetTilt = null;
      canvas.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (dragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        moved += Math.abs(dx) + Math.abs(dy);
        rot += dx * 0.006;
        tilt = Math.max(-1.35, Math.min(1.35, tilt + dy * 0.006));
      } else {
        hovered = pointAt(e.clientX, e.clientY);
        canvas.style.cursor = hovered >= 0 ? 'pointer' : 'grab';
      }
    };
    const onUp = (e: PointerEvent) => {
      if (dragging && moved < 5) {
        const hit = pointAt(e.clientX, e.clientY);
        if (hit >= 0) {
          selectedRef.current = hit;
          setSelected(hit);
          centerOn(hit);
        } else {
          selectedRef.current = null;
          setSelected(null);
        }
      }
      dragging = false;
    };
    const onEnter = () => {
      hoverCanvas = true;
    };
    const onLeave = () => {
      hoverCanvas = false;
      hovered = -1;
    };

    canvas.style.cursor = 'grab';
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointerenter', onEnter);
    canvas.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointerenter', onEnter);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, [locations]);

  // Click anywhere outside the component to deselect
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (selectedRef.current === null) return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        selectedRef.current = null;
        setSelected(null);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const selectLoc = (i: number) => {
    selectedRef.current = i;
    setSelected(i);
  };

  const active = selected !== null ? locations[selected] : null;

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-8 items-center">
      <div className="mx-auto w-full max-w-[240px]">
        <canvas ref={canvasRef} className="w-full select-none touch-none" />
        <div className="flex items-center justify-center gap-5 mt-2 text-xs text-text-secondary">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: SCHOOL }} /> School
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: WORK }} /> Work
          </span>
          <span>Drag to spin</span>
        </div>
      </div>

      <div>
        {active ? (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold text-primary">{active.name}</h3>
            <div className="space-y-3">
              {active.roles.map((role, idx) => (
                <div key={idx} className="flex gap-3 border-l-2 border-primary/30 pl-3">
                  <div className="mt-0.5 text-primary">
                    {role.type === 'school' ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : (
                      <Briefcase className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{role.title}</p>
                    <p className="text-sm text-foreground/80">{role.org}</p>
                    <p className="text-xs text-text-muted">{role.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-text-secondary text-sm">
              Click a pin to see what I did there, or pick a place:
            </p>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc, i) => (
                <button
                  key={loc.name}
                  type="button"
                  onClick={() => selectLoc(i)}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldGlobe;
