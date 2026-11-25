import Header from '../components/Header';
import { GraduationCap, FileText, FlaskConical, Code, MapPin, Mail, ArrowLeft, ExternalLink, Download, Award, Briefcase, Users } from 'lucide-react';
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
      { type: 'work', title: "Bachelor's Thesis Research Assistant, Agalliu Lab", org: 'Columbia University Irving Medical Center', dates: 'Sep 2021 – May 2023' },
      { type: 'work', title: 'Peer Leader / Teaching Assistant', org: 'Columbia University', dates: '2021 – 2023' },
    ],
  },
  {
    name: 'Boston, USA',
    lat: 42.36,
    lng: -71.06,
    roles: [
      { type: 'work', title: 'Student Research Assistant, Musolino Lab', org: 'Massachusetts General Hospital', dates: 'Nov 2020 – Sep 2021' },
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
      { type: 'work', title: 'Student Research Assistant, Kraus Lab', org: 'Bar-Ilan University', dates: 'Sep 2024 – Jan 2026' },
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
      { type: 'work', title: 'MSc Thesis Researcher, Neural Dynamics Lab', org: 'Institute of Neuroinformatics, ETH Zurich', dates: 'Feb – Jul 2026' },
    ],
  },
  {
    name: 'Copenhagen, Denmark',
    lat: 55.68,
    lng: 12.57,
    roles: [
      { type: 'work', title: 'Research Assistant, Kirkeby Lab', org: 'reNEW, University of Copenhagen', dates: 'Sep 2026 – Present' },
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

type Role = {
  title: string;
  org: string;
  dates: string;
  href?: string;
  bullets: string[];
};

const researchRoles: Role[] = [
  {
    title: 'Research Assistant — Kirkeby Lab',
    org: 'Novo Nordisk Foundation Center for Stem Cell Medicine (reNEW), University of Copenhagen. PI: Agnete Kirkeby',
    dates: 'Sep 2026 – Present',
    bullets: [
      "Proposed adding molecular docking (GNINA) to the lab's work on environmental risk factors for Parkinson's disease, and am implementing it to rank candidate toxicants by predicted binding prior to in vitro testing",
      'Engineering two hPSC lines carrying UltraID proximity-labeling tags on ciliary proteins, and differentiating hPSCs into hypothalamic neurons, to build a model for testing peptides that act on hunger signaling',
      "Launched and leading an AI task force, with a representative from each lab, that is drafting the institute's AI guidelines; teaching a monthly session on AI tools for research at lab meeting",
    ],
  },
  {
    title: 'MSc Thesis Researcher — Neural Dynamics Lab',
    org: 'Institute of Neuroinformatics, ETH Zurich. PI: Timothée Proix',
    dates: 'Feb – Jul 2026',
    bullets: [
      'Tested whether speakers commit to syntactic structure before speech onset or build it incrementally, using stereo-EEG from 528 gray-matter contacts in six patients producing sentences matched for word identity and order but differing in prepositional-phrase attachment height',
      'Built the preprocessing pipeline in Python and MNE-Python: notch filtering, re-referencing, and Hilbert-envelope extraction of broadband high-frequency activity (70–150 Hz), with word onsets recovered by Whisper transcription and WhisperX phoneme forced alignment anchored to photodiode triggers (93% of sentences)',
      'Selected responsive electrodes by cluster-based permutation testing with Benjamini–Hochberg FDR correction across six condition pairs per electrode; the more demanding structure elicited greater high-frequency activity that grew across the sentence and slower speech in all six patients',
      'Fit per-electrode forward-encoding models (mTRF, raised-cosine lag bases, ridge regression, leave-sentence-out cross-validation) over pre- and post-onset lag windows; middle temporal cortex differentiated the structures before inferior frontal cortex, consistent with incremental syntactic encoding',
      'Authored and defended the MSc thesis reporting these findings; preparing them for publication as a first-author manuscript',
    ],
  },
  {
    title: 'Student Research Assistant — Kraus Lab',
    org: 'Department of Computer Science, Bar-Ilan University. PI: Sarit Kraus',
    dates: 'Sep 2024 – Jan 2026',
    href: 'https://arxiv.org/abs/2606.11379',
    bullets: [
      'Built an AI mediator as a pipeline of GPT-4 modules for dialogue, preference prediction, response critique, and summarization, delivered through a React/TypeScript and Supabase platform',
      'Designed and ran two IRB-approved human-subjects experiments (n = 38, n = 22) against professional human mediators; the system predicted participants’ preferences with 36% lower RMSE and matched the mediators on self-reported trust and confidence',
      'Quantified affirming language in conversation transcripts (36.6% of AI messages vs. 18.9% for human mediators) and reduced it to 16.8% through prompt refinement; first author of the resulting preprint',
    ],
  },
  {
    title: "Bachelor's Thesis Research Assistant — Agalliu Lab",
    org: 'Columbia University Irving Medical Center. PI: Dritan Agalliu',
    dates: 'Sep 2021 – May 2023',
    href: 'https://doi.org/10.1016/j.neuron.2023.07.015',
    bullets: [
      "Tested whether an autoimmune response to α-synuclein contributes to early Parkinson's pathology, in HLA-DRB1*15:01 transgenic mice immunized with α-synuclein peptide and aged to two timepoints",
      'Quantified dopaminergic (TH+) and total (ANNA1+) neuron density in the myenteric and submucosal plexuses, and T cell (CD3+) infiltration in brain sections, by immunostaining, confocal and widefield imaging, and blinded cell counts',
      'Ran PCR and western blots for gene and protein expression, analyzed RNA-seq data for transcriptomic changes linked to α-synuclein-driven neuroinflammation, and tested group differences in GraphPad Prism',
      'Contributed to the resulting publication in Neuron (2023); authored and defended a senior thesis on the aged-mouse arm of the project',
    ],
  },
  {
    title: 'Student Research Assistant — Musolino Lab',
    org: 'Massachusetts General Hospital. PI: Patricia Musolino',
    dates: 'Nov 2020 – Sep 2021',
    bullets: [
      'Established and maintained primary human brain microvascular endothelial cell (HBMEC) cultures as an in vitro model of blood-brain barrier dysfunction in X-linked adrenoleukodystrophy',
      'Assessed cell morphology, protein expression, and barrier integrity markers by immunocytochemistry, confocal microscopy, PCR, and western blot',
    ],
  },
];

const skills: { label: string; items: string }[] = [
  {
    label: 'Cell and molecular',
    items: 'Human pluripotent stem cell culture and neuronal differentiation, cell line engineering (UltraID proximity labeling), primary endothelial cell culture, PCR, western blot',
  },
  {
    label: 'Imaging and histology',
    items: 'Immunocytochemistry and immunohistochemistry, cryosectioning, confocal and widefield microscopy, blinded quantitative image analysis in ImageJ/Fiji',
  },
  {
    label: 'Programming',
    items: 'Python (NumPy, SciPy, scikit-learn, PyTorch, MNE-Python), R, SQL, Git',
  },
  {
    label: 'Analysis and modeling',
    items: 'Molecular docking (GNINA), RNA-seq analysis, intracranial EEG signal processing, forward-encoding models, cluster-based permutation testing and FDR correction, machine learning, GraphPad Prism',
  },
];

const Entry = ({ title, org, dates, href, bullets }: Role) => (
  <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
    <div className="flex justify-between items-baseline mb-1 gap-4">
      <h3 className="font-semibold text-primary">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary/80 hover:underline">
            {title}
            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
          </a>
        ) : (
          title
        )}
      </h3>
      <span className="text-sm text-primary font-medium whitespace-nowrap">{dates}</span>
    </div>
    <p className="text-xs italic text-foreground/70 mb-2">{org}</p>
    <ul className="space-y-2 text-sm text-foreground/90">
      {bullets.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="text-primary mt-0.5">•</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CV = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    window.scrollTo({ top: 0 });
  };

  return <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Button
          variant="outline"
          size="sm"
          className="shadow-lg"
          onClick={handleBack}
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
                <a href="mailto:jgbergen18@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />jgbergen18@gmail.com
                </a>
              </p>
            </div>
            <Button asChild size="sm" className="shadow-sm flex-shrink-0">
              <a href="/Jamie-Bergen-Resume-2026.docx" download>
                <Download className="w-4 h-4 mr-2" />
                Download Résumé
              </a>
            </Button>
          </div>

          {/* Research interests */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-foreground text-sm leading-relaxed">
              <span className="font-semibold">Research interests: </span>
              Understanding the mechanisms of neurodegenerative disease and developing treatments for it,
              using human stem cell and computational models.
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
              <div className="flex justify-between items-baseline mb-1 gap-4">
                <h3 className="font-semibold text-primary">MSc Neuroscience & Data Science, Erasmus Mundus Joint Master</h3>
                <span className="text-sm text-primary font-medium whitespace-nowrap">2024 – 2026</span>
              </div>
              <p className="text-sm text-foreground/80">Vrije Universiteit Amsterdam (Netherlands) | Bar-Ilan University (Israel)</p>
              <p className="text-sm text-foreground/80 mt-1">
                Thesis at ETH Zurich: <span className="italic">Neural Signatures of Syntax Planning in Speech Production</span>
              </p>
              <p className="text-sm text-foreground/70 mt-1">
                Selected coursework: Advanced Neurogenomics, Live Cell Imaging, Experimental and Clinical Neuroendocrinology,
                Signal and Data Analysis in Neuroscience, Theories on Neural Networks and Machine Learning
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded">
              <div className="flex justify-between items-baseline mb-1 gap-4">
                <h3 className="font-semibold text-primary">BA Computer Science & Neuroscience</h3>
                <span className="text-sm text-primary font-medium whitespace-nowrap">2019 – 2023</span>
              </div>
              <p className="text-sm text-foreground/80">
                Barnard College, Columbia University (New York, NY). Dean's List: Spring 2021, Fall 2021, Spring 2023
              </p>
              <p className="text-sm text-foreground/80 mt-1">
                Senior thesis: <span className="italic">Investigating the Immune Response to α-Synuclein in a Mouse Model for Parkinson's Disease</span>
              </p>
              <p className="text-sm text-foreground/70 mt-1">
                Selected coursework: Molecular & Cellular Neuroscience, Systems and Behavioral Neuroscience, Neuroscience Lab,
                Statistics & Experimental Design, Artificial Neural Networks, Artificial Intelligence
              </p>
            </div>
          </div>
        </section>

        {/* Honors & Awards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Honors & Awards
          </h2>
          <div className="space-y-2 text-sm bg-primary/5 p-5 rounded-lg border border-primary/20">
            <p className="flex justify-between gap-4">
              <span className="text-foreground">Erasmus Mundus Joint Master Scholarship, European Commission</span>
              <span className="text-primary font-medium whitespace-nowrap">2024 – 2026</span>
            </p>
            <p className="flex justify-between gap-4">
              <span className="text-foreground">Científico Latino Graduate Fellow</span>
              <span className="text-primary font-medium whitespace-nowrap">2025</span>
            </p>
          </div>
        </section>

        {/* Publications & Manuscripts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Publications & Manuscripts
          </h2>
          <ol className="space-y-3 text-sm bg-primary/5 p-5 rounded-lg border border-primary/20 list-decimal list-outside ml-4">
            <li className="pl-1 text-foreground/90">
              Garretti F, Monahan C, Sloan N, <span className="font-semibold text-foreground">Bergen J</span>, Shahriar S, Kim SW,
              Sette A, Cutforth T, Kanter E, Agalliu D, Sulzer D (2023). Interaction of an α-synuclein epitope with HLA-DRB1*15:01
              triggers enteric features in mice reminiscent of prodromal Parkinson's disease. <span className="italic">Neuron</span> 111(21), 3397–3413.{' '}
              <a href="https://doi.org/10.1016/j.neuron.2023.07.015" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                doi:10.1016/j.neuron.2023.07.015
                <ExternalLink className="inline w-3.5 h-3.5 ml-1 align-text-bottom" />
              </a>
            </li>
            <li className="pl-1 text-foreground/90">
              <span className="font-semibold text-foreground">Bergen J</span>, Kraus S (2026). Automated Mediator for Human
              Negotiation: Pre-Mediation via a Structured LLM Pipeline. Preprint,{' '}
              <a href="https://arxiv.org/abs/2606.11379" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                arXiv:2606.11379
                <ExternalLink className="inline w-3.5 h-3.5 ml-1 align-text-bottom" />
              </a>
            </li>
            <li className="pl-1 text-foreground/90">
              <span className="font-semibold text-foreground">Bergen J</span>, Dolmatova M, Proix T, Oberlaender M. Neural
              Signatures of Syntax Planning in Speech Production. Manuscript in preparation.
            </li>
          </ol>
        </section>

        {/* Research Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FlaskConical className="w-6 h-6 text-primary" />
            Research Experience
          </h2>
          <div className="space-y-6">
            {researchRoles.map((role) => (
              <Entry key={role.title} {...role} />
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Technical Skills
          </h2>
          <div className="space-y-4 text-sm">
            {skills.map((s) => (
              <div key={s.label}>
                <span className="font-semibold text-foreground">{s.label}:</span>
                <span className="text-foreground/90"> {s.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching & Outreach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Teaching & Outreach
          </h2>
          <div className="space-y-6">
            <Entry
              title="Program Coordinator & Instructor — Code.X (Ukraine / Remote)"
              org="Coding education program for Ukrainian high school students"
              dates="2024 – Present"
              bullets={[
                'Coordinate a coding program for 50 Ukrainian high school students, made up of a year-long virtual course and two summer camps, and raised over $60,000 to fund it',
                'Designed the curriculum and taught computer science and design at the 2024 and 2025 camps in Lviv',
              ]}
            />
            <Entry
              title="Peer Leader / Teaching Assistant — Columbia University"
              org="First-year seminar program, Columbia University"
              dates="2021 – 2023"
              bullets={[
                'Taught weekly seminars on cryptography, AI, and ethics to 40 first-year students over five semesters',
                'Coached first-year students on resumes and interviews when they applied for research and internship positions',
              ]}
            />
          </div>
        </section>

        {/* Industry Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Industry Experience
          </h2>
          <Entry
            title="Software Developer — Fast Enterprises"
            org="Oklahoma Tax Commission"
            dates="Jul 2023 – Jul 2024"
            bullets={[
              'Built and deployed a fraud detection module in VB.NET and SQL that flags anomalous tax filings',
              'Implemented two tax policy changes in a state tax system that processes millions of filings a year',
            ]}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground text-sm">
            © {new Date().getFullYear()} Jamie Bergen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default CV;
