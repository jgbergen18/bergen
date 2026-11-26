import { useState } from 'react';
import Crossword from './Crossword';

/**
 * The crossword, behind a toggle. Open, it is 1,200px on a phone - 11% of the
 * home page - for something nobody needs to read. The heading stays visible so
 * it is still obviously there.
 */
const CrosswordSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="crossword" className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Crossword</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
          Seven clues, all about me
        </h2>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="crossword-grid"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface hover:-translate-y-0.5"
        >
          {open ? 'Hide the crossword' : 'Play the crossword'}
        </button>

        {open && (
          <div id="crossword-grid" className="mt-10 animate-fade-in">
            <Crossword />
          </div>
        )}
      </div>
    </section>
  );
};

export default CrosswordSection;
