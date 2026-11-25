import { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import DifferentiationToy from './DifferentiationToy';
import SyntaxToy from './SyntaxToy';
import CriticToy from './CriticToy';
import GutToy from './GutToy';
import BarrierToy from './BarrierToy';

type Chapter = {
  when: string;
  lab: string;
  place: string;
  question: string;
  summary: string;
  methods: string[];
  link?: { href: string; label: string };
  note?: string;
  figure: ReactNode;
};

// Newest first. Anything said about unpublished work stays at or below the
// level of detail on the public CV.
const chapters: Chapter[] = [
  {
    when: 'Sep 2026 – now',
    lab: 'Kirkeby Lab',
    place: 'reNEW, University of Copenhagen',
    question: 'Growing a bit of hypothalamus in a dish',
    summary:
      "I turn human stem cells into hypothalamic neurons and build the cell lines we need to work with them. On the computational side I pushed for adding molecular docking to the lab's work on environmental risk factors for Parkinson's, and I'm setting it up so we can rank candidates before anyone puts them on cells.",
    methods: ['hPSC culture', 'Neuronal differentiation', 'Cell line engineering', 'Molecular docking'],
    figure: <DifferentiationToy />,
  },
  {
    when: 'Feb – Jul 2026',
    lab: 'Neural Dynamics Lab',
    place: 'Institute of Neuroinformatics, ETH Zurich',
    question: 'Do you plan a whole sentence before you open your mouth?',
    summary:
      'My master’s thesis. I used recordings from electrodes inside six patients’ brains to ask whether people commit to the structure of a sentence before they start talking, or build it as they go. I wrote the whole analysis pipeline, from raw voltage to the models at the end.',
    methods: ['Stereo-EEG', 'Signal processing', 'Encoding models', 'Python'],
    note: 'First-author manuscript in preparation',
    figure: <SyntaxToy />,
  },
  {
    when: 'Sep 2024 – Jan 2026',
    lab: 'Kraus Lab',
    place: 'Computer Science, Bar-Ilan University',
    question: 'Can an AI get you ready for a hard conversation?',
    summary:
      'I built an AI mediator out of four language-model modules and put it up against professional human mediators in two experiments. It worked out what people actually wanted with 36% less error than the professionals did. It also agreed with them constantly, which turned out to be the more interesting result.',
    methods: ['LLM pipelines', 'Human-subjects experiments', 'React and TypeScript'],
    link: { href: 'https://arxiv.org/abs/2606.11379', label: 'My preprint on arXiv' },
    figure: <CriticToy />,
  },
  {
    when: 'Sep 2021 – May 2023',
    lab: 'Agalliu Lab',
    place: 'Columbia University Irving Medical Center',
    question: "Does Parkinson's start in your gut, and is it your own immune system?",
    summary:
      "People get gut problems years before they get a Parkinson's diagnosis. I spent two years on whether an immune attack on α-synuclein is what sets that off, mostly staining mouse guts and counting neurons under a confocal. It went into the Neuron paper, and the aged-mouse half of it became my senior thesis.",
    methods: ['Mouse models', 'Immunostaining', 'Confocal imaging', 'RNA-seq'],
    link: { href: 'https://doi.org/10.1016/j.neuron.2023.07.015', label: 'The paper in Neuron' },
    figure: <GutToy />,
  },
  {
    when: 'Nov 2020 – Sep 2021',
    lab: 'Musolino Lab',
    place: 'Massachusetts General Hospital',
    question: 'Building a blood-brain barrier in a dish',
    summary:
      'My first lab job. I grew primary human brain endothelial cells and kept them alive as a model of what goes wrong with the blood-brain barrier in adrenoleukodystrophy.',
    methods: ['Primary cell culture', 'Immunocytochemistry', 'Western blot'],
    figure: <BarrierToy />,
  },
];

// Spectrum palette echoing the reading-log color coding
const tagColors = [
  'bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-500/20',
  'bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20',
  'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20',
  'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20',
];

const Research = () => {
  return (
    <section id="research" className="py-16 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-3">Research</h2>
        <p className="text-text-secondary leading-relaxed max-w-2xl mb-10">
          Five labs so far, newest first. I keep going back and forth between the bench and the
          computer, which was never really a plan, but it has turned into the useful thing about me.
          Each one has something you can poke at.
        </p>

        <ol className="space-y-6">
          {chapters.map((c, i) => (
            <li
              key={c.lab}
              className="rounded-xl bg-background border border-border-subtle p-5 md:p-8"
            >
              <div className="grid md:grid-cols-[11rem_1fr] gap-4 md:gap-8">
                <div className="text-sm">
                  <p className="font-mono text-text-muted" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1 font-medium text-text-primary">{c.lab}</p>
                  <p className="text-text-secondary">{c.place}</p>
                  <p className="mt-1 text-text-muted">{c.when}</p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-medium text-text-primary leading-snug">
                    {c.question}
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">{c.summary}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Methods">
                    {c.methods.map((m, mi) => (
                      <li
                        key={m}
                        className={`px-2.5 py-1 text-xs rounded-full ${tagColors[mi % tagColors.length]}`}
                      >
                        {m}
                      </li>
                    ))}
                  </ul>

                  {c.link && (
                    <a
                      href={c.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-text-primary hover:underline"
                    >
                      <ExternalLink size={15} />
                      {c.link.label}
                    </a>
                  )}
                  {c.note && <p className="mt-4 text-sm font-medium text-text-primary">{c.note}</p>}
                </div>
              </div>

              <div className="mt-6">{c.figure}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Research;
