import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Places from '../components/Places';
import Research from '../components/Research';
import Publications from '../components/Publications';
import BeyondBench from '../components/BeyondBench';
import Contact from '../components/Contact';
import CrosswordSection from '../components/CrosswordSection';
import NeuronEgg from '../components/NeuronEgg';
import { usePageMeta } from '../lib/usePageTitle';

const Index = () => {
  usePageMeta('/');

  // Links such as /#research land on the right section.
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView();
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Sections alternate background / surface so the bands are legible. */}
      <main>
        <Hero />
        <About />
        <Places />
        <Research />
        <Publications />
        <BeyondBench />

        <CrosswordSection />

        <section className="bg-surface px-6 py-14 md:py-20">
          <div className="mx-auto max-w-4xl">
            <Contact />
          </div>
        </section>
      </main>

      <footer className="border-t border-border-subtle px-6 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Jamie Bergen
          </p>
          <NeuronEgg />
        </div>
      </footer>
    </div>
  );
};

export default Index;
