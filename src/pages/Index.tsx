import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import Publications from '../components/Publications';
import BeyondBench from '../components/BeyondBench';
import Contact from '../components/Contact';
import Crossword from '../components/Crossword';
import { usePageMeta } from '../lib/usePageTitle';

const Index = () => {
  usePageMeta('/');

  // Links such as /#research (from the research pages) land on the right section.
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView();
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <BeyondBench />

        {/* Crossword Section */}
        <section id="crossword" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Crossword />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-surface/30">
          <div className="max-w-4xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Jamie Bergen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
