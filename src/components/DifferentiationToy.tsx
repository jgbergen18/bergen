import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ToyFrame from './ToyFrame';
import { pill, primaryPill } from '../lib/toyStyles';

/**
 * Run the Kirkeby Lab's published hypothalamic differentiation. Factor windows
 * come from the STAR Methods and the outcomes from the BMP-duration section of
 * Abay-Nørgaard, Mueller, Hänninen et al., Cell Stem Cell (2026),
 * doi:10.1016/j.stem.2026.05.005. Published protocol only, no unpublished work.
 */

type OptionId = 'none' | 'd7' | 'd9' | 'd11' | 'd14';

const options: {
  id: OptionId;
  label: string;
  end: number | null;
  fate: 'vmh' | 'arc';
  note: string;
}[] = [
  {
    id: 'none',
    label: 'Never',
    end: null,
    fate: 'vmh',
    note: 'Without BMP4 the progenitors remain anterior tuberal. No AGRP neurons and no tanycytes.',
  },
  {
    id: 'd7',
    label: 'Days 5–7',
    end: 7,
    fate: 'vmh',
    note: 'Two days is too short. The progenitors remain anterior tuberal and mature into VMH cell types.',
  },
  {
    id: 'd9',
    label: 'Days 5–9',
    end: 9,
    fate: 'vmh',
    note: 'Still too short for posterior specification. Anterior progenitors, VMH cell types.',
  },
  {
    id: 'd11',
    label: 'Days 5–11',
    end: 11,
    fate: 'arc',
    note: 'Long enough to specify posterior tuberal progenitors, the source of arcuate cell types.',
  },
  {
    id: 'd14',
    label: 'Days 5–14',
    end: 14,
    fate: 'arc',
    note: 'The published ARC protocol. Exposure beyond day 14 causes the cultures to collapse.',
  },
];

// Days 0–16 (patterning) take most of the width; 16–50 (maturation) is squashed.
const SPLIT = 70;
const pos = (day: number) =>
  day <= 16 ? (day / 16) * SPLIT : SPLIT + ((day - 16) / (50 - 16)) * (100 - SPLIT);

const factors = [
  { name: 'SB431542 + Noggin', from: 0, to: 9, isBmp: false },
  { name: 'SHH', from: 0, to: 9, isBmp: false },
  { name: 'CHIR (WNT)', from: 2, to: 9, isBmp: false },
  { name: 'BMP4', from: 5, to: 14, isBmp: true },
  { name: 'IGFBP-3', from: 7, to: 14, isBmp: false },
  { name: 'BMP7', from: 25, to: 50, isBmp: false },
];

const ticks = [0, 5, 9, 14, 16, 25, 50];
const wideOnly = new Set([9, 16, 25]);

const fates = {
  vmh: {
    region: 'Ventromedial hypothalamus',
    short: 'VMH',
    progenitors: 'Anterior tuberal progenitors (SHH, NR5A1, SOX14)',
    cells: ['NR5A1 / SOX14 / GPR149 neurons', 'POMC neurons (VMH subtype)', 'Astrocytes'],
    ring: 'border-sky-500/50 bg-sky-500/10',
    chip: 'bg-sky-500/15 text-sky-800 dark:text-sky-200',
  },
  arc: {
    region: 'Arcuate nucleus',
    short: 'ARC',
    progenitors: 'Posterior tuberal progenitors (RAX, TBX3, FGF10)',
    cells: ['AGRP neurons (orexigenic)', 'POMC neurons (anorexigenic)', 'Tanycytes'],
    ring: 'border-emerald-500/50 bg-emerald-500/10',
    chip: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-200',
  },
} as const;

