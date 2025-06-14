
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-4">
          Jane Doe
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 max-w-4xl mx-auto mb-8">
          A Creative Developer specializing in beautiful interfaces and robust backend systems.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
       <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
