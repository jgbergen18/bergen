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
    setTimeout(() => setReleased(true), 30);
  };

  const leaky = state === 'leaky';

  return (
    <ToyFrame
      fig={6}
      title="Does the barrier hold?"
      caption={
        <>
          My first lab, and the first thing I ever grew. Brain blood vessels are sealed much tighter
          than vessels anywhere else in the body, and in adrenoleukodystrophy that seal fails. You
          cannot watch that happen in a person, so you build the barrier in a dish and see what gets
          through. This is the idea of the assay, not data.
        </>
      }
    >
      <p className="text-sm text-text-secondary">
        Pick a barrier, then send in a tracer and see where it ends up.
      </p>

      <div role="group" aria-label="Barrier condition" className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-pressed={!leaky} onClick={() => pick('healthy')} className={pill(!leaky)}>
          Healthy cells
        </button>
        <button type="button" aria-pressed={leaky} onClick={() => pick('leaky')} className={pill(leaky)}>
          Disease-like cells
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
                transition: `top 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${t.delay}ms`,
              }}
            />
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" onClick={run} className={primaryPill}>
          {released ? 'Send it again' : 'Send in the tracer'}
        </button>
      </div>

      <div aria-live="polite" className="mt-3 min-h-[3rem]">
        {settled && (
          <p className="animate-fade-in rounded-lg bg-surface px-4 py-3 text-sm text-text-primary">
            {leaky
              ? 'The junctions between the cells have come apart, so the tracer walks straight through into the brain side. That is the thing you are trying to measure.'
              : 'The cells are stuck to each other tightly enough that nothing gets past them. This is what a working barrier looks like.'}
          </p>
        )}
      </div>
    </ToyFrame>
  );
};

export default BarrierToy;
