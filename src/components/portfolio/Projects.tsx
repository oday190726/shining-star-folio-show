
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a checkout process.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800',
    link: '#',
  },
  {
    title: 'Data Viz Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with custom charts and filters.',
    tags: ['React', 'D3.js', 'GraphQL', 'TypeScript'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'A concept for a secure and user-friendly mobile banking application with modern features.',
    tags: ['React Native', 'Firebase', 'Figma', 'UX/UI'],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-card/50">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
