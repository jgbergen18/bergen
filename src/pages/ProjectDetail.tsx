import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projectsData = {
  '1': {
    title: "Neural Network Visualization",
    description: "Interactive visualization tool for understanding deep learning architectures and data flow through neural networks.",
    longDescription: `This project addresses one of the biggest challenges in machine learning education: understanding how neural networks actually work. By creating an interactive visualization tool, we can see data flow through different layers, observe how weights change during training, and gain intuitive insights into these complex systems.

The tool supports various architectures including feedforward networks, convolutional neural networks, and recurrent neural networks. Users can upload their own datasets, modify network parameters in real-time, and watch as the network learns to solve problems.

Built with React and D3.js, the visualization emphasizes performance and interactivity. The backend uses TensorFlow.js to run neural networks directly in the browser, eliminating the need for server-side computation.`,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Machine Learning", "React", "D3.js", "TensorFlow.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2024"
  },
  '2': {
    title: "Sustainable Design System",
    description: "Comprehensive design system focused on accessibility and environmental consciousness in digital products.",
    longDescription: `This design system was created with sustainability at its core, addressing the growing need for environmentally conscious digital products. Every component is optimized for performance to reduce energy consumption, and accessibility is built-in from the ground up.

The system includes guidelines for creating interfaces that are not only beautiful and functional but also minimize environmental impact through efficient code, reduced data transfer, and optimized rendering. It features a comprehensive set of components, design tokens, and documentation.

The project emphasizes the importance of digital sustainability - something often overlooked in our industry. By making sustainable design practices accessible and easy to implement, we can collectively reduce the carbon footprint of digital products.`,
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
    tags: ["Design Systems", "Accessibility", "Sustainability", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2023"
  },
  '4': {
    title: "Urban Analytics Platform",
    description: "Real-time data analysis platform for understanding urban mobility patterns and city planning insights.",
    longDescription: `Cities generate massive amounts of data every day - from traffic patterns to energy consumption to population movement. This platform aggregates and analyzes this data to provide actionable insights for urban planners and city administrators.

The system processes real-time data from various sources including traffic sensors, public transportation systems, and mobile device location data (anonymized). Machine learning algorithms identify patterns and predict future trends, helping cities optimize resources and improve quality of life for residents.

Key features include interactive dashboards, predictive modeling for traffic flow, energy usage optimization recommendations, and tools for evaluating the potential impact of proposed infrastructure changes.`,
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    tags: ["Analytics", "Urban Planning", "Python", "Machine Learning"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2023"
  },
  '5': {
    title: "Bioinformatics Toolkit",
    description: "Open-source tools for genomic data analysis with a focus on reproducibility and collaborative research.",
    longDescription: `This toolkit addresses critical needs in bioinformatics research: reproducibility, collaboration, and accessibility. The project provides a comprehensive set of tools for genomic data analysis, from sequence alignment to phylogenetic analysis to variant calling.

All tools are containerized using Docker to ensure reproducibility across different computing environments. The platform includes version control for analysis pipelines, collaborative features for research teams, and integration with major genomic databases.

The toolkit has been used in several published research studies and is actively maintained by a community of researchers and developers. It exemplifies how open-source software can accelerate scientific discovery by making advanced analysis tools accessible to researchers worldwide.`,
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    tags: ["Bioinformatics", "Open Source", "Research", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2022"
  },
  '6': {
    title: "Climate Data Visualization",
    description: "Interactive dashboard for exploring climate change data and trends across different geographical regions.",
    longDescription: `Climate change is one of the most pressing issues of our time, but understanding its complexity requires accessible data visualization. This interactive dashboard presents climate data from various sources in an intuitive, explorable format.

The platform aggregates data from NASA, NOAA, and other climate monitoring organizations to show temperature trends, precipitation patterns, extreme weather events, and sea level changes over time. Users can explore data by region, time period, and various climate indicators.

The visualization emphasizes storytelling with data - helping users understand not just what the data shows, but what it means for different regions and populations. Educational features include explanations of climate science concepts and the methodology behind climate models.`,
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
    tags: ["Climate Science", "Visualization", "React", "Data Analysis"],
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2024"
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-text-primary mb-4">Project Not Found</h1>
          <Link 
            to="/"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Project Header */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm text-text-muted">{project.year}</div>
              <h1 className="text-4xl md:text-5xl font-medium text-text-primary leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-text-muted bg-surface rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 border border-border text-text-primary rounded-lg hover:bg-surface transition-colors duration-200"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="aspect-video overflow-hidden rounded-lg bg-surface">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-text-secondary leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;