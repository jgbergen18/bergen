const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-text-primary leading-tight">
            Hello, I'm{' '}
            <span className="font-medium">Your Name</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            Welcome to my website! I'm passionate about creating meaningful work at the intersection of design and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;