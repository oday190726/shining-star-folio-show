import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Systems Engineer",
    company: "BIS",
    location: "Ramallah, Palestine",
    period: "April 2025 – Present",
    description: [
      "Deployed and supported IT infrastructure including hardware, software, virtualization, and storage systems",
      "Managed vSphere environments and ESXi hosts; implemented iSCSI, FC, FCoE SAN, and NAS solutions",
      "Handled Windows Server roles, backup/DR systems, and private cloud administration",
      "Troubleshot and maintained firewalls, networks, and system performance",
      "Delivered client-facing technical support, maintained customer satisfaction, and strengthened post-sales relationships"
    ],
    skills: ["Virtualization", "Windows Server", "SAN/NAS Storage", "Network & Firewall Administration", "Backup & DR", "Client Support"]
  },
  {
    title: "Software Engineering Intern",
    company: "Ooredoo",
    location: "Muscat, Oman",
    period: "June – September 2023",
    description: [
      "Built tools to streamline network monitoring and enhance customer service",
      "Improved network reliability by supporting performance monitoring solutions",
      "Developed mobile features to boost customer engagement and service access"
    ],
    skills: ["Network Monitoring", "Mobile Development", "Customer Service Tools", "Performance Optimization"]
  },
  {
    title: "Front-End Developer",
    company: "Isra' Software & Computer Co.",
    location: "Nablus, Palestine",
    period: "May – September 2022",
    description: [
      "Created responsive websites using HTML and ReactJS",
      "Worked with cross-functional teams to enhance UX/UI design"
    ],
    skills: ["HTML", "ReactJS", "Responsive Design", "UX/UI", "Cross-functional Collaboration"]
  },
  {
    title: "Software & Hardware Support Specialist",
    company: "Professional Center",
    location: "Muscat, Oman",
    period: "April – August 2021",
    description: [
      "Diagnosed hardware issues and resolved software conflicts",
      "Handled installations, updates, and data recovery for system optimization"
    ],
    skills: ["Hardware Diagnostics", "Software Troubleshooting", "System Optimization", "Data Recovery"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {exp.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start gap-2 text-foreground/80">
                        <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;