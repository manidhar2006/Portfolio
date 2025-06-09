
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com/johndoe/task-manager",
      demo: "https://taskmanager-demo.com"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard that aggregates weather data from multiple APIs and presents insights through interactive charts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather-analytics.com"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chatbot application powered by OpenAI API with conversation history and context awareness.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      technologies: ["React", "OpenAI API", "Firebase", "Tailwind"],
      github: "https://github.com/johndoe/ai-chat",
      demo: "https://ai-chat-demo.com"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => handleLinkClick(project.github)}
                    className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                    title="View Code"
                  >
                    <Github className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleLinkClick(project.demo)}
                    className="bg-white text-primary px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
