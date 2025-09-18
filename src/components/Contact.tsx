import { Mail, MapPin, Phone } from 'lucide-react';
import contactPhoto from '../assets/contact-photo.jpg';

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-8">
        Get In Touch
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-text-secondary leading-relaxed">
            I'm always interested in connecting with new people and exploring opportunities for collaboration and research. Feel free to reach out if you'd like to discuss projects, ideas, or just say hello.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-text-secondary">
              <Mail size={18} />
              <span>jgbergen18@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <img 
            src={contactPhoto} 
            alt="Jamie Bergen at an art installation"
            className="rounded-lg shadow-lg max-w-full h-auto max-h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;