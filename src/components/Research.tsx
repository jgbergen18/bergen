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
    place: 'reNEW, Copenhagen',
    question: 'Growing a bit of hypothalamus in a dish',
    summary:
      "I turn human stem cells into hypothalamic neurons and build the cell lines we need. I also pushed for adding molecular docking to the lab's work on environmental risk factors for Parkinson's.",
    methods: ['hPSC culture', 'Differentiation', 'Cell line engineering', 'Docking'],
    figure: <DifferentiationToy />,
  },
  {
    when: 'Feb – Jul 2026',
    lab: 'Neural Dynamics Lab',
    place: 'ETH Zurich',
    question: 'Do you plan a whole sentence before you open your mouth?',
    summary:
      'My master’s thesis. I used recordings from electrodes inside six patients’ brains to ask whether people commit to a sentence’s structure before they start talking, and wrote the analysis pipeline end to end.',
    methods: ['Stereo-EEG', 'Signal processing', 'Encoding models', 'Python'],
    note: 'First-author manuscript in preparation',
    figure: <SyntaxToy />,
  },
  {
    when: 'Sep 2024 – Jan 2026',
    lab: 'Kraus Lab',
    place: 'Bar-Ilan University',
    question: 'Can an AI get you ready for a hard conversation?',
    summary:
      'I built an AI mediator out of four language-model modules and ran it against professional mediators. It read what people wanted 36% better than they did, and agreed with them far too much.',
    methods: ['LLM pipelines', 'Human subjects', 'React'],
    link: { href: 'https://arxiv.org/abs/2606.11379', label: 'Preprint' },
    figure: <CriticToy />,
  },
  {
    when: 'Sep 2021 – May 2023',
    lab: 'Agalliu Lab',
    place: 'Columbia University',
    question: "Does Parkinson's start in your gut?",
    summary:
      "People get gut problems years before a Parkinson's diagnosis. I spent two years testing whether an immune attack on α-synuclein sets them off, mostly counting neurons in mouse guts.",
    methods: ['Mouse models', 'Immunostaining', 'Confocal', 'RNA-seq'],
    link: { href: 'https://doi.org/10.1016/j.neuron.2023.07.015', label: 'Paper in Neuron' },
    figure: <GutToy />,
  },
  {
    when: 'Nov 2020 – Sep 2021',
    lab: 'Musolino Lab',
    place: 'Massachusetts General Hospital',
    question: 'Building a blood-brain barrier in a dish',
    summary:
      'My first lab job. I grew human brain endothelial cells as a model of the blood-brain barrier failing in adrenoleukodystrophy.',
    methods: ['Primary culture', 'Immunocytochemistry', 'Western blot'],
    figure: <BarrierToy />,
  },
];

const tagClass =
  'rounded-full border border-border-subtle bg-background/60 px-2.5 py-1 text-xs text-text-secondary';

const Research = () => {
  return (
    <section id="research" className="bg-surface px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Research</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
          Five labs, newest first
        </h2>
        <p className="mt-3 text-text-secondary">Each one has something you can play with.</p>

        <ol className="mt-12 space-y-14">
          {chapters.map((c, i) => (
            <li key={c.lab} className="border-t border-border pt-8">
              <div className="grid gap-x-10 gap-y-4 md:grid-cols-[10rem_1fr]">
                <div>
                  <p className="font-mono text-xs text-text-muted" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-text-primary">{c.lab}</p>
                  <p className="text-sm text-text-secondary">{c.place}</p>
                  <p className="mt-1 text-xs text-text-muted">{c.when}</p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-medium leading-snug text-text-primary">
                    {c.question}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">{c.summary}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {c.methods.map((m) => (
                      <span key={m} className={tagClass}>
                        {m}
                      </span>
                    ))}
                  </div>

                  {(c.link || c.note) && (
                    <p className="mt-4 text-sm">
                      {c.link && (
                        <a
                          href={c.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-text-primary underline underline-offset-4 hover:no-underline"
                        >
                          {c.link.label}
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {c.note && <span className="text-text-muted">{c.note}</span>}
                    </p>
                  )}

                  <div className="mt-6">{c.figure}</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Research;