const DifferentiationToy = () => {
  const [choice, setChoice] = useState<OptionId>('d14');
  const [day, setDay] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>('idle');
  const option = options.find((o) => o.id === choice)!;

  useEffect(() => {
    if (phase !== 'running') return;
    const timer = setInterval(() => {
      setDay((d) => {
        if (d >= 50) {
          clearInterval(timer);
          setPhase('done');
          return 50;
        }
        return d + 1;
      });
    }, 45);
    return () => clearInterval(timer);
  }, [phase]);

  const pick = (id: OptionId) => {
    setChoice(id);
    setPhase('idle');
    setDay(0);
  };

  const run = () => {
    setDay(0);
    setPhase('running');
  };

  const shownDay = phase === 'idle' ? 0 : day;
  const fate = fates[option.fate];

  return (
    <ToyFrame
      fig={2}
      title="Run the differentiation"
      caption={
        <>
          BMP4 exposure window determines anterior versus posterior tuberal fate. Simplified
          from the lab's published ARC protocol, which predates my arrival; I am not an author.{' '}
          <a
            href="https://doi.org/10.1016/j.stem.2026.05.005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-text-primary hover:underline"
          >
            Abay-Nørgaard, Mueller, Hänninen et al., Cell Stem Cell (2026)
            <ExternalLink size={12} />
          </a>
        </>
      }
    >
      <p className="text-sm text-text-secondary">
        Set the BMP4 exposure window.
      </p>

      <div role="group" aria-label="BMP4 window" className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={choice === o.id}
            onClick={() => pick(o.id)}
            className={pill(choice === o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* protocol timeline, filling in as the days run */}
      <div className="mt-5 space-y-1.5" aria-hidden="true">
        {factors.map((f) => {
          const to = f.isBmp ? option.end : f.to;
          const visibleTo = to === null ? null : Math.min(to, Math.max(shownDay, f.from));
          const width = visibleTo === null || shownDay <= f.from ? 0 : pos(visibleTo) - pos(f.from);
          return (
            <div
              key={f.name}
              className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[9rem_1fr] items-center gap-2"
            >
              <span
                className={`text-[10px] sm:text-xs leading-tight ${
                  f.isBmp ? 'font-semibold text-text-primary' : 'text-text-secondary'
                }`}
              >
                {f.name}
              </span>
              <div className="relative h-4">
                {f.isBmp && option.end !== null && (
                  <div
                    className="absolute inset-y-0.5 rounded-full border border-dashed border-amber-500/40"
                    style={{ left: `${pos(5)}%`, width: `${pos(option.end) - pos(5)}%` }}
                  />
                )}
                <div
                  className={`absolute inset-y-0.5 rounded-full ${
                    f.isBmp ? 'bg-amber-500' : 'bg-text-muted/40'
                  }`}
                  style={{ left: `${pos(f.from)}%`, width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}

        <div className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-2 pt-1">
          <span className="text-[10px] sm:text-xs text-text-muted">Day</span>
          <div className="relative h-4 border-t border-border">
            {ticks.map((d) => (
              <span
                key={d}
                className={`absolute top-0 -translate-x-1/2 text-[10px] text-text-muted ${
                  wideOnly.has(d) ? 'hidden sm:block' : ''
                }`}
                style={{ left: `${pos(d)}%` }}
              >
                <span className="block mx-auto h-1.5 w-px bg-border" />
                {d}
              </span>
            ))}
            {phase !== 'idle' && (
              <span
                className="absolute -top-[5.6rem] bottom-0 w-px bg-text-primary/50"
                style={{ left: `${pos(shownDay)}%` }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" onClick={run} disabled={phase === 'running'} className={primaryPill}>
          {phase === 'running' ? `Day ${shownDay}…` : phase === 'done' ? 'Run it again' : 'Run it'}
        </button>
        {phase === 'done' && (
          <span className="text-sm text-text-secondary">Day 50:</span>
        )}
      </div>

      {/* outcome */}
      <div aria-live="polite" className="mt-4">
        {phase !== 'done' ? (
          <p className="rounded-lg border border-dashed border-border px-4 py-6 text-center text-sm text-text-muted">
            {phase === 'running' ? 'Differentiating…' : 'Run the protocol to see the outcome.'}
          </p>
        ) : (
          <div className="animate-fade-in">
            <div className={`rounded-lg border p-4 ${fate.ring}`}>
              <p className="text-sm font-medium text-text-primary">
                {fate.region} <span className="font-normal text-text-muted">({fate.short})</span>
              </p>
              <p className="mt-1 text-xs text-text-secondary">{fate.progenitors}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {fate.cells.map((c) => (
                  <li key={c} className={`rounded-full px-2.5 py-1 text-xs ${fate.chip}`}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-sm text-text-primary">{option.note}</p>
          </div>
        )}
      </div>
    </ToyFrame>
  );
};

export default DifferentiationToy;
