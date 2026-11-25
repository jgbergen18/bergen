import { Mail, Github, Fingerprint } from 'lucide-react';
import contactPhoto from '../assets/contact-photo.jpg';

const Contact = () => {
  return (
    <div id="contact">
      <p className="eyebrow">Contact</p>
      <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">Get in touch</h2>

      <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="leading-relaxed text-text-secondary">
            I am interested in human stem cell models of neurodegenerative disease and the
            computational methods that go with them. If that overlaps with your work, please get in
            touch.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="mailto:jgbergen18@gmail.com"
              className="flex items-center gap-3 text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              <Mail size={18} />
              <span>jgbergen18@gmail.com</span>
            </a>
            <a
              href="https://orcid.org/0009-0008-1723-4133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              <Fingerprint size={18} />
              <span>orcid.org/0009-0008-1723-4133</span>
            </a>
            <a
              href="https://github.com/jgbergen18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              <Github size={18} />
              <span>github.com/jgbergen18</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={contactPhoto}
            alt="Jamie Bergen pointing at a white thread installation hung with sheet music"
            width={720}
            height={960}
            loading="lazy"
            className="h-auto max-h-96 w-auto max-w-full rounded-xl border border-border-subtle object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
