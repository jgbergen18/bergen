import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile-photo.webp';
import WorldGlobe from './WorldGlobe';
import { locations } from '../data/locations';

const About = () => {
  return (
    <section id="about" className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid items-start gap-10 md:grid-cols-[3fr_2fr] md:gap-14">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">Background</h2>

            <div className="mt-6 space-y-4 leading-relaxed text-text-secondary">
              <p>
                I trained in neuroscience and computer science at Barnard College, Columbia
                University, and have worked in both since. I started at the bench: primary human
                brain microvascular endothelial cell culture at Massachusetts General Hospital, then
                an α-synuclein autoimmunity model of prodromal Parkinson's disease at Columbia, where
                I quantified enteric neuron loss for a paper in <span className="italic">Neuron</span>.
              </p>
              <p>
                My MSc, an Erasmus Mundus joint degree in neuroscience and data science, was
                computational: an LLM-based mediation system at Bar-Ilan University, then
                intracranial EEG of sentence production at ETH Zurich. I am now a research assistant
                in the Kirkeby Lab at reNEW, differentiating human pluripotent stem cells into
                hypothalamic neurons.
              </p>
              <p>
                I also read a great deal. Every book since 2024 is in my{' '}
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

          {/* Photo, then the globe directly beneath it in the same column. */}
          <div className="mx-auto w-full max-w-[240px] md:mx-0 md:max-w-none">
            <div className="overflow-hidden rounded-xl border border-border-subtle">
              <img
                src={profilePhoto}
                alt="Jamie Bergen"
                width={680}
                height={680}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div id="places" className="mt-8">
              <p className="eyebrow">Where I've been</p>
              <div className="mt-4">
                <WorldGlobe locations={locations} compact />
              </div>
              <Link
                to="/cv"
                className="mt-5 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
              >
                Read the full CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
