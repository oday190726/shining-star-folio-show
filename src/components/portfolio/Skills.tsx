import { Code, Server, Shield, Brain, Database, Smartphone, Globe, Cpu } from 'lucide-react';
import { ReactNode } from 'react';

interface Skill {
  name: string;
  icon: ReactNode;
}

const skills: Skill[] = [
  { name: 'Flutter', icon: <Smartphone className="h-10 w-10 text-primary" /> },
  { name: 'Java', icon: <Code className="h-10 w-10 text-primary" /> },
  { name: 'Node.js', icon: <Server className="h-10 w-10 text-primary" /> },
  { name: 'ReactJS', icon: <Globe className="h-10 w-10 text-primary" /> },
  { name: 'Cybersecurity', icon: <Shield className="h-10 w-10 text-primary" /> },
  { name: 'AI/ML', icon: <Brain className="h-10 w-10 text-primary" /> },
  { name: 'MySQL', icon: <Database className="h-10 w-10 text-primary" /> },
  { name: 'Network Engineering', icon: <Cpu className="h-10 w-10 text-primary" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg w-36 h-36 justify-center transition-all duration-300 hover:border-primary hover:-translate-y-2">
              {skill.icon}
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;