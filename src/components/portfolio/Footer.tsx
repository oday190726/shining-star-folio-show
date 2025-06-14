import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/oday190726' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/oday-sharqawi' },
  { name: 'Email', icon: Mail, url: 'mailto:odaynu190726@gmail.com' },
  { name: 'Phone', icon: Phone, url: 'tel:+96879369389' },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Oday Sharqawi. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Computer Engineer • Systems Engineering • Cybersecurity • AI/ML
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-right">
              <p className="text-muted-foreground text-xs">
                Based in Ramallah, West Bank
              </p>
              <p className="text-muted-foreground text-xs">
                Available for Projects & Collaborations
              </p>
            </div>
            
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>
              Dean's List Honoree • Peace Ambassador • Full Scholarship Recipient
            </p>
            <p>
              Built with passion for technology and innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;