import Header from '../components/Header';
import { GraduationCap, Brain, FileText, FlaskConical, Code, Microscope, Users, MapPin, Calendar, ExternalLink, Mail, Phone, Cpu, Award, Briefcase, Globe, Heart } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-primary/10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4 animate-fade-in">
            Jamie Bergen
          </h1>
          <p className="text-xl text-foreground/70 mb-6">Neuroscience & AI Researcher</p>
          <div className="flex flex-wrap justify-center gap-6 text-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>jgbergen18@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>203.644.8464</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-primary" />
              <span>jamiebergen.com</span>
            </div>
          </div>
        </div>
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
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-foreground">Erasmus Mundus Joint MSc in Brain and Data Science</h3>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">4.0 GPA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bar-Ilan University, Ramat Gan, Israel</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Expected Graduation: June 2026</span>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-foreground">Erasmus Mundus Joint MSc in Neuroscience</h3>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">4.0 GPA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Vrije Universiteit, Amsterdam, The Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Expected Graduation: June 2026</span>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-foreground">B.A. in Computer Science (Intelligent Systems) and Neuroscience (Behavioral)</h3>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">3.5 GPA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Barnard College of Columbia University, New York City, USA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
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
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">NeuroAI</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Integrating neuroscience and artificial intelligence to develop brain-inspired models and interpretable algorithms, with applications in cognition, decision-making, and human–AI collaboration.
              </p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Consciousness & Decision-Making</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Bridging neuroscience and computer science to study the mechanisms of consciousness and their implications for both biological and artificial agents.
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Fellowships */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Awards & Fellowships</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-primary/10 rounded-lg p-5 border-l-4 border-accent hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">2025</span>
                <div>
                  <h4 className="font-semibold text-foreground">Cientifico Latino Graduate School Mentorship Initiative Fellow</h4>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-5 border-l-4 border-primary hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">2024-2026</span>
                <div>
                  <h4 className="font-semibold text-foreground">EMJMD+ Erasmus Mundus NeuroData Scholarship</h4>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-5 border-l-4 border-primary hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">2021</span>
                <div>
                  <h4 className="font-semibold text-foreground">Barnard Summer Research Institute Scholarship</h4>
                </div>
              </div>
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
            <div className="bg-primary/10 rounded-lg p-5 border-l-4 border-accent hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">2025</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Bar-Ilan Brain Center Conference</h4>
                  <p className="text-foreground/80">Poster Presentation and Speaker: A New Paradigm for Studying LGBTQ+ Identities using Mixed Methods and Machine Learning</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-5 border-l-4 border-primary hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">2023</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Neuron Publication</h4>
                  <p className="text-foreground/80">Interaction of α-synuclein with HLA-DRB1*15:01 recapitulates enteric features of Parkinson's disease</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-5 border-l-4 border-accent hover:shadow-md transition-all duration-300 hover-scale">
              <div className="flex items-start gap-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">2022</span>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">SFN Poster Presentation</h4>
                    <p className="text-foreground/80">Alpha melanocyte-stimulating Hormone (α-MSH) regulates brain endothelial function in ABCD1-deficient cells</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consciousness Conference Speaker</h4>
                    <p className="text-foreground/80">The Phenomenology and Prevalence of Trans Phantoms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Barnard Summer Research Institute</h4>
                    <p className="text-foreground/80">Poster Presentation: Investigating the role of the immune system in aged mice</p>
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
          
          {/* Current Position - Sarit Kraus Lab */}
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Research Assistant</h3>
                  <p className="text-accent font-semibold">Sarit Kraus Lab, Bar-Ilan University</p>
                </div>
                <div className="text-right">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">08/2024–Present</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Ramat Gan, Israel</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and implemented a research experiment relating to conversing with mediator AI agent, and automated analysis reporting for studying AI-assisted conflict resolution strategies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed full-stack AI mediation platform using React/TypeScript and Supabase, integrating OpenAI GPT-4 with multi-agent architecture including regulatory agent oversight system for conversation quality control.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated closely with Professor Sarit Kraus and other lab members in weekly meetings to present results and improve experimental protocol.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columbia University - Dritan Agalliu Lab */}
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Research Assistant</h3>
                  <p className="text-primary font-semibold">Dritan Agalliu Lab, Columbia University Irving Medical Center</p>
                </div>
                <div className="text-right">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">09/2021–05/2023</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and executed experiments regarding the involvement of the immune system in the progression of Parkinson's disease using mouse models.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Performed PCR, western blot, mouse behavioral experiments, mouse brain and gut dissections, tissue fixation and sectioning, immunohistochemistry, and confocal microscopy imaging to collect data. Analyzed with ImageJ, Prism, R, and Python to uncover biological markers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Co-authored a Neuron publication elucidating α-synuclein epitope interactions with HLA-DRB1*15:01 relevant to early-stage Parkinson's disease.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* NYU */}
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Research Assistant</h3>
                  <p className="text-accent font-semibold">S.J. Langer and Taymy Caso Lab, New York University</p>
                </div>
                <div className="text-right">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">10/2021–12/2022</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted psychological research on embodiment and phantom sensations in transgender and gender nonconforming individuals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaboratively developed a detailed code-book and analyzed qualitative interview data on embodiment experiences and gender identity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Presented research at the 2022 Consciousness Conference, contributing to broader conversations on gender and psychology.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mass General */}
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Research Assistant</h3>
                  <p className="text-primary font-semibold">Patricia Musolino Lab, Massachusetts General Hospital</p>
                </div>
                <div className="text-right">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">11/2020–09/2021</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Boston, MA</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cultured and maintained human brain microvascular endothelial cells (HBMECs) to model blood-brain barrier integrity in X-linked adrenoleukodystrophy (X-ALD), performing immunohistochemistry, PCR, and western blot to assess gene expression and protein markers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Independently designed a project investigating cytokine-mediated endothelial dysfunction, identifying key immune signaling differences in ABCD1-deficient cells.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentored several high school students under the supervision of Dr. Patricia Musolino and Dr. Ed Kravitz.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columbia Bionet */}
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Research Assistant</h3>
                  <p className="text-accent font-semibold">Aurel Lazar Bionet Lab, Columbia University</p>
                </div>
                <div className="text-right">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">06/2020–09/2020</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built and queried neural circuit models using the NeuroArch graph database, leveraging NetworkX and Pandas to analyze connectivity patterns and structural motifs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributed to internal presentations that informed changes to the lab's neural modeling pipeline, focusing on improving modeling and interpretability of fly brain connectome data.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Industry Experience</h2>
          </div>
          
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Software Developer for the Oklahoma Tax Commission</h3>
                  <p className="text-primary font-semibold">Fast Enterprises</p>
                </div>
                <div className="text-right">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">07/2023–06/2024</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Oklahoma City, OK</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed and deployed a fraud detection module using VB.NET and SQL, increasing audit efficiency by flagging anomalous filings based on historical risk heuristics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Refactored legacy codebase and optimized SQL procedures, reducing system processing errors and improving return validation times.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Translated evolving state tax regulations into technical specifications, delivering compliant software updates for two major policy changes.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Additional Experience</h2>
          </div>
          
          {/* Code.X */}
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Volunteer Program Coordinator and Instructor</h3>
                  <p className="text-accent font-semibold">Code.X</p>
                </div>
                <div className="text-right">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">07/2024–Present</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Remote and Lviv, Ukraine</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led year-long virtual programming courses and two intensive summer camps for 50 Ukrainian high school students, covering coding (React and Python), design thinking, user testing, and visual design coursework.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Organized a 2-week camp for 50 students, coordinating instructor on-boarding, curriculum design, fundraising, and daily logistics across time zones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed and dynamically adapted lessons during power outages, missile sirens, and student mental health challenges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Secured funding for student equipment and facilities through grant applications and fundraising efforts.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Teaching Assistant */}
          <div className="mb-6">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Teaching Assistant, Emerging Scholars Program</h3>
                  <p className="text-primary font-semibold">Columbia University</p>
                </div>
                <div className="text-right">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">01/2021–05/2023</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>New York, NY</span>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered weekly, 90-minute, interactive seminars to two sections of 20 students for 5 semesters on topics including UI design, cryptography, ethics, and artificial intelligence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mentored first-year students in securing research and internship opportunities, accelerating academic growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Modernized and restructured curriculum materials each semester to align with advances in computational science.</span>
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
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-foreground">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'VB.NET', 'Java', 'React', 'C', 'Ruby', 'JavaScript', 'HTML/CSS', 'SQL', 'MATLAB', 'LaTeX', 'Bash'].map((skill) => (
                  <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg text-foreground">Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Scikit-learn', 'PyTorch', 'Transformers (HuggingFace)', 'Stable-Baselines3', 'XGBoost', 'UMAP'].map((skill) => (
                  <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg text-foreground">Data & Visualization</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Prism', 'Excel', 'ImageJ'].map((skill) => (
                  <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-foreground">Web & Deployment</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Jekyll/Hyde', 'GitHub Pages', 'Markdown', 'Liquid', 'Figma', 'Next.js'].map((skill) => (
                  <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg text-foreground">Tools & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Jupyter', 'Google Colab', 'Docker', 'FastAPI'].map((skill) => (
                  <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-foreground">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['English (Native)', 'Hebrew (Intermediate)', 'Mandarin (Intermediate)', 'German (Beginner)'].map((skill) => (
                  <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies & Interests */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Hobbies & Interests</h2>
          </div>
          <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300 hover-scale">
            <div className="flex flex-wrap gap-2">
              {['Reading', 'Graphic Design', 'Laser Cutting', '3D Modeling', 'Biking', 'Running', 'Board Games', 'Woodworking'].map((hobby) => (
                <span key={hobby} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Jamie Bergen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CV;