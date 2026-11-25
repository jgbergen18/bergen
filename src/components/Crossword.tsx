import { KeyboardEvent, useMemo, useRef, useState } from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

type Dir = 'across' | 'down';

type Word = {
  num: number;
  dir: Dir;
  row: number;
  col: number;
  answer: string;
  clue: string;
};

const ROWS = 8;
const COLS = 10;

// Numbered in standard crossword order (left to right, top to bottom).
const WORDS: Word[] = [
  { num: 1, dir: 'across', row: 0, col: 7, answer: 'LAB', clue: 'Kirkeby ___, where Jamie grows stem cells in Copenhagen' },
  { num: 6, dir: 'across', row: 3, col: 4, answer: 'NEURON', clue: "Journal that published Jamie's Parkinson's work, and the cell you can click at the top of this page" },
  { num: 7, dir: 'across', row: 6, col: 0, answer: 'CODEX', clue: 'Coding program Jamie runs for Ukrainian high school students (ignore the dot)' },
  { num: 2, dir: 'down', row: 0, col: 9, answer: 'BARNARD', clue: 'College where Jamie studied neuroscience and computer science' },
  { num: 3, dir: 'down', row: 1, col: 4, answer: 'SYNTAX', clue: "Sentence structure, the subject of Jamie's MSc thesis" },
  { num: 4, dir: 'down', row: 2, col: 1, answer: 'PYTHON', clue: 'Language Jamie writes analysis code in' },
  { num: 5, dir: 'down', row: 2, col: 6, answer: 'ZURICH', clue: 'Swiss city where Jamie wrote that thesis' },
];

const key = (r: number, c: number) => `${r},${c}`;

type CellInfo = { answer: string; num?: number; across?: number; down?: number };

// Derive the grid from the word list so the two can never disagree.
const buildCells = () => {
  const cells = new Map<string, CellInfo>();
  WORDS.forEach((w, wi) => {
    for (let i = 0; i < w.answer.length; i++) {
      const r = w.row + (w.dir === 'down' ? i : 0);
      const c = w.col + (w.dir === 'across' ? i : 0);
      const k = key(r, c);
      const cell = cells.get(k) ?? { answer: w.answer[i] };
      if (cell.answer !== w.answer[i]) {
        throw new Error(`Crossword words disagree at ${k}`);
      }
      cell[w.dir] = wi;
      if (i === 0) cell.num = w.num;
      cells.set(k, cell);
    }
  });
  return cells;
};

const wordCells = (w: Word) =>
  Array.from({ length: w.answer.length }, (_, i) => ({
    r: w.row + (w.dir === 'down' ? i : 0),
    c: w.col + (w.dir === 'across' ? i : 0),
  }));

