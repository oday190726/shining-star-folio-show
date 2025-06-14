import { Button } from '@/components/ui/button';
import { ArrowDown, Shield, Brain, Network } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        {/* Floating icons for visual appeal */}
        <div className="absolute top-20 left-10 opacity-10">
          <Shield className="h-16 w-16 text-primary animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-10">
          <Brain className="h-20 w-20 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10">
          <Network className="h-18 w-18 text-primary animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 animate-fade-in-up">
        <div className="mb-6">
          <p className="text-sm md:text-base font-medium text-primary uppercase tracking-widest mb-2">
            Computer Engineer • Peace Ambassador
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-4">
            Oday Sharqawi
          </h1>
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 max-w-4xl mx-auto mb-4">
          Systems Engineer specializing in <span className="text-primary font-medium">Cybersecurity</span>, <span className="text-blue-400 font-medium">Artificial Intelligence</span>, and <span className="text-primary font-medium">Network Engineering</span>.
        </p>
        <p className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto mb-8">
          Building secure, intelligent systems that make a difference. Currently engineering solutions at BIS while pursuing innovation in AI and cybersecurity.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button size="lg" asChild>
            <a href="#projects">View My Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#experience">My Experience</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contact">Let's Connect</a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Cybersecurity Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            <span>AI/ML Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            <span>Systems Engineer</span>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </a>
    </section>
  );
};

export default Hero;