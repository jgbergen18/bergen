import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsGallery from '../components/ProjectsGallery';
import Contact from '../components/Contact';
import Crossword from '../components/Crossword';
import Neuron from '../components/Neuron';
import Publications from '../components/Publications';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        
        <ProjectsGallery />

        <Publications />

        {/* Spiking Neuron Section */}
        <section id="neuron" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-2">
              Spiking neuron
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl">
              Click the neuron (or the button) to inject current, and use the slider to set how much
              each click delivers. The membrane potential builds up and fires an action potential
              down the axon once it crosses threshold. This is a leaky integrate-and-fire model, the
              same idea behind how real neurons signal, and the trace below shows the membrane
              potential and spikes in real time.
            </p>
            <Neuron />
          </div>
        </section>

        {/* Crossword Section */}
        <section id="crossword" className="py-16 px-6 bg-surface/30">
          <div className="max-w-6xl mx-auto">
            <Crossword />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6">
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
