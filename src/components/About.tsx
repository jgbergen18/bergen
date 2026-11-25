import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-text-primary">
              About me
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I did neuroscience and computer science at the same time at Barnard, and I've never
                really picked one.
              </p>
              <p>
                My first lab job was at Mass General, growing human brain cells to model the
                blood-brain barrier. Then I spent two years at Columbia staining mouse guts, working
                on whether an immune attack on α-synuclein is what starts Parkinson's.
              </p>
              <p>
                For my master's I went almost all the way computational: an AI mediator at Bar-Ilan,
                then recordings from electrodes inside people's brains at ETH Zurich. Now I'm in
                Copenhagen with stem cells again, which is the first time the two halves have
                properly met.
              </p>
              <p>
                Outside the lab I read a lot. Every book I've finished since 2024 is in my{' '}
                <Link to="/blog" className="text-text-primary underline underline-offset-4 hover:no-underline">
                  reading log
                </Link>
                , ratings and all.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-surface rounded-lg overflow-hidden">
              <img
                src={profilePhoto}
                alt="Jamie Bergen, smiling, standing in a wooded park"
                width={1000}
                height={1000}
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
