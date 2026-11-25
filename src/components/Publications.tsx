import { ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

type Publication = {
  role: string;
  title: string;
  authors: string[];
  venue: string;
  href?: string;
  hrefLabel?: string;
};

const ME = 'Bergen J';

const publications: Publication[] = [
  {
    role: 'First author',
    title: 'Neural Signatures of Syntax Planning in Speech Production',
    authors: ['Bergen J', 'Dolmatova M', 'Proix T', 'Oberlaender M'],
    venue: 'Manuscript in preparation',
  },
  {
    role: 'First author',
    title: 'Automated Mediator for Human Negotiation: Pre-Mediation via a Structured LLM Pipeline',
    authors: ['Bergen J', 'Kraus S'],
    venue: 'Preprint, 2026',
    href: 'https://arxiv.org/abs/2606.11379',
    hrefLabel: 'arXiv:2606.11379',
  },
  {
    role: 'Contributing author',
    title:
      "Interaction of an α-synuclein epitope with HLA-DRB1*15:01 triggers enteric features in mice reminiscent of prodromal Parkinson's disease",
    authors: [
      'Garretti F',
      'Monahan C',
      'Sloan N',
      'Bergen J',
      'Shahriar S',
      'Kim SW',
      'Sette A',
      'Cutforth T',
      'Kanter E',
      'Agalliu D',
      'Sulzer D',
    ],
    venue: 'Neuron 111(21), 3397–3413, 2023',
    href: 'https://doi.org/10.1016/j.neuron.2023.07.015',
    hrefLabel: 'doi:10.1016/j.neuron.2023.07.015',
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-8">Publications</h2>

        <div className="space-y-4">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="rounded-xl border border-border-subtle bg-surface/40 p-5 transition-colors hover:border-border"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                <span className="px-2.5 py-1 text-xs rounded-full bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-500/20">
                  {pub.role}
                </span>
                <span className="text-xs text-text-secondary">{pub.venue}</span>
              </div>

              <h3 className="text-base md:text-lg font-medium text-text-primary leading-snug">
                {pub.title}
              </h3>

              <p className="text-sm text-text-secondary mt-1">
                {pub.authors.map((a, i) => (
                  <span key={a}>
                    <span className={a === ME ? 'font-semibold text-text-primary' : ''}>{a}</span>
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>

              {pub.href && (
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-text-primary hover:underline"
                >
                  <ExternalLink size={15} />
                  {pub.hrefLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-surface hover:-translate-y-0.5"
          >
            View full CV
          </Link>
          <a
            href="/Jamie-Bergen-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-text-primary text-background px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
