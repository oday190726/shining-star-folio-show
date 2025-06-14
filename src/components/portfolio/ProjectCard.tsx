import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github, ExternalLink, Award } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  githubLink?: string;
  isCapstone?: boolean;
  features?: string[];
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  link, 
  githubLink,
  isCapstone = false,
  features = []
}: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border group transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 relative">
      {isCapstone && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Award className="h-3 w-3" />
          Capstone
        </div>
      )}
      
      <div className="overflow-hidden relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground/80 mb-2">Key Features:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          {link && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live
              </a>
            </Button>
          )}
          
          {githubLink && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            </Button>
          )}
          
          {!link && !githubLink && (
            <Button variant="outline" size="sm" disabled className="flex-1">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Private Project
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;