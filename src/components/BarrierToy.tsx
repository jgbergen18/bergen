import { Fragment, useEffect, useState } from 'react';
import ToyFrame from './ToyFrame';
import { pill, primaryPill } from '../lib/toyStyles';

/**
 * The blood-brain barrier model from Jamie's first lab: primary human brain
 * endothelial cells grown as a barrier, used to ask whether it still holds in
 * X-linked adrenoleukodystrophy. The tracer run is a schematic of the assay.
 */

type State = 'healthy' | 'leaky';

const CELLS = 5;
// Gaps open at two of the four cell boundaries when the barrier breaks down.
// With five equal cells the boundaries sit at 20/40/60/80%, so the tracers that
// get through are the ones lined up with those gaps.
const GAPS = new Set([1, 3]);
const tracers = [
  { left: 9, delay: 0, escapes: false },
  { left: 25, delay: 120, escapes: false },
  { left: 39, delay: 60, escapes: true },
  { left: 57, delay: 200, escapes: false },
  { left: 79, delay: 40, escapes: true },
  { left: 92, delay: 160, escapes: false },
];

const BarrierToy = () => {
  const [state, setState] = useState<State>('healthy');
  const [released, setReleased] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!released) return;
    const t = setTimeout(() => setSettled(true), 1800);
    return () => clearTimeout(t);
  }, [released]);

  const pick = (s: State) => {
    setState(s);
    setReleased(false);
    setSettled(false);
  };

  const run = () => {
    setReleased(false);
    setSettled(false);
    // A 30ms timeout was not reliably long enough for the reset position to be
    // painted, so a second press left the dots where they already were and the
    // replay did nothing visible. Waiting two frames guarantees a paint at the
    // start position before the transition to the end position begins.
    requestAnimationFrame(() => requestAnimationFrame(() => setReleased(true)));
  };

  const leaky = state === 'leaky';

  return (
    <ToyFrame
      fig={5}
      title="Does the barrier hold?"
      schematic
    >
      <p className="text-sm text-text-secondary">
        Select a condition, then apply tracer.
      </p>

      <div role="group" aria-label="Barrier condition" className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-pressed={!leaky} onClick={() => pick('healthy')} className={pill(!leaky)}>
          Control
        </button>
        <button type="button" aria-pressed={leaky} onClick={() => pick('leaky')} className={pill(leaky)}>
          Disrupted
        </button>
      </div>

      <div
        className="relative mt-4 h-52 overflow-hidden rounded-lg border border-border-subtle bg-surface"
        role="img"
        aria-label={
          !released
            ? 'A layer of endothelial cells between the blood side and the brain side.'
            : leaky
              ? 'Tracer passes between the cells and reaches the brain side.'
              : 'Tracer is held on the blood side by the cell layer.'
        }
      >
        <span className="absolute left-3 top-2 text-[11px] font-medium text-text-muted">Blood</span>
        <span className="absolute bottom-2 left-3 text-[11px] font-medium text-text-muted">Brain</span>

        {/* the endothelial cell layer */}
        <div className="absolute inset-x-0 top-[98px] flex items-center">
          {Array.from({ length: CELLS }, (_, i) => (
            <Fragment key={i}>
              <div
                className={`h-9 flex-1 rounded-md border-2 transition-colors duration-300 ${
                  leaky
                    ? 'border-amber-500/70 bg-amber-500/10'
                    : 'border-emerald-600/70 bg-emerald-500/15'
                }`}
              />
              {i < CELLS - 1 && (
                <div
                  className={`h-9 shrink-0 transition-all duration-300 ${
                    leaky && GAPS.has(i) ? 'w-4 bg-transparent' : 'w-1.5 bg-emerald-600/70'
                  }`}
                />
              )}
            </Fragment>
          ))}
        </div>

        {/* tracer */}
        {tracers.map((t, i) => {
          const escapes = leaky && t.escapes;
          const top = !released ? 14 : escapes ? 178 : 76;
          return (
            <span
              key={i}
              className="absolute h-2.5 w-2.5 rounded-full bg-fuchsia-500"
              style={{
                left: `${t.left}%`,
                top: `${top}px`,
                // The reset must be instantaneous. With a transition on it too,
                // pressing replay animated the dots back to the start and then
                // forward again from wherever they had got to, so they barely
                // moved and the replay looked like a no-op.
                transition: released
                  ? `top 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${t.delay}ms`
                  : 'none',
              }}
            />
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" onClick={run} className={primaryPill}>
          {released ? 'Apply again' : 'Apply tracer'}
        </button>
      </div>

      <div aria-live="polite" className="mt-3 min-h-[3rem]">
        {settled && (
          <p className="animate-fade-in rounded-lg bg-surface px-4 py-3 text-sm text-text-primary">
            {leaky
              ? 'Tight junctions are disrupted and tracer crosses the monolayer to the abluminal side. This is the readout the assay measures.'
              : 'Tight junctions are intact and the monolayer excludes the tracer, which stays on the luminal side.'}
          </p>
        )}
      </div>
    </ToyFrame>
  );
};

export default BarrierToy;
