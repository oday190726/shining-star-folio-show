import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'AKLATI - Intelligent Food App',
    description: 'Advanced capstone project featuring an AI-powered food management system with comprehensive functionality and secure architecture.',
    tags: ['Flutter', 'Node.js', 'Firebase', 'MySQL', 'AI/ML', 'Encryption'],
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    isCapstone: true,
    features: [
      '30+ integrated functions',
      'AI-based personalization engine',
      'Secure encryption protocols',
      'Real-time order management',
      'Cross-platform mobile app'
    ],
    githubLink: '#', // Update with actual GitHub link
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'Full-featured e-commerce application built with Flutter and Firebase, focusing on real-time shopping experiences and secure payment processing.',
    tags: ['Flutter', 'Firebase', 'Real-time Database', 'Payment Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    features: [
      'Real-time shopping cart',
      'Secure payment gateway',
      'User-friendly interface',
      'Inventory management',
      'Order tracking system'
    ],
    githubLink: '#', // Update with actual GitHub link
  },
  {
    title: 'Network Monitoring Tools',
    description: 'Custom-built tools developed during Ooredoo internship to streamline network monitoring and enhance customer service efficiency.',
    tags: ['Network Engineering', 'Monitoring', 'Performance Analytics', 'Customer Service'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    features: [
      'Real-time network monitoring',
      'Performance analytics dashboard',
      'Customer service integration',
      'Network reliability improvements',
      'Automated reporting systems'
    ],
  },
  {
    title: 'University Registration System',
    description: 'Comprehensive student management system developed with VB.NET and MySQL for efficient course registration and administrative tasks.',
    tags: ['VB.NET', 'MySQL', 'Database Design', 'System Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    features: [
      'Student profile management',
      'Course selection system',
      'Administrative dashboard',
      'Automated scheduling',
      'Report generation'
    ],
    githubLink: '#', // Update with actual GitHub link
  },
  {
    title: 'Real Estate Web Platform',
    description: 'Dynamic real estate platform powered by ColdFusion, featuring advanced search capabilities and high-volume data processing.',
    tags: ['ColdFusion', 'Web Development', 'Database Management', 'Search Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    features: [
      'Dynamic property listings',
      'Advanced search filters',
      'High-volume data handling',
      'Responsive web design',
      'Property management tools'
    ],
  },
  {
    title: 'Playlist Manager',
    description: 'Object-oriented Java application designed for playlist organization, demonstrating scalable software architecture and design patterns.',
    tags: ['Java', 'OOP', 'Software Architecture', 'Design Patterns'],
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    features: [
      'Object-oriented design',
      'Scalable architecture',
      'Playlist organization',
      'User-friendly interface',
      'Data persistence'
    ],
    githubLink: '#', // Update with actual GitHub link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-card/50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing expertise in systems engineering, AI development, 
            and secure software architecture across mobile, web, and network applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing potential collaborations?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://github.com/oday190726" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Projects on GitHub
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-card transition-colors"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;