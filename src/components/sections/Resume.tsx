
const Resume = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Led development of multiple web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained e-commerce platforms serving 100k+ users. Implemented CI/CD pipelines and reduced deployment time by 60%."
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2019 - 2020",
      description: "Created responsive web interfaces and collaborated with UX/UI designers to deliver pixel-perfect implementations."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      period: "2017 - 2019",
      description: "Specialized in Software Engineering and Machine Learning"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "UC Berkeley",
      period: "2013 - 2017",
      description: "Graduated Magna Cum Laude with focus on Web Technologies"
    }
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "Python/Django", level: 80 },
    { name: "AWS/Cloud", level: 75 },
    { name: "PostgreSQL/MongoDB", level: 85 }
  ];

  return (
    <section id="resume" className="min-h-screen py-20">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Education</h3>
            <div className="space-y-8 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <h3 className="text-2xl font-semibold text-foreground mb-8">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
