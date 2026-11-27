import { Link } from 'react-router-dom';
import { FileText, FlaskConical, Mail } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.webp';

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Each letter is its own span so the rainbow hover can stagger. The spans are
  // hidden from assistive tech; the heading's aria-label carries the text.
  // The space must be a non-breaking space: an ordinary one inside an
  // inline-block box collapses to zero width and the names run together.
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
    <section className="px-6 pt-28 pb-12">
      {/* Text left, portrait right. The 240px right column is the same rail the
          globe sits in down in About, so the two line up vertically. */}
      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[1fr_240px] md:gap-14">
        {/* Centred as a single stack on phones, left-aligned once there are two
            columns to align against. */}
        <div className="text-center md:text-left">
          <h1
            aria-label="Jamie Bergen"
            className="rainbow-text text-4xl md:text-5xl font-medium leading-[1.05] text-text-primary"
          >
            <span aria-hidden="true">{splitText('Jamie Bergen')}</span>
          </h1>

          <p className="mt-5 text-xl md:text-2xl font-light leading-snug text-text-primary">
            I study the mechanisms of neurodegenerative disease, and how to treat it, using human
            stem cell models and computational modeling.
          </p>

          <p className="mt-4 text-sm text-text-secondary">
            Research assistant, Kirkeby Lab — reNEW, University of Copenhagen
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
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
        </div>

        {/* order-first on phones puts the portrait above the name, but the h1
            stays first in the DOM so it is still the page's opening element. */}
        <div className="order-first mx-auto w-full max-w-[160px] md:order-none md:mx-0 md:max-w-[240px]">
          <div className="overflow-hidden rounded-xl border border-border-subtle">
            <img
              src={profilePhoto}
              alt="Jamie Bergen"
              width={680}
              height={680}
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
