import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface Cell {
  letter: string;
  number?: number;
  isBlack: boolean;
  answer: string;
  clueAcross?: string;
  clueDown?: string;
}

const Crossword = () => {
  // 5x5 grid for mini crossword
  const initialGrid: Cell[][] = [
    [
      { letter: '', number: 1, isBlack: false, answer: 'B', clueAcross: '1A. College Jamie attended' },
      { letter: '', isBlack: false, answer: 'R', clueDown: '1D. Study of the mind' },
      { letter: '', isBlack: false, answer: 'A' },
      { letter: '', isBlack: false, answer: 'I' },
      { letter: '', isBlack: false, answer: 'N' }
    ],
    [
      { letter: '', isBlack: false, answer: 'A' },
      { letter: '', number: 2, isBlack: false, answer: 'O', clueDown: '2D. Jamie\'s research involves this AI' },
      { letter: '', isBlack: false, answer: 'R' },
      { letter: '', isBlack: false, answer: 'N' },
      { letter: '', number: 3, isBlack: false, answer: 'S', clueDown: '3D. Country where Jamie studies (abbr.)' }
    ],
    [
      { letter: '', isBlack: false, answer: 'R' },
      { letter: '', isBlack: false, answer: 'B' },
      { letter: '', isBlack: false, answer: 'O' },
      { letter: '', isBlack: false, answer: 'T' },
      { letter: '', number: 4, isBlack: false, answer: 'C', clueAcross: '4A. Computer ___ (Jamie\'s major)' }
    ],
    [
      { letter: '', number: 5, isBlack: false, answer: 'N', clueAcross: '5A. Study of the nervous system' },
      { letter: '', isBlack: false, answer: 'E' },
      { letter: '', isBlack: false, answer: 'U' },
      { letter: '', isBlack: false, answer: 'R' },
      { letter: '', isBlack: false, answer: 'I' }
    ],
    [
      { letter: '', isBlack: false, answer: 'A' },
      { letter: '', isBlack: false, answer: 'R' },
      { letter: '', isBlack: false, answer: 'D' },
      { letter: '', isBlack: false, answer: 'A' },
      { letter: '', isBlack: false, answer: 'R' }
    ]
  ];

  const [grid, setGrid] = useState<Cell[][]>(initialGrid);
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const clues = {
    across: [
      '1. College Jamie attended',
      '4. Computer ___ (Jamie\'s major)', 
      '5. Study of the nervous system'
    ],
    down: [
      '1. Study of the mind',
      '2. Jamie\'s research involves this AI',
      '3. Country where Jamie studies (abbr.)'
    ]
  };

  const checkCompletion = (currentGrid: Cell[][]) => {
    return currentGrid.every(row => 
      row.every(cell => 
        cell.isBlack || cell.letter.toUpperCase() === cell.answer.toUpperCase()
      )
    );
  };

  const handleCellClick = (row: number, col: number) => {
    if (!grid[row][col].isBlack) {
      setSelectedCell({ row, col });
    }
  };

  const handleInputChange = (value: string, row: number, col: number) => {
    if (value.length > 1) return;
    
    const newGrid = [...grid];
    newGrid[row][col] = { ...newGrid[row][col], letter: value.toUpperCase() };
    setGrid(newGrid);
    
    if (checkCompletion(newGrid)) {
      setIsCompleted(true);
      setShowAnimation(true);
      toast.success("Congratulations! You solved the crossword! 🎉");
      setTimeout(() => setShowAnimation(false), 3000);
    }
  };

  const handleSolveMe = () => {
    const solvedGrid = grid.map(row => 
      row.map(cell => ({ ...cell, letter: cell.answer }))
    );
    setGrid(solvedGrid);
    setIsCompleted(true);
    setShowAnimation(true);
    toast.success("Puzzle solved! 🧩");
    setTimeout(() => setShowAnimation(false), 3000);
  };

  const handleReset = () => {
    const resetGrid = grid.map(row => 
      row.map(cell => ({ ...cell, letter: '' }))
    );
    setGrid(resetGrid);
    setIsCompleted(false);
    setShowAnimation(false);
  };

  return (
    <section className="py-16 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-2">
            Jamie Bergen Mini Crossword
          </h2>
          <p className="text-text-secondary">
            Test your knowledge about Jamie's academic journey!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Crossword Grid */}
          <div className="relative">
            {showAnimation && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/80 rounded-lg">
                <div className="text-4xl animate-bounce">🎉 Congratulations! 🎉</div>
              </div>
            )}
            <div className="grid grid-cols-5 gap-1 p-4 bg-background rounded-lg border border-border-subtle">
              {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`
                      relative w-12 h-12 border border-border-subtle cursor-pointer
                      ${cell.isBlack ? 'bg-text-primary' : 'bg-background hover:bg-surface'}
                      ${selectedCell?.row === rowIndex && selectedCell?.col === colIndex ? 'ring-2 ring-primary' : ''}
                      ${isCompleted ? 'bg-green-50 dark:bg-green-950' : ''}
                    `}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {!cell.isBlack && (
                      <>
                        {cell.number && (
                          <span className="absolute top-0 left-0 text-xs font-medium text-text-secondary p-0.5">
                            {cell.number}
                          </span>
                        )}
                        <input
                          type="text"
                          value={cell.letter}
                          onChange={(e) => handleInputChange(e.target.value, rowIndex, colIndex)}
                          className="w-full h-full text-center font-medium bg-transparent border-none outline-none text-text-primary"
                          maxLength={1}
                        />
                      </>
                    )}
                  </div>
                ))
              )}
            </div>
            
            <div className="flex gap-2 mt-4 justify-center">
              <Button onClick={handleSolveMe} variant="outline" size="sm">
                Solve Me
              </Button>
              <Button onClick={handleReset} variant="outline" size="sm">
                Reset
              </Button>
            </div>
          </div>

          {/* Clues */}
          <div className="space-y-6 max-w-md">
            <div>
              <h3 className="font-medium text-text-primary mb-3 border-b border-border-subtle pb-1">
                Across
              </h3>
              <div className="space-y-2">
                {clues.across.map((clue, index) => (
                  <p key={index} className="text-sm text-text-secondary">
                    {clue}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-text-primary mb-3 border-b border-border-subtle pb-1">
                Down
              </h3>
              <div className="space-y-2">
                {clues.down.map((clue, index) => (
                  <p key={index} className="text-sm text-text-secondary">
                    {clue}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crossword;