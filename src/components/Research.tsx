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
  pi: string;
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
    when: 'Sep 2026 – present',
    lab: 'Kirkeby Lab',
    place: 'reNEW, University of Copenhagen',
    pi: 'Agnete Kirkeby',
    question: 'Human stem cell models of the hypothalamus',
    summary:
      "I differentiate human pluripotent stem cells into hypothalamic neurons and am engineering two hPSC lines carrying UltraID proximity-labeling tags on ciliary proteins. I also proposed adding molecular docking (GNINA) to the lab's work on environmental risk factors for Parkinson's disease, to rank candidate toxicants before in vitro testing.",
    methods: ['hPSC culture', 'Neuronal differentiation', 'Cell line engineering', 'Molecular docking'],
    // The first figure opens on load; the rest stay collapsed.
    figure: <DifferentiationToy defaultOpen />,
  },
  {
    when: 'Feb – Jul 2026',
    lab: 'Neural Dynamics Lab',
    place: 'Institute of Neuroinformatics, ETH Zurich',
    pi: 'Timothée Proix',
    question: 'When is syntactic structure committed during speech production?',
    summary:
      'For my MSc thesis I tested whether speakers commit to syntactic structure before speech onset or build it incrementally, using stereo-EEG from 528 gray-matter contacts in six patients. I built the pipeline from raw recordings through forward-encoding models.',
    methods: ['Stereo-EEG', 'Signal processing', 'Forward-encoding models', 'Python'],
    note: 'First-author manuscript in preparation',
    figure: <SyntaxToy />,
  },
  {
    when: 'Sep 2024 – Jan 2026',
    lab: 'Kraus Lab',
    place: 'Computer Science, Bar-Ilan University',
    pi: 'Sarit Kraus',
    question: 'Can an LLM pipeline deliver pre-mediation?',
    summary:
      "I built an AI mediator as a pipeline of GPT-4o modules for dialogue, preference prediction, critique and summarization, then evaluated it against professional human mediators in two IRB-approved experiments (n = 38, n = 22). It predicted participants' preferences with 36% lower RMSE.",
    methods: ['LLM pipelines', 'Human-subjects experiments', 'React / TypeScript'],
    link: { href: 'https://arxiv.org/abs/2606.11379', label: 'Preprint, arXiv:2606.11379' },
    figure: <CriticToy />,
  },
  {
    when: 'Sep 2021 – May 2023',
    lab: 'Agalliu Lab',
    place: 'Columbia University Irving Medical Center',
    pi: 'Dritan Agalliu',
    question: "Does α-synuclein autoimmunity drive prodromal Parkinson's disease?",
    summary:
      'Enteric symptoms precede motor symptoms by years. In HLA-DRB1*15:01 mice immunized with α-synuclein 32–46, I quantified dopaminergic (TH+) and total (ANNA1+) enteric neuron density and T cell infiltration by immunostaining and confocal imaging.',
    methods: ['Mouse models', 'Immunostaining', 'Confocal microscopy', 'RNA-seq'],
    link: { href: 'https://doi.org/10.1016/j.neuron.2023.07.015', label: 'Neuron 111(21), 2023' },
    figure: <GutToy />,
  },
  {
    when: 'Nov 2020 – Sep 2021',
    lab: 'Musolino Lab',
    place: 'Massachusetts General Hospital',
    pi: 'Patricia Musolino',
    question: 'An in vitro model of blood-brain barrier dysfunction',
    summary:
      'I established and maintained primary human brain microvascular endothelial cell cultures as an in vitro model of blood-brain barrier dysfunction in X-linked adrenoleukodystrophy.',
    methods: ['Primary cell culture', 'Immunocytochemistry', 'Western blot'],
    figure: <BarrierToy />,
  },
];

const tagClass =
  'rounded-full border border-border-subtle bg-background/60 px-2.5 py-1 text-xs text-text-secondary';

const Research = () => {
  return (
    <section id="research" className="bg-surface px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Research</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
          Research experience
        </h2>
        <ol className="mt-12 space-y-14">
          {chapters.map((c, i) => (
            <li key={c.lab} className="border-t border-border pt-6 md:pt-8">
              <div className="grid gap-x-10 gap-y-3 md:grid-cols-[11rem_1fr]">
                {/* One wrapped line on a phone, a stacked rail from md up: the
                    stacked version cost five lines per chapter on a 390px screen. */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm md:block">
                  <span className="text-xs tabular-nums text-text-muted md:block" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-text-primary md:mt-1.5 md:block">{c.lab}</span>
                  <span className="text-text-secondary md:block">{c.place}</span>
                  <span className="text-xs text-text-muted md:mt-1 md:block">PI: {c.pi}</span>
                  <span className="text-xs text-text-muted md:block">{c.when}</span>
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
