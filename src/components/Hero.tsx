import { Link } from 'react-router-dom';
import { FileText, FolderGit2, Mail } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="rainbow-letter inline-block transition-all duration-200"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char === ' ' ? ' ' : char}
      </span>
    ));
  };

  return (
    <section className="pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-light text-text-primary leading-tight rainbow-text">
            {splitText("Hello, I'm ")}
            <span className="font-medium">
              {splitText("Jamie Bergen")}
            </span>
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Neuroscientist working at the bench and in code. I study neurodegenerative disease using human stem cell models and computational modeling.
          </p>

          <p className="text-sm text-text-muted">
            Currently a research assistant in the Kirkeby Lab at reNEW, University of Copenhagen.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 rounded-full bg-text-primary text-background px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            >
              <FileText size={16} />
              View CV
            </Link>
            <button
              onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-surface hover:-translate-y-0.5"
            >
              <FolderGit2 size={16} />
              Projects
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-surface hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
