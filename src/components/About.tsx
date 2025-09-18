const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-text-primary">
              About Me
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm passionate about creating innovative solutions and meaningful experiences. 
                With a background in [your field], I focus on [your specialization or interests].
              </p>
              <p>
                My work spans across [your areas of expertise], where I enjoy exploring 
                the intersection of [relevant topics]. I believe in the power of [your philosophy 
                or approach] to create positive impact.
              </p>
              <p>
                When I'm not working, you can find me [your hobbies/interests]. 
                I'm always eager to learn new things and connect with like-minded individuals.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-surface rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-surface to-accent flex items-center justify-center text-text-muted">
                Your Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;