import Header from '../components/Header';
import { GraduationCap, FileText, FlaskConical, Code, MapPin, Calendar, Mail, ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import WorldGlobe, { GlobeLocation } from '../components/WorldGlobe';

const cvLocations: GlobeLocation[] = [
  {
    name: 'New York, USA',
    lat: 40.71,
    lng: -74.01,
    roles: [
      { type: 'school', title: 'BA, Computer Science & Neuroscience', org: 'Barnard College, Columbia University', dates: '2019 – 2023' },
      { type: 'work', title: 'Research Assistant, Agalliu Lab', org: 'Columbia University', dates: '2021 – 2023' },
      { type: 'work', title: 'Peer Leader / Teaching Assistant', org: 'Columbia University', dates: '2021 – 2023' },
    ],
  },
  {
    name: 'Boston, USA',
    lat: 42.36,
    lng: -71.06,
    roles: [
      { type: 'work', title: 'Research Assistant, Musolino Lab', org: 'Massachusetts General Hospital', dates: 'Nov 2020 – Sep 2021' },
    ],
  },
  {
    name: 'Oklahoma City, USA',
    lat: 35.47,
    lng: -97.52,
    roles: [
      { type: 'work', title: 'Software Developer', org: 'Fast Enterprises (Oklahoma Tax Commission)', dates: 'Jul 2023 – Jul 2024' },
    ],
  },
  {
    name: 'Ramat Gan, Israel',
    lat: 32.07,
    lng: 34.82,
    roles: [
      { type: 'school', title: 'MSc, Neuroscience & Data Science (Erasmus Mundus)', org: 'Bar-Ilan University', dates: '2024 – 2026' },
      { type: 'work', title: 'Research Assistant, Sarit Kraus Lab', org: 'Bar-Ilan University', dates: 'Sep 2024 – Jan 2026' },
    ],
  },
  {
    name: 'Amsterdam, Netherlands',
    lat: 52.37,
    lng: 4.9,
    roles: [
      { type: 'school', title: 'MSc, Neuroscience & Data Science (Erasmus Mundus)', org: 'Vrije Universiteit Amsterdam', dates: '2024 – 2026' },
    ],
  },
  {
    name: 'Zurich, Switzerland',
    lat: 47.37,
    lng: 8.55,
    roles: [
      { type: 'work', title: 'MSc Thesis Researcher, Neural Dynamics Lab', org: 'ETH Zurich', dates: 'Feb 2026 – Present' },
    ],
  },
  {
    name: 'Lviv, Ukraine',
    lat: 49.84,
    lng: 24.03,
    roles: [
      { type: 'work', title: 'Program Coordinator & Instructor', org: 'Code.X', dates: '2024 – Present' },
    ],
  },
];

const CV = () => {
  const navigate = useNavigate();

  const handleNavigateToCrossword = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#crossword');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Button
          variant="outline"
          size="sm"
          className="shadow-lg"
          onClick={handleNavigateToCrossword}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background pt-32 pb-2">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-start mb-2 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Jamie Bergen</h1>
              <p className="text-foreground text-sm flex gap-4 flex-wrap mb-3">
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" />jgbergen18@gmail.com</span>
              </p>
            </div>
            <Button asChild size="sm" className="shadow-sm flex-shrink-0">
              <a href="/Jamie-Bergen-Resume-2026.docx" download>
                <Download className="w-4 h-4 mr-2" />
                Download Résumé
              </a>
            </Button>
          </div>

          {/* Professional Summary */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-foreground text-sm leading-relaxed italic">
              Neuroscience and data science student with a research background combining computational modeling and the analysis of neural and behavioral data, including intracranial EEG time-frequency analysis, neural-network modeling, and statistical methods in Python. Strong foundation in recurrent and deep neural networks alongside hands-on experience relating oscillatory neural dynamics to behavior.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-8">

        {/* Where I've been */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            Where I've been
          </h2>
          <WorldGlobe locations={cvLocations} />
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-primary">MSc Neuroscience & Data Science (Erasmus Mundus Scholar)</h3>
                <span className="text-sm text-primary font-medium">2024 – Jul 2026</span>
              </div>
              <p className="text-sm text-foreground/80">Bar-Ilan University (Israel) | Vrije Universiteit Amsterdam (Netherlands)</p>
              <p className="text-xs text-primary font-medium mt-1">Expected graduation: July 2026</p>
            </div>
            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-primary">BA Computer Science & Neuroscience</h3>
                <span className="text-sm text-primary font-medium">2019 – 2023</span>
              </div>
              <p className="text-sm text-foreground/80">Barnard College, Columbia University (United States)</p>
            </div>
          </div>
        </section>

        {/* Publications & Awards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Publications & Awards
          </h2>
          <div className="space-y-3 text-sm bg-primary/5 p-5 rounded-lg border border-primary/20">
            <p><span className="font-semibold text-primary">IJCAI 2026 (submitted)</span> — <a href="https://arxiv.org/abs/2606.11379" target="_blank" rel="noopener noreferrer" className="italic text-foreground hover:text-primary hover:underline">Automated Mediator for Human Negotiation: Pre-Mediation via a Structured LLM Pipeline<ExternalLink className="inline w-3.5 h-3.5 ml-1 not-italic align-text-bottom" /></a></p>
            <p><span className="font-semibold text-primary">Neuron (2023)</span> — <a href="https://www.cell.com/neuron/fulltext/S0896-6273(23)00548-2?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0896627323005482%3Fshowall%3Dtrue" target="_blank" rel="noopener noreferrer" className="italic text-foreground hover:text-primary hover:underline">Interaction of an α-synuclein epitope with HLA-DRB1*15:01 triggers enteric features in mice reminiscent of prodromal Parkinson's disease<ExternalLink className="inline w-3.5 h-3.5 ml-1 not-italic align-text-bottom" /></a></p>
            <p><span className="font-semibold text-primary">Erasmus Mundus NeuroData Scholar</span> (2024–2026) | <span className="font-semibold text-primary">Científico Latino Graduate Fellow</span> (2025)</p>
          </div>
        </section>

        {/* Research Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FlaskConical className="w-6 h-6 text-primary" />
            Research Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-primary">MSc Thesis Researcher — Neural Dynamics Lab, ETH Zurich</h3>
                <span className="text-sm text-primary font-medium">Feb 2026 – Present</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Built data pipelines in Python and MNE-Python to process and analyze high-dimensional intracranial EEG recordings across multiple patients and experimental conditions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Developed computational models in Python and applied statistical methods, including cluster permutation testing to identify significant signal patterns in time-frequency neural data</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-primary">
                  <a href="https://arxiv.org/abs/2606.11379" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary/80 hover:underline">
                    Research Assistant — Sarit Kraus Lab, Bar-Ilan University
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </h3>
                <span className="text-sm text-primary font-medium">Sep 2024 – Jan 2026</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Designed and implemented an experiment on AI-assisted conflict resolution, building a full-stack pre-mediation conversation platform in React/TypeScript and Supabase with an OpenAI GPT-4 multiagent architecture</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Analyzed participant transcript data to compare AI and human mediator communication patterns using NLP and sentiment analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Co-authored a paper on automated conflict mediation currently under review at IJCAI-ECAI 2026</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-primary">
                  <a href="https://www.cell.com/neuron/fulltext/S0896-6273(23)00548-2?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0896627323005482%3Fshowall%3Dtrue" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary/80 hover:underline">
                    Research Assistant — Agalliu Lab, Columbia University
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </h3>
                <span className="text-sm text-primary font-medium">2021 – May 2023</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Investigated neuroinflammatory mechanisms in Parkinson's disease using mouse models, focusing on α-synuclein-driven immune activation in enteric and CNS neurons</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Characterized neuronal, microglial, and astrocyte subtypes by immunohistochemistry, confocal microscopy, and quantitative image analysis; performed PCR and western blot for gene and protein expression profiling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Co-authored a publication in <span className="italic">Neuron</span> (2023) on α-synuclein epitope interactions with HLA-DRB1*15:01 in PD</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-primary">Research Assistant — Musolino Lab, Massachusetts General Hospital</h3>
                <span className="text-sm text-primary font-medium">Nov 2020 – Sep 2021</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Established and maintained human brain microvascular endothelial cell (HBMEC) cultures as an in vitro model of blood-brain barrier dysfunction in X-linked adrenoleukodystrophy (X-ALD)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Assessed cell morphology, protein expression, and barrier integrity markers using immunocytochemistry, confocal microscopy, PCR, and western blot</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Industry Experience</h2>
          <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-semibold text-primary">Software Developer — Fast Enterprises (Oklahoma Tax Commission)</h3>
              <span className="text-sm text-primary font-medium">Jul 2023 – Jul 2024</span>
            </div>
            <ul className="space-y-2 text-sm text-foreground/90">
              <li className="flex gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span>Developed and deployed a fraud detection module using VB.NET and SQL, flagging anomalous filings based on historical risk heuristics and increasing audit efficiency</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-0.5">•</span>
                <span>Delivered software updates for two tax policy changes in an enterprise-scale system processing millions of annual filings</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Teaching & Volunteering */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Teaching & Volunteering</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-primary">Program Coordinator & Instructor — Code.X (Ukraine / Remote)</h3>
                <span className="text-sm text-primary font-medium">2024 – Present</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Coordinated a coding bootcamp for Ukrainian high school students, managing a year-long virtual program and two intensive summer camps for 50 students</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Taught CS and design courses in summers 2024 and 2025 to high school students in Lviv</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Led curriculum design, instruction, fundraising (raising over $60,000), and daily program logistics</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-primary">Peer Leader / Teaching Assistant — Columbia University</h3>
                <span className="text-sm text-primary font-medium">2021 – 2023</span>
              </div>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Delivered weekly 90-minute seminars to two sections of 20 first-year students across 5 semesters on topics including cryptography, AI, and ethics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Mentored students on resume writing and interview preparation for securing research and internship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Skills
          </h2>
          <div className="space-y-4 text-sm">
            <div>
              <span className="font-semibold text-foreground">Computational & Modeling:</span>
              <span className="text-foreground/90"> Python, PyTorch, scikit-learn, neural networks (recurrent & deep), MNE-Python, time-frequency analysis, cluster permutation testing, statistical modeling, data visualization</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Other Coding:</span>
              <span className="text-foreground/90"> TypeScript/JavaScript, Java, C, SQL, R, VB.NET, HTML/CSS, Hugging Face Transformers, LLM APIs, multi-agent systems</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Wet Lab:</span>
              <span className="text-foreground/90"> Mammalian cell culture (primary cells, human cell lines), immunocytochemistry (ICC) & immunohistochemistry (IHC), confocal microscopy, fluorescence imaging, quantitative image analysis (ImageJ/Fiji), PCR & western blot, mouse model experiments</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Research:</span>
              <span className="text-foreground/90"> Human-subjects study design (IRB), behavioral experiments, qualitative & quantitative analysis, statistical analysis, scientific writing, technical documentation</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Languages:</span>
              <span className="text-foreground/90"> English (native), Hebrew (intermediate), Chinese (intermediate), German (beginner)</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Tools & Other:</span>
              <span className="text-foreground/90"> Microsoft Office, Canva, Adobe Photoshop, Google Workspace, Notion, project management, grant writing</span>
            </div>
          </div>
        </section>

        {/* Relevant Coursework */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Relevant Coursework</h2>
          <div className="space-y-3 text-sm text-foreground/90">
            <div>
              <span className="font-semibold text-foreground">MSc:</span> Theories on Neural Networks and Machine Learning, Signal and Data Analysis in Neuroscience, Data Science Applications in Neuroscience, Advanced Neurogenomics, Live Cell Imaging, Synaptic Neurochemistry
            </div>
            <div>
              <span className="font-semibold text-foreground">BA:</span> Artificial Neural Networks and Deep Learning, Systems and Behavioral Neuroscience, Molecular & Cellular Neuroscience, Neuroscience Lab, Statistics & Experimental Design
            </div>
          </div>
        </section>
        {/* References */}
        <section className="mb-12">
          <p className="text-foreground text-sm">References available upon request.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground text-sm">
            © 2026 Jamie Bergen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default CV;