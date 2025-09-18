import Header from '../components/Header';
import { GraduationCap, Brain, FileText, FlaskConical, Code, Microscope, Users, MapPin, Calendar, ExternalLink } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 animate-fade-in">
            Jamie Bergen
          </h1>
          <p className="text-xl text-text-secondary mb-6">Neuroscience & AI Researcher</p>
          <div className="flex flex-wrap justify-center gap-6 text-text-muted">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>jgbergen18@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>203.644.8464</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <span>jamiebergen.com</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-text-primary">Erasmus Mundus Joint MSc in Brain and Data Science</h3>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">4.0 GPA</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted mb-2">
                <MapPin className="w-4 h-4" />
                <span>Bar-Ilan University, Ramat Gan, Israel</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Calendar className="w-4 h-4" />
                <span>Expected Graduation: June 2026</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <h3 className="font-bold text-lg text-text-primary mb-3">Erasmus Mundus Joint MSc in Neuroscience</h3>
              <div className="flex items-center gap-2 text-text-muted mb-2">
                <MapPin className="w-4 h-4" />
                <span>Vrije Universiteit, Amsterdam, The Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Calendar className="w-4 h-4" />
                <span>Expected Graduation: June 2026</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-text-primary">B.A. in Computer Science & Neuroscience</h3>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">3.5 GPA</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted mb-2">
                <MapPin className="w-4 h-4" />
                <span>Barnard College of Columbia University, New York City, USA</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <Calendar className="w-4 h-4" />
                <span>Graduated: May 2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Brain className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Research Interests</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Brain className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-text-primary">NeuroAI</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Integrating neuroscience and artificial intelligence to develop brain-inspired models and interpretable algorithms, with applications in cognition, decision-making, and human–AI collaboration.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-text-primary">Consciousness & Decision-Making</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Bridging neuroscience and computer science to study the mechanisms of consciousness and their implications for both biological and artificial agents.
              </p>
            </div>
          </div>
        </section>

        {/* Publications and Conferences */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Publications & Conferences</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg p-5 border-l-4 border-accent hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">2025</span>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Bar-Ilan Brain Center Conference</h4>
                  <p className="text-text-secondary">Poster Presentation and Speaker: A New Paradigm for Studying LGBTQ+ Identities using Mixed Methods and Machine Learning</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-5 border-l-4 border-primary hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">2023</span>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Neuron Publication</h4>
                  <p className="text-text-secondary">Interaction of α-synuclein with HLA-DRB1*15:01 recapitulates enteric features of Parkinson's disease</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg p-5 border-l-4 border-accent hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">2022</span>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">SFN Poster Presentation</h4>
                    <p className="text-text-secondary">Alpha melanocyte-stimulating Hormone (α-MSH) regulates brain endothelial function in ABCD1-deficient cells</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Consciousness Conference Speaker</h4>
                    <p className="text-text-secondary">The Phenomenology and Prevalence of Trans Phantoms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Barnard Summer Research Institute</h4>
                    <p className="text-text-secondary">Poster Presentation: Investigating the role of the immune system in aged mice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Research Experience</h2>
          </div>
          
          {/* Current Position */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Research Assistant</h3>
                  <p className="text-accent font-semibold">Sarit Kraus Lab, Bar-Ilan University</p>
                </div>
                <div className="text-right">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">Current</span>
                  <p className="text-sm text-text-muted mt-1">08/2024–Present</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>Ramat Gan, Israel</span>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and implemented research experiment for AI-mediated conflict resolution strategies with automated analysis reporting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed full-stack AI mediation platform using React/TypeScript and Supabase, integrating OpenAI GPT-4 with multi-agent architecture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated with Professor Sarit Kraus and lab members in weekly meetings to present results and improve protocols.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columbia University */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Research Assistant</h3>
                  <p className="text-primary font-semibold">Dritan Agalliu Lab, Columbia University Irving Medical Center</p>
                </div>
                <div className="text-right">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">2021-2023</span>
                  <p className="text-sm text-text-muted mt-1">09/2021–05/2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and executed experiments on immune system involvement in Parkinson's disease progression using mouse models.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Performed advanced techniques: PCR, western blot, behavioral experiments, brain/gut dissections, immunohistochemistry, and confocal microscopy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Analyzed data with ImageJ, Prism, R, and Python to uncover biological markers and co-authored Neuron publication.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* NYU */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Research Assistant</h3>
                  <p className="text-accent font-semibold">S.J. Langer and Taymy Caso Lab, New York University</p>
                </div>
                <div className="text-right">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">2021-2022</span>
                  <p className="text-sm text-text-muted mt-1">10/2021–12/2022</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted psychological research on embodiment and phantom sensations in transgender and gender nonconforming individuals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed detailed code-book and analyzed qualitative interview data on embodiment experiences and gender identity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Presented research at 2022 Consciousness Conference, contributing to broader conversations on gender and psychology.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mass General */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Research Assistant</h3>
                  <p className="text-primary font-semibold">Patricia Musolino Lab, Massachusetts General Hospital</p>
                </div>
                <div className="text-right">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">2020-2021</span>
                  <p className="text-sm text-text-muted mt-1">11/2020–09/2021</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>Boston, MA</span>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cultured and maintained HBMECs to model blood-brain barrier integrity in X-linked adrenoleukodystrophy (X-ALD).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Performed immunohistochemistry, PCR, and western blot to assess gene expression and protein markers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Independently designed project investigating cytokine-mediated endothelial dysfunction and mentored high school students.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columbia Bionet */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Research Assistant</h3>
                  <p className="text-accent font-semibold">Aurel Lazar Bionet Lab, Columbia University</p>
                </div>
                <div className="text-right">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">2020</span>
                  <p className="text-sm text-text-muted mt-1">06/2020–09/2020</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built and queried neural circuit models using NeuroArch graph database with NetworkX and Pandas for connectivity analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed computational tools for neural circuit analysis and visualization.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Code className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-text-primary">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'TypeScript', 'JavaScript', 'MATLAB'].map((skill) => (
                  <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg text-text-primary">Frameworks & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Supabase', 'OpenAI API', 'NetworkX', 'Pandas'].map((skill) => (
                  <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg text-text-primary">Laboratory Techniques</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PCR', 'Western Blot', 'Immunohistochemistry', 'Confocal Microscopy', 'Cell Culture'].map((skill) => (
                  <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-text-primary">Analysis Software</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['ImageJ', 'Prism', 'SPSS', 'NeuroArch'].map((skill) => (
                  <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
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

export default CV;