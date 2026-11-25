import { Link } from 'react-router-dom';
import { FileText, FlaskConical, Mail } from 'lucide-react';
import Neuron from './Neuron';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Each letter is its own span so the rainbow hover can stagger. The spans are
  // hidden from assistive tech; the heading's aria-label carries the text.
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

  return (
    <section className="px-6 pt-32 pb-16">
      <div className="mx-auto max-w-4xl">
        <h1
          aria-label="Jamie Bergen"
          className="rainbow-text text-3xl md:text-4xl font-medium leading-tight text-text-primary"
        >
          <span aria-hidden="true">{splitText('Jamie Bergen')}</span>
        </h1>

        <p className="mt-5 max-w-2xl text-xl md:text-2xl font-light leading-snug text-text-primary">
          I study the mechanisms of neurodegenerative disease, and how to treat it, using human stem
          cell models and computational modeling.
        </p>

        <p className="mt-4 text-sm text-text-secondary">
          Research assistant, Kirkeby Lab — reNEW, University of Copenhagen
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            <FileText size={16} />
            CV
          </Link>
          <button
            onClick={() => scrollTo('#research')}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-surface hover:-translate-y-0.5"
          >
            <FlaskConical size={16} />
            Research
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-surface hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Contact
          </button>
        </div>

        {/* Fig. 1: the neuron */}
        <figure
          id="neuron"
          className="mt-14 rounded-xl border border-border-subtle bg-surface px-2 py-6 sm:px-6"
        >
          <Neuron />
          <figcaption className="mx-auto mt-6 max-w-xl px-2 text-center text-xs leading-relaxed text-text-muted sm:px-0">
            <span className="font-mono">Fig. 1</span> A leaky integrate-and-fire neuron. Each click
            injects current; the membrane potential integrates and decays, and crossing threshold
            triggers an action potential that propagates down the axon.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
