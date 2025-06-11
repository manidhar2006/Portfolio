import { Github } from 'lucide-react';
import { useState } from 'react';


import NFSImg from '@/assets/NFS.jpeg';
import CShell from '@/assets/CShell.png';
import Image2Video from '@/assets/ImageToVideo.png';
import ECommerce from '@/assets/ECommerce.jpg';
import IPL from '@/assets/IPL.png';

const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWVlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjOTk5OTk5Ij5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';

const Projects = () => {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce Buy and Sell for IIIH Students built with Next.js, Node.js, and MongoDB. Features include user authentication, OTP based Delivery and Profile Section to see transactions.",
      image: ECommerce,
      technologies: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/manidhar2006/IIIT-BUY-SELL",
    },
    {
      title: "Network File System",
      description: "Implemented distributed file system with clients, naming servers, storage servers, and essential file operations",
      image: NFSImg,
      technologies: ["C","Distributed Systems"],
      github: "https://github.com/manidhar2006/NFS-Network_Files_System",
    },
    {
      title: "Video Generator Platform",
      description: "Built interactive web application for automated video generation from images with customizable audio and transitions",
      image: Image2Video,
      technologies: ["HTML", "CSS", "JavaScript", "Flask","MySQL"],
      github: "https://github.com/manidhar2006/ImageToVideoConverter",
    },
    {
      title: "IPL Database Management CLI",
      description: "Built MySQL database for IPL data with Python interface for efficient record management and query performance",
      image: IPL,
      technologies: ["Python", "MySQL","pymysql"],
      github: "https://github.com/manidhar2006/IPL-DATABASE_CLI",
    },
    {
      title: "C-Shell",
      description: "Built custom shell using C with system calls, processes, I/O redirection and piping functionality",
      image: CShell,
      technologies: ["C", "Operating Systems","Network Programming"],
      github: "https://github.com/manidhar2006/CShell",
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({...prev, [index]: true}));
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
              <div className="relative overflow-hidden h-64">
                <img
                  src={imageError[index] ? fallbackImage : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={() => handleImageError(index)}
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => handleLinkClick(project.github)}
                    className="bg-white text-primary p-3 rounded-full hover:bg-gray-100 transition-colors"
                    title="View Code"
                  >
                    <Github className="w-6 h-6" />
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
