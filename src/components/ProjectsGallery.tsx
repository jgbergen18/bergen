import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import depressionDetectionImg from '../assets/depression-detection-project.png';
import sassResearchImg from '../assets/sass-research-group.png';
import parkinsonsResearchImg from '../assets/parkinsons-research.png';
import aiMediationImg from '../assets/ai-mediation-research.png';

const projectsData = [
  {
    id: 7,
    title: "AI Mediation Research",
    description: "First-author research building a multi-agent LLM pipeline for AI-assisted pre-mediation in human negotiation. \"Automated Mediator for Human Negotiation: Pre-Mediation via a Structured LLM Pipeline\" (with Sarit Kraus), arXiv 2026.",
    imageUrl: aiMediationImg,
    tags: ["Multi-Agent LLMs", "NLP", "Research"],
    type: "project",
    externalLink: "https://arxiv.org/abs/2606.11379"
  },
  {
    id: 1,
    title: "Detection of Depression-Related Posts in Reddit",
    description: "Replication study of depression detection in social media using natural language processing and machine learning techniques.",
    imageUrl: depressionDetectionImg,
    tags: ["Machine Learning", "NLP", "Research"],
    type: "project",
    externalLink: "https://github.com/sunflowerseed17/TadesseRedditDepressionReplication"
  },
  {
    id: 4,
    title: "Parkinson's Disease Research",
    description: "Research assistant in the Agalliu Lab studying the role of gut immune system in Parkinson's Disease progression. Contributed to published research in Neuron on α-synuclein and HLA-DRB1*15:01 interactions.",
    imageUrl: parkinsonsResearchImg,
    tags: ["Neuroscience", "Research", "Immunology"],
    type: "project",
    externalLink: "https://www.cell.com/neuron/pdf/S0896-6273(23)00548-2.pdf"
  },
  {
    id: 6,
    title: "SASS Research Group",
    description: "Co-created research group focused on sex and sexuality studies. Built the group's website and secured IRB approval for our first study, currently in data collection phase.",
    imageUrl: sassResearchImg,
    tags: ["Research", "Web Development", "LGBTQ+ Studies"],
    type: "project",
    externalLink: "https://sasstudies.com/"
  }
];

// Spectrum palette echoing the reading-log color coding
const tagColors = [
  "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 border border-fuchsia-500/20",
  "bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/20",
  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20",
  "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20",
];

const ProjectsGallery = () => {
  const navigate = useNavigate();

  const handleItemClick = (project: typeof projectsData[0]) => {
    if (project.type === 'blog') {
      navigate('/blog');
    } else if (project.externalLink) {
      window.open(project.externalLink, '_blank');
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <section id="projects" className="py-16 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-background border border-border-subtle transition-all duration-300 cursor-pointer hover:border-border hover:shadow-lg hover:-translate-y-1"
              onClick={() => handleItemClick(project)}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* External-link badge */}
                {project.externalLink && (
                  <div className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm p-1.5 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={15} />
                  </div>
                )}

                {/* Description overlay (desktop hover enhancement) */}
                <div className="hidden md:flex absolute inset-0 items-end bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="p-5 text-sm text-white/90 leading-relaxed animate-fade-in">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Always-visible info (works on touch devices) */}
              <div className="flex flex-col gap-3 p-4">
                <h3 className="text-base font-medium text-text-primary leading-snug">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2.5 py-1 text-xs rounded-full ${tagColors[tagIndex % tagColors.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Description shown inline on mobile (no hover available) */}
                <p className="md:hidden text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
