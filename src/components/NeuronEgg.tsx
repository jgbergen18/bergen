import { useEffect, useRef, useState } from 'react';
import Neuron from './Neuron';

/**
 * The neuron, demoted to an easter egg in the footer.
 *
 * It used to occupy roughly half the hero, which meant the one screen a
 * 60-second reader is guaranteed to see was given over to a stock
 * integrate-and-fire model that is not Jamie's research. It is kept because it
 * is fun, but it now has to be opened, and it sits at the very bottom.
 *
 * `jamie.spike()` from the devtools console opens it too.
 */
const NeuronEgg = () => {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onConsoleSpike = () => setOpen(true);
    window.addEventListener('jamie:spike', onConsoleSpike);
    return () => window.removeEventListener('jamie:spike', onConsoleSpike);
  }, []);

  useEffect(() => {
    if (open) panel.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [open]);

  return (
    <div id="neuron" className="mt-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="neuron-panel"
        className="mx-auto flex items-center gap-2 rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted transition hover:border-border hover:text-text-secondary"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="shrink-0">
          <circle cx="9" cy="12" r="3.2" className="fill-text-muted" />
          <path
            d="M12.2 12h7M5.8 12H4M7 9.6 5.2 8M7 14.4 5.2 16M19.2 12a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0"
            className="stroke-text-muted"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        {open ? 'Hide the neuron' : 'Show the neuron'}
      </button>

      {open && (
        <div
          id="neuron-panel"
          ref={panel}
          className="mx-auto mt-4 max-w-xl animate-fade-in rounded-xl border border-border-subtle bg-surface p-4"
        >
          <Neuron compact />
          <p className="mt-3 text-center text-xs leading-relaxed text-text-muted">
            A leaky integrate-and-fire neuron. Current builds and leaks away; past threshold it
            fires and the spike runs down the axon. Not my research.
          </p>
        </div>
      )}
    </div>
  );
};

export default NeuronEgg;
