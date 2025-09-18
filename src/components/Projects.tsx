const projects = [
  {
    title: "Project One",
    description: "Brief description of your project and what makes it interesting or impactful.",
    tags: ["Tag 1", "Tag 2", "Tag 3"]
  },
  {
    title: "Project Two", 
    description: "Another project showcasing different skills or interests you have.",
    tags: ["Tag 1", "Tag 4", "Tag 5"]
  },
  {
    title: "Project Three",
    description: "A third project that demonstrates your range and capabilities.",
    tags: ["Tag 2", "Tag 6", "Tag 7"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-12">
          Projects
        </h2>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-6 md:p-8 rounded-lg border border-border-subtle hover:border-border transition-colors duration-200"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm text-text-muted bg-surface rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;