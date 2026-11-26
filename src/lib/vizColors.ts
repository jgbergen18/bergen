/**
 * Canvas colours taken from the CSS design tokens.
 *
 * The SVG and HTML figures paint themselves from `--viz-*` through Tailwind.
 * The two canvas pieces (the neuron, the globe) cannot, so they read the same
 * tokens here instead of carrying a second hard-coded palette that would drift
 * out of step with the first.
 *
 * `getComputedStyle` forces a style read, so the result is cached and only
 * recomputed when the theme flips.
 */

type RGB = [number, number, number];

export interface VizColors {
  /** Categorical slots, as rgb triples so they can be interpolated. */
  viz1: RGB;
  viz2: RGB;
  viz3: RGB;
  viz4: RGB;
  /** Surfaces and ink. */
  background: RGB;
  card: RGB;
  border: RGB;
  textPrimary: RGB;
  textMuted: RGB;
  /** `rgba()` string for any of the above. */
  a: (c: RGB, alpha: number) => string;
  /** Opaque blend of two colours, t = 0 gives the first. */
  mix: (x: RGB, y: RGB, t: number) => RGB;
  /** `rgb()` string. */
  s: (c: RGB) => string;
  /** `#rrggbb`, for the few places that append a hex alpha suffix. */
  hex: (c: RGB) => string;
}

const hslToRgb = (h: number, s: number, l: number): RGB => {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
};

/** Parses a token written as the HSL triple "206 67% 33%". */
const parse = (value: string): RGB => {
  const m = value.trim().match(/^([\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/);
  if (!m) return [128, 128, 128];
  return hslToRgb(Number(m[1]), Number(m[2]) / 100, Number(m[3]) / 100);
};

const a = (c: RGB, alpha: number) => `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
const s = (c: RGB) => `rgb(${c[0]},${c[1]},${c[2]})`;
const hex = (c: RGB) => `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
const mix = (x: RGB, y: RGB, t: number): RGB =>
  [0, 1, 2].map((i) => Math.round(x[i] + (y[i] - x[i]) * t)) as RGB;

let cache: { dark: boolean; colors: VizColors } | null = null;

export function vizColors(): VizColors {
  const dark = document.documentElement.classList.contains('dark');
  if (cache && cache.dark === dark) return cache.colors;

  const cs = getComputedStyle(document.documentElement);
  const t = (name: string) => parse(cs.getPropertyValue(name));
  const colors: VizColors = {
    viz1: t('--viz-1'),
    viz2: t('--viz-2'),
    viz3: t('--viz-3'),
    viz4: t('--viz-4'),
    background: t('--background'),
    card: t('--card'),
    border: t('--border'),
    textPrimary: t('--text-primary'),
    textMuted: t('--text-muted'),
    a,
    mix,
    s,
    hex,
  };
  cache = { dark, colors };
  return colors;
}

/** Drops the cache so the next read re-reads the tokens (used when the theme flips). */
export const resetVizColors = () => {
  cache = null;
};
