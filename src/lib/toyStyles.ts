/** Button styles shared by the playable figures in the research chapters. */

export const pill = (active = false) =>
  `rounded-full px-3.5 py-1.5 text-sm font-medium transition disabled:opacity-40 disabled:cursor-not-allowed ${
    active
      ? 'bg-text-primary text-background'
      : 'border border-border text-text-primary hover:bg-surface'
  }`;

export const primaryPill =
  'rounded-full px-4 py-1.5 text-sm font-medium transition bg-text-primary text-background hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed';
