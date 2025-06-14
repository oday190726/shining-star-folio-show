
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
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
          <a href="#" className="text-2xl font-bold text-primary">JD.</a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">{link.label}</a>
            ))}
          </nav>
          <Button variant="outline" className="hidden md:inline-flex" asChild>
            <a href="mailto:hello@example.com">Email Me</a>
          </Button>
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
            <Button variant="outline" className="mt-4" asChild>
              <a href="mailto:hello@example.com">Email Me</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
