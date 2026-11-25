import { ReactNode } from 'react';

/** Shared frame for the playable figures in the research chapters. */
const ToyFrame = ({
  fig,
  title,
  children,
  caption,
}: {
  fig: number;
  title: string;
  children: ReactNode;
  caption: ReactNode;
}) => (
  <figure className="rounded-xl border border-border-subtle bg-surface/40 p-4 sm:p-5">
    <p className="flex items-baseline gap-2">
      <span className="font-mono text-xs text-text-muted">Fig. {fig}</span>
      <span className="text-sm font-semibold text-text-primary">{title}</span>
    </p>
    <div className="mt-3">{children}</div>
    <figcaption className="mt-4 text-xs text-text-secondary leading-relaxed">{caption}</figcaption>
  </figure>
);

export default ToyFrame;
