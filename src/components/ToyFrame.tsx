import { ReactNode } from 'react';

/**
 * Shared frame for the playable figures. No caption block: anything that has
 * to be said sits in the header, as a short source credit or a "Schematic"
 * tag, so the figure is not followed by a paragraph of prose.
 */
const ToyFrame = ({
  fig,
  title,
  schematic,
  source,
  children,
}: {
  fig: number;
  title: string;
  /** Marks a figure whose drawing illustrates a result rather than plotting data. */
  schematic?: boolean;
  /** Credit for work that is not Jamie's, e.g. a published protocol. */
  source?: ReactNode;
  children: ReactNode;
}) => (
  <figure className="rounded-xl border border-border-subtle bg-card p-4 shadow-sm sm:p-6">
    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 border-b border-border-subtle pb-3">
      <span className="font-mono text-xs text-text-muted">Fig. {fig}</span>
      <span className="text-sm font-semibold text-text-primary">{title}</span>
      {schematic && (
        <span className="rounded-full border border-border-subtle px-2 py-0.5 text-[11px] text-text-muted">
          Schematic
        </span>
      )}
      {source && <span className="ml-auto text-[11px] text-text-muted">{source}</span>}
    </div>
    <div className="mt-4">{children}</div>
  </figure>
);

export default ToyFrame;
