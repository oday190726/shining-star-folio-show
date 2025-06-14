import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-card/50">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-center mb-12">
          Looking for a skilled Computer Engineer or have a project in mind? Let's discuss how we can work together.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:odaynu190726@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      odaynu190726@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+96879369389" className="text-muted-foreground hover:text-primary transition-colors">
                      (+968) 79369389
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Ramallah, West Bank</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/oday-sharqawi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/oday-sharqawi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Currently Available For</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Systems Engineering Projects</li>
                <li>• Cybersecurity Consulting</li>
                <li>• AI/ML Development</li>
                <li>• Network Engineering Solutions</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Your Name" className="h-12" />
                <Input type="email" placeholder="Your Email" className="h-12" />
              </div>
              <Input type="text" placeholder="Subject" className="h-12" />
              <Textarea placeholder="Tell me about your project or how I can help you..." rows={6} />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;