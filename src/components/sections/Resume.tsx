
const Resume = () => {
  const experiences = [
    {
      title: "Undergraduate Researcher",
      company: "SERC Lab, IIIT Hyderabad",
      period: "Jun 2025 - Present",
      description: "Conducting research on user-centered design and usability testing for IoT applications."
    },
    {
      title: "Full Stack Developer",
      company: "ICanCare",
      period: "Jan 2025 - May 2025",
      description: "Developed a full-stack web application using React amd Node.js, for ICanCare, a healthcare startup. Implemented features for Volunterer Activity Management With a Approval Workflow"
    },
  ];

  const education = [
    {
      degree: "BTech in Computer Science",
      school: "International Institute of Information Technology, Hyderabad",
      period: "2023 - present",
    },
    {
      degree: "Higher Secondary Education",
      school: "Sri Chaitanya Junior Kalasala(Pratibha Bhavan), Hyderabad",
      period: "2021 - 2023",
    },
  ];

  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "React Native" },
    { name: "Node.js" },
    { name: "Flask" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "PostgreSQL" }
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
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <h3 className="text-2xl font-semibold text-foreground mb-8">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-card text-foreground px-4 py-2 rounded-md border border-border hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
