import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import depressionDetectionImg from '../assets/depression-detection-project.png';
import sassResearchImg from '../assets/sass-research-group.png';
import parkinsonsResearchImg from '../assets/parkinsons-research.png';

const projectsData = [
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

const ProjectsGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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
              className="relative group overflow-hidden rounded-lg bg-background border border-border-subtle transition-all duration-300 cursor-pointer hover:border-border"
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(project)}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Hover Overlay */}
              <div 
                className={`absolute inset-0 bg-black/70 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredItem === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="p-6 text-white space-y-3 animate-fade-in">
                  <h3 className="text-lg font-medium">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-white/20 rounded text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;