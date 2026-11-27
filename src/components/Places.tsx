import { Link } from 'react-router-dom';
import WorldGlobe from './WorldGlobe';
import { locations } from '../data/locations';

/**
 * The globe, moved here from the CV page.
 *
 * It sits directly after About so that on a phone, where that section stacks
 * to text then photo, the globe lands immediately under the photo. It is given
 * the full content width rather than the photo column because WorldGlobe is
 * itself a two-column grid: inside the 2fr column both halves would be about
 * 150px, which is too small to click a pin in.
 */
const Places = () => {
  return (
    <section id="places" className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Places</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
              Where I've been
            </h2>
          </div>
          <Link
            to="/cv"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            Read the full CV
          </Link>
        </div>

        <div className="mt-10">
          <WorldGlobe locations={locations} />
        </div>
      </div>
    </section>
  );
};

export default Places;
