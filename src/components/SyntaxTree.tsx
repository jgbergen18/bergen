/**
 * Phrase-structure trees for the two parses of "I see trees and hats with
 * triangles", drawn in the paper's terms.
 *
 * Left-branching (LB): "with triangles" attaches high, modifying both nouns -
 * both the trees and the hats have triangles.
 * Right-branching (RB): it attaches low, modifying the second noun alone -
 * only the hats do.
 *
 * Layout is computed, not hand-placed: leaves are spaced evenly and every
 * internal node is centred over its children, so the two trees stay consistent.
 */

type Node = {
  label: string;
  word?: string;
  children?: Node[];
  /** Highlights the attachment site - the node the PP hangs off. */
  attach?: boolean;
};

// [[trees and hats] with triangles] - the PP attaches to the whole coordination
const LB: Node = {
  label: 'NP',
  attach: true,
  children: [
    {
      label: 'NP',
      children: [
        { label: 'N', word: 'trees' },
        { label: 'Conj', word: 'and' },
        { label: 'N', word: 'hats' },
      ],
    },
    { label: 'PP', word: 'with triangles' },
  ],
};

// [trees and [hats with triangles]] - the PP attaches to the second noun only
const RB: Node = {
  label: 'NP',
  children: [
    { label: 'N', word: 'trees' },
    { label: 'Conj', word: 'and' },
    {
      label: 'NP',
      attach: true,
      children: [
        { label: 'N', word: 'hats' },
        { label: 'PP', word: 'with triangles' },
      ],
    },
  ],
};

type Placed = Node & { x: number; depth: number; kids: Placed[] };

const place = (node: Node, depth: number, next: { i: number }): Placed => {
  if (!node.children) {
    return { ...node, x: next.i++, depth, kids: [] };
  }
  const kids = node.children.map((c) => place(c, depth + 1, next));
  const x = kids.reduce((sum, k) => sum + k.x, 0) / kids.length;
  return { ...node, x, depth, kids };
};

const flatten = (n: Placed, out: Placed[] = []): Placed[] => {
  out.push(n);
  n.kids.forEach((k) => flatten(k, out));
  return out;
};

const WIDTH = 400;
const ROW = 42;
const TOP = 16;

const SyntaxTree = ({ branching }: { branching: 'left' | 'right' }) => {
  const root = place(branching === 'left' ? LB : RB, 0, { i: 0 });
  const nodes = flatten(root);
  const leaves = nodes.filter((n) => n.word);
  const step = WIDTH / leaves.length;
  const px = (n: Placed) => step * (n.x + 0.5);
  const py = (n: Placed) => TOP + n.depth * ROW;
  const maxDepth = Math.max(...nodes.map((n) => n.depth));
  const wordY = TOP + (maxDepth + 1) * ROW;
  const height = wordY + 14;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${height}`}
      role="img"
      aria-label={
        branching === 'left'
          ? 'Phrase structure tree: the prepositional phrase with triangles attaches high, to the coordinated noun phrase trees and hats. A left-branching parse.'
          : 'Phrase structure tree: the prepositional phrase with triangles attaches low, to the noun hats alone. A right-branching parse.'
      }
      className="mx-auto w-full max-w-sm"
    >
      {/* branches */}
      {nodes.flatMap((n) =>
        n.kids.map((k) => (
          <line
            key={`${n.label}-${n.x}-${k.label}-${k.x}`}
            x1={px(n)}
            y1={py(n) + 6}
            x2={px(k)}
            y2={py(k) - 10}
            className="stroke-text-muted"
            strokeWidth={1.25}
          />
        ))
      )}

      {/* stems from a leaf's category label down to its word */}
      {leaves.map((n) => (
        <line
          key={`stem-${n.word}`}
          x1={px(n)}
          y1={py(n) + 6}
          x2={px(n)}
          y2={wordY - 11}
          className="stroke-text-muted"
          strokeWidth={1.25}
          strokeDasharray="2 2"
        />
      ))}

      {/* category labels */}
      {nodes.map((n) => {
        const isPP = n.label === 'PP';
        return (
          <text
            key={`cat-${n.label}-${n.x}-${n.depth}`}
            x={px(n)}
            y={py(n)}
            textAnchor="middle"
            className={`font-mono text-[11px] ${
              isPP || n.attach
                ? 'fill-amber-600 dark:fill-amber-400 font-semibold'
                : 'fill-text-secondary'
            }`}
          >
            {n.label}
          </text>
        );
      })}

      {/* the words themselves */}
      {leaves.map((n) => (
        <text
          key={`word-${n.word}`}
          x={px(n)}
          y={wordY}
          textAnchor="middle"
          className={`text-[11px] ${
            n.label === 'PP'
              ? 'fill-amber-700 dark:fill-amber-300 font-semibold'
              : 'fill-text-primary'
          }`}
        >
          {n.word}
        </text>
      ))}
    </svg>
  );
};

export default SyntaxTree;
