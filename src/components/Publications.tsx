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
    venue: 'In preparation',
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
    venue: 'Neuron 111(21), 2023',
    href: 'https://doi.org/10.1016/j.neuron.2023.07.015',
    hrefLabel: 'doi:10.1016/j.neuron.2023.07.015',
  },
];

const Publications = () => {
  return (
    <section id="publications" className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Publications</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
          Publications and manuscripts
        </h2>

        <ol className="mt-10 divide-y divide-border">
          {publications.map((pub) => (
            <li key={pub.title} className="py-6 first:pt-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-text-primary">
                  {pub.role}
                </span>
                <span className="text-xs text-text-muted">{pub.venue}</span>
              </div>

              <h3 className="mt-2 text-base md:text-lg font-medium leading-snug text-text-primary">
                {pub.title}
              </h3>

              <p className="mt-1.5 text-sm text-text-secondary">
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
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary underline underline-offset-4 hover:no-underline"
                >
                  {pub.hrefLabel}
                  <ExternalLink size={14} />
                </a>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-surface hover:-translate-y-0.5"
          >
            Full CV
          </Link>
          <a
            href="/Jamie-Bergen-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
