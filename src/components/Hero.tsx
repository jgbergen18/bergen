import { Link } from 'react-router-dom';
import { FileText, FlaskConical, Mail } from 'lucide-react';
import Neuron from './Neuron';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Each letter is its own span so the rainbow hover can stagger. The spans are
  // hidden from assistive tech; the heading's aria-label carries the text.
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
          <h1
            aria-label="Hello, I'm Jamie Bergen"
            className="text-3xl md:text-4xl font-light text-text-primary leading-tight rainbow-text"
          >
            <span aria-hidden="true">
              {splitText("Hello, I'm ")}
              <span className="font-medium">{splitText('Jamie Bergen')}</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-light text-text-primary leading-snug max-w-3xl">
            I'm a neuroscientist. Half my time is at the bench, turning human stem cells into
            neurons, and the other half is writing code to work out what they're doing. What I
            actually care about is neurodegenerative disease: how it starts, and what we can do
            about it.
          </p>

          <p className="text-sm text-text-secondary">
            Research assistant in the Kirkeby Lab at reNEW, University of Copenhagen
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
              Get in touch
            </button>
          </div>
        </div>

        {/* Fig. 1: the neuron */}
        <figure
          id="neuron"
          className="mt-12 rounded-xl border border-border-subtle bg-surface/40 px-2 py-6 sm:px-4 md:px-8"
        >
          <Neuron />
          <figcaption className="mt-6 px-2 sm:px-0 text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
            <span className="font-mono text-xs text-text-muted">Fig. 1</span>{' '}
            <span className="font-semibold text-text-primary">Poke the neuron.</span> Every click
            pushes a bit of current in. The voltage builds up and leaks away, and once it gets past
            threshold the cell fires and the spike runs off down the axon. It's a leaky
            integrate-and-fire neuron, which is about the simplest version of how a real one decides
            to fire. Everything on this page that looks clickable is.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
