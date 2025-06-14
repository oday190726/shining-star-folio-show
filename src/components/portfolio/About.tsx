
const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
             <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Jane Doe" className="w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 text-lg text-foreground/80 space-y-4 text-center md:text-left">
            <p>
              Hello! I'm Jane, a passionate full-stack developer with a keen eye for design and a love for crafting seamless user experiences. My journey into tech started with a fascination for how things work, which quickly evolved into building dynamic and responsive web applications.
            </p>
            <p>
              I thrive on solving complex problems and turning ideas into reality. Whether it's designing an intuitive UI or architecting a scalable backend, I'm dedicated to writing clean, efficient, and maintainable code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
