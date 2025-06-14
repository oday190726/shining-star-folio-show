import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-primary">OS.</a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">{link.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href="mailto:odaynu190726@gmail.com">Email Me</a>
            </Button>
            <Button variant="default" asChild>
              <a href="tel:+96879369389">Call Me</a>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-6">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-primary transition-colors text-lg">{link.label}</a>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" asChild>
                <a href="mailto:odaynu190726@gmail.com">Email Me</a>
              </Button>
              <Button variant="default" asChild>
                <a href="tel:+96879369389">Call Me</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;