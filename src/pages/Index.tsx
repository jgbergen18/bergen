import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsGallery from '../components/ProjectsGallery';
import Contact from '../components/Contact';
import Crossword from '../components/Crossword';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsGallery />
        <Contact />
        <Crossword />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm">
            © 2024 Jamie Bergen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
