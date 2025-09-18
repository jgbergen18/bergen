import Header from '../components/Header';

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Jamie Bergen</h1>
          <div className="text-text-muted space-x-4">
            <span>jgbergen18@gmail.com</span>
            <span>•</span>
            <span>203.644.8464</span>
            <span>•</span>
            <span>jamiebergen.com</span>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6 border-b border-border pb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-text-primary">Expected Graduation 06/2026 | Erasmus Mundus Joint MSc in Brain and Data Science, 4.0 GPA</p>
              <p className="text-text-muted">Bar-Ilan University, Ramat Gan, Israel</p>
            </div>
            <div>
              <p className="font-medium text-text-primary">Expected Graduation 06/2026 | Erasmus Mundus Joint MSc in Neuroscience</p>
              <p className="text-text-muted">Vrije Universiteit, Amsterdam, The Netherlands</p>
            </div>
            <div>
              <p className="font-medium text-text-primary">05/2023 | B.A. in Computer Science (Intelligent Systems) and Neuroscience (Behavioral), 3.5 GPA</p>
              <p className="text-text-muted">Barnard College of Columbia University, New York City, USA</p>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6 border-b border-border pb-2">Research Interests</h2>
          <ul className="space-y-3">
            <li className="text-text-primary">
              <strong>NeuroAI</strong> – Integrating neuroscience and artificial intelligence to develop brain-inspired models and interpretable algorithms, with applications in cognition, decision-making, and human–AI collaboration.
            </li>
            <li className="text-text-primary">
              <strong>Consciousness & Decision-Making</strong> – Bridging neuroscience and computer science to study the mechanisms of consciousness and their implications for both biological and artificial agents.
            </li>
          </ul>
        </section>

        {/* Publications and Conferences */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6 border-b border-border pb-2">Publications and Conferences</h2>
          <ul className="space-y-3">
            <li className="text-text-primary">
              <strong>2025</strong> - Bar-Ilan Brain Center Conference Poster Presentation and Speaker: A New Paradigm for Studying LGBTQ+ Identities using Mixed Methods and Machine Learning
            </li>
            <li className="text-text-primary">
              <strong>2023</strong> - Neuron Publication: Interaction of α-synuclein with HLA-DRB1*15:01 recapitulates enteric features of Parkinson's disease
            </li>
            <li className="text-text-primary">
              <strong>2022</strong> - SFN Poster Presentation: Alpha melanocyte-stimulating Hormone (α-MSH) regulates brain endothelial function in ABCD1-deficient cells
            </li>
            <li className="text-text-primary">
              <strong>2022</strong> - Consciousness Conference Speaker: The Phenomenology and Prevalence of Trans Phantoms
            </li>
            <li className="text-text-primary">
              <strong>2022</strong> - Barnard Summer Research Institute Poster Presentation: Investigating the role of the immune system in aged mice
            </li>
          </ul>
        </section>

        {/* Research Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6 border-b border-border pb-2">Research Experience</h2>
          
          {/* Current Position */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Research Assistant | 08/2024–Present</h3>
            <p className="text-text-accent font-medium mb-3">Sarit Kraus Lab, Bar-Ilan University, Ramat Gan, Israel</p>
            <ul className="list-disc list-inside space-y-2 text-text-primary">
              <li>Designed and implemented a research experiment relating to conversing with mediator AI agent, and automated analysis reporting for studying AI-assisted conflict resolution strategies.</li>
              <li>Developed full-stack AI mediation platform using React/TypeScript and Supabase, integrating OpenAI GPT-4 with multi-agent architecture including regulatory agent oversight system for conversation quality control.</li>
              <li>Collaborated closely with Professor Sarit Kraus and other lab members in weekly meetings to present results and improve experimental protocol.</li>
            </ul>
          </div>

          {/* Columbia University */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Research Assistant | 09/2021–05/2023</h3>
            <p className="text-text-accent font-medium mb-3">Dritan Agalliu Lab, Columbia University Irving Medical Center, New York, NY</p>
            <ul className="list-disc list-inside space-y-2 text-text-primary">
              <li>Designed and executed experiments regarding the involvement of the immune system in the progression of Parkinson's disease using mouse models.</li>
              <li>Performed PCR, western blot, mouse behavioral experiments, mouse brain and gut dissections, tissue fixation and sectioning, immunohistochemistry, and confocal microscopy imaging to collect data.</li>
              <li>Analyzed data with ImageJ, Prism, R, and Python to uncover biological markers.</li>
              <li>Co-authored a Neuron publication elucidating α-synuclein epitope interactions with HLA-DRB1*15:01 relevant to early-stage Parkinson's disease.</li>
            </ul>
          </div>

          {/* NYU */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Research Assistant | 10/2021–12/2022</h3>
            <p className="text-text-accent font-medium mb-3">S.J. Langer and Taymy Caso Lab, New York University, New York, NY</p>
            <ul className="list-disc list-inside space-y-2 text-text-primary">
              <li>Conducted psychological research on embodiment and phantom sensations in transgender and gender nonconforming individuals.</li>
              <li>Collaboratively developed a detailed code-book and analyzed qualitative interview data on embodiment experiences and gender identity.</li>
              <li>Presented research at the 2022 Consciousness Conference, contributing to broader conversations on gender and psychology.</li>
            </ul>
          </div>

          {/* Mass General */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Research Assistant | 11/2020–09/2021</h3>
            <p className="text-text-accent font-medium mb-3">Patricia Musolino Lab, Massachusetts General Hospital, Boston, MA</p>
            <ul className="list-disc list-inside space-y-2 text-text-primary">
              <li>Cultured and maintained human brain microvascular endothelial cells (HBMECs) to model blood-brain barrier integrity in X-linked adrenoleukodystrophy (X-ALD).</li>
              <li>Performed immunohistochemistry, PCR, and western blot to assess gene expression and protein markers.</li>
              <li>Independently designed a project investigating cytokine-mediated endothelial dysfunction, identifying key immune signaling differences in ABCD1-deficient cells.</li>
              <li>Mentored several high school students under the supervision of Dr. Patricia Musolino and Dr. Ed Kravitz.</li>
            </ul>
          </div>

          {/* Columbia Bionet */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-2">Research Assistant | 06/2020–09/2020</h3>
            <p className="text-text-accent font-medium mb-3">Aurel Lazar Bionet Lab, Columbia University, New York, NY</p>
            <ul className="list-disc list-inside space-y-2 text-text-primary">
              <li>Built and queried neural circuit models using the NeuroArch graph database, leveraging NetworkX and Pandas to analyze connectivity patterns and structural motifs.</li>
              <li>Developed computational tools for neural circuit analysis and visualization.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6 border-b border-border pb-2">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Programming Languages</h3>
              <p className="text-text-muted">Python, R, TypeScript, JavaScript, MATLAB</p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Frameworks & Tools</h3>
              <p className="text-text-muted">React, Supabase, OpenAI API, NetworkX, Pandas</p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Laboratory Techniques</h3>
              <p className="text-text-muted">PCR, Western Blot, Immunohistochemistry, Confocal Microscopy, Cell Culture</p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Analysis Software</h3>
              <p className="text-text-muted">ImageJ, Prism, SPSS, NeuroArch</p>
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