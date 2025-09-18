import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ImageGallery from '../components/ImageGallery';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <ImageGallery />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm">
            © 2024 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
