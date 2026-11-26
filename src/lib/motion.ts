/**
 * Helpers for animation loops that should not run all the time.
 *
 * Two canvases on this site (the hero neuron and the CV globe) drove a
 * requestAnimationFrame loop from mount until unmount, whether or not they were
 * on screen and whether or not the reader had asked for reduced motion. On a
 * phone that pinned the main thread for as long as the page was open.
 */

/** True when the reader has asked the OS for reduced motion. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Runs `frame` on every animation frame, but only while `el` is near the
 * viewport and the tab is visible. If the reader prefers reduced motion, draws
 * a single frame and stops.
 *
 * Returns a cleanup function; call it from the effect that started the loop.
 */
export function runWhileVisible(
  el: Element | null,
  frame: (timestampMs: number) => void
): () => void {
  if (!el) return () => {};

  let raf = 0;
  let running = false;

  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    running = false;
  };

  const tick = (t: number) => {
    frame(t);
    raf = requestAnimationFrame(tick);
  };

  const start = () => {
    if (running) return;
    running = true;
    raf = requestAnimationFrame(tick);
  };

  if (prefersReducedMotion()) {
    // One static frame, so the figure is drawn but nothing moves. It has to be
    // redrawn on resize: both callers set canvas.width in their own
    // ResizeObserver, which resets the bitmap, and that observer fires after
    // this first frame - without redrawing, the canvas is left blank.
    let pending = 0;
    const draw = () => {
      cancelAnimationFrame(pending);
      pending = requestAnimationFrame((t) => frame(t));
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(pending);
      ro.disconnect();
    };
  }

  let onScreen = false;
  const sync = () => {
    if (onScreen && !document.hidden) start();
    else stop();
  };

  // A margin so the loop is already running by the time the figure scrolls in.
  const io = new IntersectionObserver(
    ([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    },
    { rootMargin: '200px' }
  );
  io.observe(el);

  document.addEventListener('visibilitychange', sync);

  return () => {
    io.disconnect();
    document.removeEventListener('visibilitychange', sync);
    stop();
  };
}
