
const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Hello! I'm a passionate Full Stack Developer
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              With over 5 years of experience in web development, I specialize in creating 
              beautiful, functional, and user-centered digital experiences. I'm passionate 
              about bringing ideas to life through clean, efficient code and intuitive design.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              My expertise spans across modern JavaScript frameworks, backend technologies, 
              and cloud platforms. I believe in continuous learning and staying up-to-date 
              with the latest industry trends and best practices.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-foreground mb-2">Frontend</h4>
                <p className="text-muted-foreground">React, TypeScript, Tailwind CSS, Next.js</p>
              </div>
              
              <div className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-foreground mb-2">Backend</h4>
                <p className="text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=700&fit=crop`}
                alt="Working"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
