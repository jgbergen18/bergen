import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { usePageTitle } from '../lib/usePageTitle';

const NotFound = () => {
  usePageTitle('Page not found');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-sm italic text-text-muted">404</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
            Page not found
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            There is nothing at this address. The link may be wrong, or the page may have moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center rounded-full bg-text-primary text-background px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          >
            Back to the home page
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
