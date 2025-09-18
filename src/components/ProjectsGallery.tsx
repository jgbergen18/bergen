import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: "Neural Network Visualization",
    description: "Interactive visualization tool for understanding deep learning architectures and data flow through neural networks.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=600&fit=crop",
    tags: ["Machine Learning", "React", "D3.js"],
    type: "project"
  },
  {
    id: 2,
    title: "Sustainable Design System",
    description: "Comprehensive design system focused on accessibility and environmental consciousness in digital products.",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&h=600&fit=crop",
    tags: ["Design Systems", "Accessibility", "Sustainability"],
    type: "project"
  },
  {
    id: 3,
    title: "Data Science Blog",
    description: "Collection of articles exploring the intersection of data science, ethics, and real-world applications.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=600&fit=crop",
    tags: ["Writing", "Data Science", "Ethics"],
    type: "blog",
    link: "/blog"
  },
  {
    id: 4,
    title: "Urban Analytics Platform",
    description: "Real-time data analysis platform for understanding urban mobility patterns and city planning insights.",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=600&fit=crop",
    tags: ["Analytics", "Urban Planning", "Python"],
    type: "project"
  },
  {
    id: 5,
    title: "Bioinformatics Toolkit",
    description: "Open-source tools for genomic data analysis with a focus on reproducibility and collaborative research.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=600&fit=crop",
    tags: ["Bioinformatics", "Open Source", "Research"],
    type: "project"
  },
  {
    id: 6,
    title: "Climate Data Visualization",
    description: "Interactive dashboard for exploring climate change data and trends across different geographical regions.",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&h=600&fit=crop",
    tags: ["Climate Science", "Visualization", "React"],
    type: "project"
  }
];

const ProjectsGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleItemClick = (project: typeof projectsData[0]) => {
    if (project.type === 'blog') {
      navigate('/blog');
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
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-background border border-border-subtle hover:border-border transition-all duration-300"
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