import { ReactNode, useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Shared frame for the playable figures.
 *
 * Collapsed by default: open, the five figures were 2,470px on a 390px phone,
 * a quarter of the whole home page. The header still names each one, and the
 * titles are verbs, so what you get for opening one is clear.
 *
 * There is no caption block. Anything that has to be said sits in the header:
 * a short source credit, or a "Schematic" tag for a figure whose drawing
 * illustrates a result rather than plotting data.
 */
const ToyFrame = ({
  fig,
  title,
  schematic,
  source,
  defaultOpen = false,
  children,
}: {
  fig: number;
  title: string;
  /** The first figure opens on load, so a reader sees one working example. */
  defaultOpen?: boolean;
  /** Marks a figure whose drawing illustrates a result rather than plotting data. */
  schematic?: boolean;
  /** Credit for work that is not Jamie's, e.g. a published protocol. */
  source?: ReactNode;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <figure className="rounded-xl border border-border-subtle bg-card shadow-sm">
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 px-4 py-3 sm:px-6">
        {/* The credit is a link, so it stays outside the toggle button. */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex items-center gap-2.5 rounded text-left"
        >
          <span className="font-mono text-xs text-text-muted">Fig. {fig}</span>
          <span className="text-sm font-semibold text-text-primary group-hover:underline">
            {title}
          </span>
          <ChevronDown
            size={15}
            aria-hidden="true"
            className={`shrink-0 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {schematic && (
          <span className="rounded-full border border-border-subtle px-2 py-0.5 text-[11px] text-text-muted">
            Schematic
          </span>
        )}

        {source && open && <span className="ml-auto text-[11px] text-text-muted">{source}</span>}
      </div>

      {open && (
        <div id={panelId} className="animate-fade-in border-t border-border-subtle px-4 py-5 sm:px-6">
          {children}
        </div>
      )}
    </figure>
  );
};

export default ToyFrame;
