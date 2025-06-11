
import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import Manidhar from "../assets/ManidharProfile.jpeg";

const Sidebar = () => {
  const personalInfo = {
    name: "Manidhar Sukasi",
    email: "manidharsukasi@gmail.com",
    phone: "+91 93986 84340",
    birthday: "MAY 05, 2006",
    location: "Hyderabad, India",
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/manidhar2006", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/manidhar-sukasi", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/manidhar_96", label: "Instagram" },
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-card border-r border-border shadow-lg z-50 overflow-y-auto">
      <div className="p-8 space-y-8">
        {/* Profile Image */}
        <div className="text-center">
          <div className="relative mx-auto w-32 h-32 mb-4">
        <img
          src={Manidhar}
          alt="Profile"
          className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
          <p className="text-muted-foreground">Software Developer</p>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
        Contact Info
          </h2>
          
          <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
          <Mail className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Email</p>
            <p className="text-sm font-medium">{personalInfo.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
          <Phone className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Phone</p>
            <p className="text-sm font-medium">{personalInfo.phone}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Birthday</p>
            <p className="text-sm font-medium">{personalInfo.birthday}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-sm font-medium">{personalInfo.location}</p>
          </div>
        </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">
        Social Media
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social, index) => (
          <button
            key={index}
            onClick={() => handleSocialClick(social.url)}
            className="flex items-center space-x-2 p-3 rounded-lg bg-accent/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            title={social.label}
          >
            <social.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{social.label}</span>
          </button>
        ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="pt-4">
          <a 
        href="/src/assets/Manidhar_Portfolio.pdf" 
        download="Manidhar_Portfolio.pdf"
        className="block w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg text-center"
          >
        Download Resume
          </a>
        </div>
      </div>
        </aside>
  );
};

export default Sidebar;
