import { useEffect, useState } from 'react';
import ToyFrame from './ToyFrame';
import { pill, primaryPill } from '../lib/toyStyles';

/**
 * Run the experiment from Garretti et al., Neuron (2023),
 * doi:10.1016/j.neuron.2023.07.015. Groups, outcomes and the depletion arms are
 * the paper's; the cells drawn are illustrative, not counts from the data.
 */

type Strain = 'wt' | 'hla';
type Shot = 'pbs' | 'cfa' | 'syn';
type Depletion = 'isotype' | 'cd4' | 'cd8';

type Outcome = {
  illness: string;
  transit: string;
  neurons: string;
  brain: string;
  alive: number;
  tcells: number;
  verdict: string;
};

const strains: { id: Strain; label: string; sub: string }[] = [
  { id: 'wt', label: 'Wild type', sub: 'ordinary mouse' },
  { id: 'hla', label: 'HLA-DRB1*15:01', sub: 'carries the human gene' },
];

const shots: { id: Shot; label: string; sub: string }[] = [
  { id: 'pbs', label: 'Saline', sub: 'PBS' },
  { id: 'cfa', label: 'Adjuvant only', sub: 'CFA' },
  { id: 'syn', label: 'Adjuvant + α-syn 32–46', sub: 'CFA / α-syn' },
];

const depletions: { id: Depletion; label: string }[] = [
  { id: 'isotype', label: 'Isotype control' },
  { id: 'cd4', label: 'Deplete CD4+' },
  { id: 'cd8', label: 'Deplete CD8+' },
];

const HEALTHY: Omit<Outcome, 'verdict'> = {
  illness: 'None',
  transit: 'Normal',
  neurons: 'Normal density',
  brain: 'Nothing',
  alive: 16,
  tcells: 1,
};

const outcomes: Record<string, Outcome> = {
  'wt-pbs': { ...HEALTHY, verdict: 'Saline control: no illness, normal transit, neuron density intact.' },
  'wt-cfa': {
    ...HEALTHY,
    illness: 'None — 0% got sick',
    verdict: 'Adjuvant alone does not produce illness in wild-type mice.',
  },
  'wt-syn': {
    ...HEALTHY,
    illness: 'Almost none — 4% got sick',
    verdict:
      'The same immunization without HLA-DRB1*15:01 produces almost no illness. The human allele is required.',
  },
  'hla-pbs': { ...HEALTHY, verdict: 'The allele alone is not sufficient; it requires the antigen.' },
  'hla-cfa': {
    illness: 'None',
    transit: 'Somewhat slowed',
    neurons: 'Fewer TH+ neurons in the myenteric plexus',
    brain: 'Nothing',
    alive: 14,
    tcells: 3,
    verdict:
      'Adjuvant alone reduces TH+ density in the myenteric plexus, which is why CFA is run as its own control group.',
  },
  'hla-syn': {
    illness: '25% got sick or died',
    transit: 'Delayed — the mice are constipated',
    neurons: 'Fewer ANNA1+ neurons in the submucosal plexus',
    brain: 'Still nothing at 70 days',
    alive: 9,
    tcells: 7,
    verdict:
      'α-syn 32–46 in HLA-DRB1*15:01 mice produces enteric neuron loss from roughly 18 days post-immunization, with no CNS involvement at 70 days.',
  },
};

const depletionOutcomes: Record<Depletion, { neurons: string; alive: number; tcells: number; verdict: string }> = {
  isotype: {
    neurons: 'Fewer neurons, same as before',
    alive: 9,
    tcells: 7,
    verdict: 'Isotype control: no change, the neuron loss remains.',
  },
  cd4: {
    neurons: 'TH+ neurons came back in the submucosal plexus',
    alive: 13,
    tcells: 1,
    verdict: 'CD4+ depletion partially rescues TH+ neurons in the submucosal plexus.',
  },
  cd8: {
    neurons: 'Fewer neurons, no rescue',
    alive: 9,
    tcells: 7,
    verdict: 'CD8+ depletion does not rescue, implicating CD4+ T cells specifically.',
  },
};

const TOTAL = 16;
const spots = Array.from({ length: TOTAL }, (_, i) => ({
  x: 34 + (i % 8) * 44 + (i < 8 ? 0 : 22),
  y: i < 8 ? 40 : 72,
}));
const lossOrder = [5, 12, 2, 9, 15, 7, 0, 10, 3, 13, 6, 11, 1, 14, 4, 8];
// T cells sit inside the gut wall, in the gaps between the two rows of neurons.
// Ordered so that when only one is left it sits in the middle, not on an edge.
const tcellSpots = [
  [188, 56], [56, 24], [144, 88], [232, 24], [320, 88], [100, 88], [276, 24],
];

const Readout = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-b border-border-subtle py-1.5 last:border-0">
    <span className="text-xs text-text-secondary">{name}</span>
    <span className="text-xs font-medium text-text-primary">{value}</span>
  </div>
);

