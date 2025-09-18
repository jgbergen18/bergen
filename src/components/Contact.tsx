import { Mail, MapPin, Phone } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-12">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed">I'm always interested in connecting with new people and exploring opportunities for collaboration and research. Feel free to reach out if you'd like to discuss projects, ideas, or just say hello.</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-text-secondary">
                <Mail size={18} />
                <span>jgbergen18@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                
                
              </div>
              
            </div>
          </div>
          
          <div className="space-y-4">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;