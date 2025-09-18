import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-12">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed">
              I'm always interested in connecting with new people and exploring 
              opportunities for collaboration. Feel free to reach out if you'd 
              like to discuss projects, ideas, or just say hello.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-text-secondary">
                <Mail size={18} />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <MapPin size={18} />
                <span>Your City, Country</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-border text-text-primary placeholder-text-muted"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-border text-text-primary placeholder-text-muted"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:border-border text-text-primary placeholder-text-muted resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;