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
  <figure className="rounded-xl border border-border-subtle bg-card p-4 shadow-sm sm:p-6">
    <p className="flex items-baseline gap-2 border-b border-border-subtle pb-3">
      <span className="font-mono text-xs text-text-muted">Fig. {fig}</span>
      <span className="text-sm font-semibold text-text-primary">{title}</span>
    </p>
    <div className="mt-4">{children}</div>
    <figcaption className="mt-5 border-t border-border-subtle pt-3 text-xs leading-relaxed text-text-muted">
      {caption}
    </figcaption>
  </figure>
);

export default ToyFrame;
