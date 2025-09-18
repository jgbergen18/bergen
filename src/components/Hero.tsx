const Hero = () => {
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="rainbow-letter inline-block transition-all duration-200"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="pt-32 pb-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-text-primary leading-tight rainbow-text">
            {splitText("Hello, I'm ")}{' '}
            <span className="font-medium">
              {splitText("Jamie Bergen")}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;