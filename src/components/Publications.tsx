import { ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const publications = [
  {
    role: 'First author',
    title: 'Automated Mediator for Human Negotiation: Pre-Mediation via a Structured LLM Pipeline',
    authors: ['Jamie Bergen', 'Sarit Kraus'],
    venue: 'Under review at IJCAI-ECAI 2026',
    year: '2026',
    href: 'https://arxiv.org/abs/2606.11379',
    hrefLabel: 'arXiv',
  },
  {
    role: 'Contributing author',
    title:
      "Interaction of an α-synuclein epitope with HLA-DRB1*15:01 triggers enteric features in mice reminiscent of prodromal Parkinson's disease",
    authors: null,
    venue: 'Neuron',
    year: '2023',
    href: 'https://www.cell.com/neuron/fulltext/S0896-6273(23)00548-2?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0896627323005482%3Fshowall%3Dtrue',
    hrefLabel: 'Neuron',
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
                <span className="px-2.5 py-1 text-xs rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 border border-fuchsia-500/20">
                  {pub.role}
                </span>
                <span className="text-xs text-text-muted">
                  {pub.venue}, {pub.year}
                </span>
              </div>

              <h3 className="text-base md:text-lg font-medium text-text-primary leading-snug">
                {pub.title}
              </h3>

              {pub.authors && (
                <p className="text-sm text-text-secondary mt-1">
                  {pub.authors.map((a, i) => (
                    <span key={a}>
                      <span className={a === 'Jamie Bergen' ? 'font-semibold text-text-primary' : ''}>{a}</span>
                      {i < pub.authors!.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              )}

              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-text-primary hover:underline"
              >
                <ExternalLink size={15} />
                {pub.hrefLabel}
              </a>
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
            href="/Jamie-Bergen-Resume-2026.docx"
            download
            className="inline-flex items-center gap-2 rounded-full bg-text-primary text-background px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
