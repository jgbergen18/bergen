import profilePhoto from '../assets/profile-photo.jpg';

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
                I'm Jamie Bergen, a graduate student fascinated by the intricate connections between biology, data, and intelligence. 
                I graduated from Barnard College with a dual major in neuroscience and computer science, specializing in intelligent systems.
              </p>
              <p>
                My research focuses on cognition, neuroAI, and data science. I'm currently pursuing a Master's degree in Brain and Data Science 
                through the Erasmus Mundus Joint Masters Scholarship, spending time in Israel and the Netherlands.
              </p>
              <p>
                I'd love to hear from you with any questions, comments, or collaboration ideas.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-surface rounded-lg overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Jamie Bergen profile photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;