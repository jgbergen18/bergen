import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile-photo.jpg';

const About = () => {
  return (
    <section id="about" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid items-start gap-10 md:grid-cols-[3fr_2fr] md:gap-14">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
              Bench and computer, both
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-text-secondary">
              <p>
                I did neuroscience and computer science at the same time at Barnard and never picked
                one. My first lab job was growing brain cells at Mass General. Then two years at
                Columbia staining mouse guts, asking whether an immune attack on α-synuclein starts
                Parkinson's.
              </p>
              <p>
                My master's went computational: an AI mediator at Bar-Ilan, then recordings from
                electrodes inside people's brains at ETH Zurich. Now I'm in Copenhagen with stem
                cells again, which is the first time both halves are in one job.
              </p>
              <p>
                I also read a lot. Every book since 2024 is in my{' '}
                <Link
                  to="/blog"
                  className="text-text-primary underline underline-offset-4 hover:no-underline"
                >
                  reading log
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border-subtle">
            <img
              src={profilePhoto}
              alt="Jamie Bergen, smiling, standing in a wooded park"
              width={1000}
              height={1000}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