const Crossword = () => {
  const navigate = useNavigate();
  const cells = useMemo(buildCells, []);
  const [letters, setLetters] = useState<Record<string, string>>({});
  const [active, setActive] = useState<{ r: number; c: number } | null>(null);
  const [dir, setDir] = useState<Dir>('across');
  const [showAnimation, setShowAnimation] = useState(false);
  const inputs = useRef<Record<string, HTMLInputElement | null>>({});

  const isSolved = (l: Record<string, string>) =>
    [...cells.entries()].every(([k, cell]) => l[k] === cell.answer);
  const solved = isSolved(letters);

  // The word the cursor is in, following the current direction where possible.
  const activeCell = active ? cells.get(key(active.r, active.c)) : undefined;
  const activeDir: Dir | null = activeCell
    ? activeCell[dir] !== undefined
      ? dir
      : dir === 'across'
        ? 'down'
        : 'across'
    : null;
  const activeWordIndex = activeCell && activeDir ? activeCell[activeDir] : undefined;
  const activeWord = activeWordIndex !== undefined ? WORDS[activeWordIndex] : undefined;
  const inActiveWord = (r: number, c: number) =>
    !!activeWord && wordCells(activeWord).some((p) => p.r === r && p.c === c);

  const focusCell = (r: number, c: number) => inputs.current[key(r, c)]?.focus();

  const celebrate = () => {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 3000);
  };

  const step = (delta: 1 | -1) => {
    if (!active || !activeWord) return;
    const path = wordCells(activeWord);
    const i = path.findIndex((p) => p.r === active.r && p.c === active.c);
    const next = path[i + delta];
    if (next) focusCell(next.r, next.c);
  };

  const setLetter = (r: number, c: number, value: string) => {
    const next = { ...letters, [key(r, c)]: value };
    setLetters(next);
    if (value && !solved && isSolved(next)) celebrate();
  };

  const handleChange = (r: number, c: number, raw: string) => {
    // Take the last character typed so overtyping a filled cell works.
    const ch = raw.slice(-1).toUpperCase();
    if (ch && !/^[A-Z]$/.test(ch)) return;
    setLetter(r, c, ch);
    if (ch) step(1);
  };

  const move = (r: number, c: number, dr: number, dc: number) => {
    let nr = r + dr;
    let nc = c + dc;
    while (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
      if (cells.has(key(nr, nc))) {
        setDir(dr !== 0 ? 'down' : 'across');
        focusCell(nr, nc);
        return;
      }
      nr += dr;
      nc += dc;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, r: number, c: number) => {
    switch (e.key) {
      case 'ArrowRight': e.preventDefault(); move(r, c, 0, 1); break;
      case 'ArrowLeft': e.preventDefault(); move(r, c, 0, -1); break;
      case 'ArrowDown': e.preventDefault(); move(r, c, 1, 0); break;
      case 'ArrowUp': e.preventDefault(); move(r, c, -1, 0); break;
      case 'Backspace':
        if (!letters[key(r, c)]) {
          e.preventDefault();
          step(-1);
        }
        break;
      case ' ':
      case 'Enter': {
        // Switch direction at a crossing.
        e.preventDefault();
        const cell = cells.get(key(r, c));
        if (cell?.across !== undefined && cell?.down !== undefined) {
          setDir(activeDir === 'across' ? 'down' : 'across');
        }
        break;
      }
    }
  };

  const handleCellPointer = (r: number, c: number) => {
    const cell = cells.get(key(r, c));
    if (!cell) return;
    const already = active?.r === r && active?.c === c;
    if (already && cell.across !== undefined && cell.down !== undefined) {
      setDir(activeDir === 'across' ? 'down' : 'across');
    }
  };

  const selectWord = (w: Word) => {
    setDir(w.dir);
    focusCell(w.row, w.col);
  };

  const handleReveal = () => {
    const all: Record<string, string> = {};
    cells.forEach((cell, k) => (all[k] = cell.answer));
    setLetters(all);
    if (!solved) celebrate();
  };

  const handleReset = () => {
    setLetters({});
    setShowAnimation(false);
  };

  // Split text for the rainbow animation on completion
  const splitText = (text: string) =>
    text.split('').map((char, index) => (
      <span
        key={index}
        className="rainbow-letter inline-block transition-all duration-200"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char === ' ' ? ' ' : char}
      </span>
    ));

  const clueList = (d: Dir) =>
    WORDS.filter((w) => w.dir === d).sort((a, b) => a.num - b.num);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-3">
          Jamie Bergen Mini Crossword
        </h2>
        <p className="text-text-secondary text-lg">seven clues, all about me</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
        {/* Grid */}
        <div className="relative mx-auto w-full max-w-[30rem]">
          {showAnimation && (
            <div
              role="status"
              className="absolute inset-0 flex items-center justify-center z-10 bg-background/90 rounded-lg"
            >
              <div
                aria-label="Congratulations!"
                className="text-3xl md:text-4xl font-medium rainbow-text-always animate-bounce"
              >
                <span aria-hidden="true">{splitText('Congratulations!')}</span>
              </div>
            </div>
          )}

          <div
            role="group"
            aria-label="Crossword grid"
            className="grid gap-1 p-3 sm:p-4 bg-background rounded-xl border border-border-subtle shadow-sm"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: ROWS * COLS }, (_, i) => {
              const r = Math.floor(i / COLS);
              const c = i % COLS;
              const cell = cells.get(key(r, c));
              if (!cell) return <div key={i} className="aspect-square" aria-hidden="true" />;

              const isActive = active?.r === r && active?.c === c;
              const labelParts = [
                cell.across !== undefined ? `${WORDS[cell.across].num} across` : null,
                cell.down !== undefined ? `${WORDS[cell.down].num} down` : null,
              ].filter(Boolean);

              return (
                <div
                  key={i}
                  className={`relative aspect-square rounded-[5px] border-2 transition-colors duration-150 ${
                    solved
                      ? 'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-700'
                      : isActive
                        ? 'bg-amber-500/25 border-amber-500'
                        : inActiveWord(r, c)
                          ? 'bg-amber-500/10 border-border'
                          : 'bg-background border-border'
                  }`}
                >
                  {cell.num && (
                    <span className="pointer-events-none absolute top-0 left-0.5 text-[8px] sm:text-[10px] font-semibold text-text-secondary">
                      {cell.num}
                    </span>
                  )}
                  <input
                    ref={(el) => (inputs.current[key(r, c)] = el)}
                    type="text"
                    inputMode="text"
                    autoCapitalize="characters"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    value={letters[key(r, c)] ?? ''}
                    aria-label={`${labelParts.join(', ')}, row ${r + 1}, column ${c + 1}`}
                    onChange={(e) => handleChange(r, c, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, r, c)}
                    onMouseDown={() => handleCellPointer(r, c)}
                    onFocus={() => setActive({ r, c })}
                    className="absolute inset-0 w-full h-full p-0 text-center text-sm sm:text-lg font-semibold uppercase bg-transparent border-none outline-none text-text-primary caret-transparent cursor-pointer"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <Button variant="default" size="sm" className="px-6" onClick={() => navigate('/cv')}>
              <FileText className="w-4 h-4 mr-2" />
              Check CV for hints
            </Button>
            <Button onClick={handleReveal} variant="outline" size="sm" className="px-6">
              Reveal
            </Button>
            <Button onClick={handleReset} variant="outline" size="sm" className="px-6">
              Reset
            </Button>
          </div>
        </div>

        {/* Clues */}
        <div className="space-y-8 w-full max-w-md mx-auto lg:mx-0">
          {(['across', 'down'] as const).map((d) => (
            <div key={d}>
              <h3 className="text-lg font-semibold text-text-primary mb-3 border-b-2 border-border-subtle pb-2 capitalize">
                {d}
              </h3>
              <ol className="space-y-1">
                {clueList(d).map((w) => {
                  const isCurrent = activeWord === w;
                  return (
                    <li key={w.num}>
                      <button
                        type="button"
                        onClick={() => selectWord(w)}
                        className={`w-full text-left rounded-md px-2 py-1.5 text-sm leading-relaxed transition-colors ${
                          isCurrent
                            ? 'bg-amber-500/15 text-text-primary'
                            : 'text-text-secondary hover:bg-surface'
                        }`}
                      >
                        <span className="font-semibold text-text-primary">{w.num}.</span> {w.clue}{' '}
                        <span className="text-text-muted">({w.answer.length})</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crossword;
