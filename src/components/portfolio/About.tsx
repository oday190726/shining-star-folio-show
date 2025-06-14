const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
             <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Oday Sharqawi" className="w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 text-lg text-foreground/80 space-y-4 text-center md:text-left">
            <p>
              Hello! I'm Oday, a passionate Computer Engineer with expertise in Cybersecurity, Artificial Intelligence, and Network Engineering. My journey began with a fascination for building secure, intelligent systems and has evolved into developing innovative solutions that enhance network monitoring efficiency and data protection.
            </p>
            <p>
              I thrive on solving complex technical challenges and transforming ideas into robust, scalable systems. Whether it's implementing virtualization solutions, developing AI-powered applications, or architecting secure network infrastructures, I'm dedicated to delivering high-quality, maintainable solutions that make a real impact.
            </p>
            <p>
              As a Peace Ambassador at the Global Peace Summit New York 2024 and Dean's List honoree, I bring both technical excellence and leadership to every project. When I'm not engineering solutions, you can find me contributing to community development initiatives, mentoring fellow students, or exploring the latest advancements in machine learning and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;