const GutToy = () => {
  const [strain, setStrain] = useState<Strain | null>(null);
  const [shot, setShot] = useState<Shot | null>(null);
  const [depletion, setDepletion] = useState<Depletion | null>(null);
  const [phase, setPhase] = useState<'setup' | 'running' | 'done'>('setup');
  const [day, setDay] = useState(0);

  useEffect(() => {
    if (phase !== 'running') return;
    const timer = setInterval(() => {
      setDay((d) => {
        if (d >= 70) {
          clearInterval(timer);
          setPhase('done');
          return 70;
        }
        return d + 2;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [phase]);

  const base = strain && shot ? outcomes[`${strain}-${shot}`] : null;
  const dep = depletion ? depletionOutcomes[depletion] : null;
  const canDeplete = phase === 'done' && strain === 'hla' && shot === 'syn';

  const shown = phase === 'done' && base ? base : null;
  const alive = shown ? (dep ? dep.alive : shown.alive) : TOTAL;
  const tcells = shown ? (dep ? dep.tcells : shown.tcells) : 0;
  const lost = new Set(lossOrder.slice(0, TOTAL - alive));

  const reset = (fn: () => void) => {
    fn();
    setPhase('setup');
    setDepletion(null);
    setDay(0);
  };

  const run = () => {
    setDay(0);
    setPhase('running');
  };

  return (
    <ToyFrame
      fig={4}
      title="Run the experiment"
      schematic
    >
      <p className="text-sm text-text-secondary">Which mouse?</p>
      <div role="group" aria-label="Mouse strain" className="mt-2 flex flex-wrap gap-2">
        {strains.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={strain === s.id}
            onClick={() => reset(() => setStrain(s.id))}
            className={pill(strain === s.id)}
          >
            {s.label}
            <span className="ml-1.5 font-normal text-text-muted">{s.sub}</span>
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-text-secondary">What do you inject?</p>
      <div role="group" aria-label="Injection" className="mt-2 flex flex-wrap gap-2">
        {shots.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={shot === s.id}
            onClick={() => reset(() => setShot(s.id))}
            className={pill(shot === s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={run}
          disabled={!strain || !shot || phase === 'running'}
          className={primaryPill}
        >
          {phase === 'running' ? `Day ${day}…` : phase === 'done' ? 'Run it again' : 'Run it'}
        </button>
        {!strain || !shot ? (
          <span className="text-xs text-text-muted">Select a strain and an injection.</span>
        ) : null}
      </div>

      {/* the gut */}
      <svg
        viewBox="0 0 400 110"
        role="img"
        aria-label={
          shown
            ? `Gut wall with ${alive} of ${TOTAL} enteric neurons remaining.`
            : 'Gut wall with enteric neurons, before the experiment.'
        }
        className="mx-auto mt-4 w-full max-w-lg"
      >
        <rect
          x={8}
          y={12}
          width={384}
          height={86}
          rx={16}
          className="fill-rose-500/10 stroke-rose-400/60"
          strokeWidth={1.5}
        />
        {spots.map((n, i) => (
          <g
            key={i}
            className="transition-opacity duration-700"
            style={{ opacity: lost.has(i) ? 0.15 : 1 }}
          >
            <circle cx={n.x} cy={n.y} r={8} className="fill-emerald-500 dark:fill-emerald-400" />
            <circle cx={n.x} cy={n.y} r={3} className="fill-emerald-900/50" />
          </g>
        ))}
        {tcellSpots.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            className="fill-fuchsia-500 stroke-background transition-opacity duration-700"
            strokeWidth={2}
            style={{ opacity: i < tcells ? 1 : 0 }}
          />
        ))}
      </svg>
      <ul className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1 text-[11px] text-text-secondary">
        <li className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" /> Enteric neuron
        </li>
        <li className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-fuchsia-500" /> T cell
        </li>
      </ul>

      {/* readouts */}
      <div aria-live="polite" className="mt-4">
        {phase !== 'done' || !base ? (
          <p className="rounded-lg border border-dashed border-border px-4 py-5 text-center text-sm text-text-muted">
            {phase === 'running' ? 'Running…' : 'No results yet.'}
          </p>
        ) : (
          <div className="animate-fade-in">
            <div className="rounded-lg bg-surface px-4 py-2">
              <Readout name="Weight and illness" value={base.illness} />
              <Readout name="Gut transit time" value={base.transit} />
              <Readout name="Enteric neurons" value={dep ? dep.neurons : base.neurons} />
              <Readout name="Brain at 70 days" value={base.brain} />
            </div>
            <p className="mt-3 text-sm text-text-primary">{dep ? dep.verdict : base.verdict}</p>
          </div>
        )}
      </div>

      {canDeplete && (
        <div className="mt-4 animate-fade-in rounded-lg border border-border-subtle p-4">
          <p className="text-sm text-text-primary">
            Deplete a T cell subset and re-run to test which population is responsible.
          </p>
          <div role="group" aria-label="T cell depletion" className="mt-3 flex flex-wrap gap-2">
            {depletions.map((d) => (
              <button
                key={d.id}
                type="button"
                aria-pressed={depletion === d.id}
                onClick={() => setDepletion(d.id)}
                className={pill(depletion === d.id)}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </ToyFrame>
  );
};

export default GutToy;
