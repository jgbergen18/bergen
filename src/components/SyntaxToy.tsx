import { useState } from 'react';
import ToyFrame from './ToyFrame';
import { pill } from '../lib/toyStyles';

/**
 * The stimulus logic of the MSc thesis, as a short quiz: a picture fixes the
 * meaning, the words never change, so what differs between trials is structure.
 * No results from the thesis appear here; the manuscript is in preparation.
 */

type Trial = { high: boolean };

// Alternating so nobody can win by always clicking the same button.
const TRIALS: Trial[] = [{ high: true }, { high: false }, { high: false }, { high: true }];

const Triangles = ({ cx, cy, show }: { cx: number; cy: number; show: boolean }) => (
  <g className="fill-amber-500" style={{ opacity: show ? 1 : 0 }}>
    {[-9, 0, 9].map((dx, i) => (
      <polygon
        key={dx}
        points={`${cx + dx},${cy - 6 + (i === 1 ? -4 : 0)} ${cx + dx - 5},${cy + 4 + (i === 1 ? -4 : 0)} ${cx + dx + 5},${cy + 4 + (i === 1 ? -4 : 0)}`}
      />
    ))}
  </g>
);

const Tree = ({ x, triangles }: { x: number; triangles: boolean }) => (
  <g>
    <rect x={x - 4} y={84} width={8} height={34} rx={2} className="fill-stone-400 dark:fill-stone-500" />
    <circle
      cx={x}
      cy={62}
      r={28}
      className="fill-emerald-500/25 stroke-emerald-600 dark:stroke-emerald-400"
      strokeWidth={2}
    />
    <Triangles cx={x} cy={62} show={triangles} />
  </g>
);

const Hat = ({ x, triangles }: { x: number; triangles: boolean }) => (
  <g>
    <ellipse
      cx={x}
      cy={110}
      rx={36}
      ry={7}
      className="fill-sky-500/40 stroke-sky-600 dark:stroke-sky-400"
      strokeWidth={2}
    />
    <path
      d={`M ${x - 22} 108 L ${x - 19} 46 Q ${x} 39 ${x + 19} 46 L ${x + 22} 108 Z`}
      className="fill-sky-100 stroke-sky-600 dark:fill-sky-950 dark:stroke-sky-400"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d={`M ${x - 21.7} 100 L ${x + 21.7} 100 L ${x + 22} 108 L ${x - 22} 108 Z`}
      className="fill-sky-600 dark:fill-sky-400"
    />
    <Triangles cx={x} cy={74} show={triangles} />
  </g>
);

const bracket = 'font-semibold text-fuchsia-600 dark:text-fuchsia-300';

const HighBrackets = () => (
  <>
    I see <span className={bracket}>[</span> <span className={bracket}>[</span> trees and hats{' '}
    <span className={bracket}>]</span> with triangles <span className={bracket}>]</span>
  </>
);

const LowBrackets = () => (
  <>
    I see <span className={bracket}>[</span> trees and <span className={bracket}>[</span> hats with
    triangles <span className={bracket}>]</span> <span className={bracket}>]</span>
  </>
);

const SyntaxToy = () => {
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const trial = TRIALS[i];
  const done = i >= TRIALS.length;
  const correct = answer !== null && answer === trial?.high;

  const choose = (high: boolean) => {
    if (answer !== null) return;
    setAnswer(high);
    if (high === trial.high) setScore((s) => s + 1);
  };

  const next = () => {
    setAnswer(null);
    setI((n) => n + 1);
  };

  const restart = () => {
    setI(0);
    setAnswer(null);
    setScore(0);
  };

  return (
    <ToyFrame
      fig={3}
      title="Say the sentence"
    >
      {done ? (
        <div className="py-6 text-center animate-fade-in">
          <p className="text-lg font-medium text-text-primary">
            {score} of {TRIALS.length}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-text-secondary">
            Identical words and word order throughout. Only the attachment height changed.
          </p>
          <button type="button" onClick={restart} className={`${pill()} mt-4`}>
            Go again
          </button>
        </div>
      ) : (
        <>
          <p className="text-sm text-text-secondary">
            Trial {i + 1} of {TRIALS.length}. Produce the sentence:{' '}
            <span className="text-text-primary">“I see trees and hats with triangles.”</span>
          </p>

          <svg
            viewBox="0 0 400 125"
            role="img"
            aria-label={
              trial.high
                ? 'Two trees with triangles and two hats with triangles'
                : 'Two plain trees and two hats with triangles'
            }
            className="mx-auto mt-3 w-full max-w-md"
          >
            <Tree x={48} triangles={trial.high} />
            <Tree x={126} triangles={trial.high} />
            <Hat x={248} triangles />
            <Hat x={340} triangles />
          </svg>

          <p className="mt-2 text-center text-sm text-text-primary">
            Which structure did you produce?
          </p>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[true, false].map((high) => {
              const chosen = answer === high;
              const isRight = high === trial.high;
              return (
                <button
                  key={String(high)}
                  type="button"
                  onClick={() => choose(high)}
                  disabled={answer !== null}
                  className={`rounded-lg border p-3 text-left transition ${
                    answer === null
                      ? 'border-border hover:bg-surface'
                      : isRight
                        ? 'border-emerald-500/60 bg-emerald-500/10'
                        : chosen
                          ? 'border-rose-500/60 bg-rose-500/10'
                          : 'border-border-subtle opacity-50'
                  }`}
                >
                  <span className="block text-sm font-medium text-text-primary">
                    {high ? 'High attachment' : 'Low attachment'}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] leading-relaxed text-text-secondary">
                    {high ? <HighBrackets /> : <LowBrackets />}
                  </span>
                </button>
              );
            })}
          </div>

          <div aria-live="polite" className="mt-3 min-h-[3.5rem]">
            {answer !== null && (
              <div className="animate-fade-in rounded-lg bg-surface px-4 py-3">
                <p className="text-sm text-text-primary">
                  {correct ? 'Correct.' : 'Incorrect.'}{' '}
                  {trial.high
                    ? 'The prepositional phrase modifies both nouns, so it attaches high.'
                    : 'The prepositional phrase modifies the second noun only, so it attaches low.'}
                </p>
                <button type="button" onClick={next} className={`${pill()} mt-3`}>
                  {i === TRIALS.length - 1 ? 'See how you did' : 'Next picture'}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </ToyFrame>
  );
};

export default SyntaxToy;
