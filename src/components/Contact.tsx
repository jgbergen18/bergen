import { Mail, Github } from 'lucide-react';
import contactPhoto from '../assets/contact-photo.jpg';

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-8">
        Get in touch
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-text-secondary leading-relaxed">
            If you work on human stem cell models or neurodegenerative disease, or on the
            computational side of either, I'd like to hear about it. Happy to talk about anything
            else on here too.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:jgbergen18@gmail.com"
              className="flex items-center space-x-3 text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Mail size={18} />
              <span>jgbergen18@gmail.com</span>
            </a>
            <a
              href="https://github.com/jgbergen18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-text-secondary hover:text-text-primary transition-colors duration-200"
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
            className="rounded-lg shadow-lg max-w-full h-auto max-h-96 w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
