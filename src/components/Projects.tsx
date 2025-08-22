import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  date: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Transformers Model",
      description: "Implementation of a Transformer-based seq2seq model from scratch using PyTorch.",
      longDescription: "Implemented a Transformer-based seq2seq model from scratch using PyTorch, featuring Multi-Head Attention, Positional Encoding, Encoder-Decoder architecture, and Masked Attention. Trained with Cross-Entropy Loss and Adam optimizer, demonstrating strong grasp of core Transformer mechanisms without relying on pre-built libraries.",
      technologies: ["Python", "PyTorch", "Google Colab", "NumPy", "Math", "GitHub"],
      liveUrl: "https://github.com/manishankar23/Transformers_model",
      githubUrl: "https://github.com/manishankar23/Transformers_model",
      imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025",
      featured: true
    },
    {
      title: "Hospital Healthcare Monitoring System",
      description: "A full-stack hospital appointment system (eDoc) with secure login and role-based access.",
      longDescription: "Developed a full-stack hospital appointment system (eDoc) with secure login and role-based access for Admin, Doctor, and Patient using PHP and MySQL. Implemented real-time booking, session tracking, and patient records with a Bootstrap-based UI, reducing human error and wait times.",
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
      liveUrl: "https://github.com/manishankar23/hospital-management",
      githubUrl: "https://github.com/manishankar23/hospital-management",
      imageUrl: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025",
      featured: true
    },
    {
      title: "Smart Attendance Tracker",
      description: "Automated attendance system with real-time facial recognition and dress code checks.",
      longDescription: "Built a Smart Attendance Tracker using OpenCV, machine learning, and IoT to automate attendance, dress code checks, and punctuality tracking with real-time facial recognition. Stored data in Excel sheets and sent automated email alerts, reducing manual effort and improving accuracy in educational institutions.",
      technologies: ["Python", "OpenCV", "Machine Learning", "IoT"],
      liveUrl: "https://github.com/manishankar23/smart-attendance",
      githubUrl: "https://github.com/manishankar23/smart-attendance",
      imageUrl: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024",
      featured: true
    },
    {
      title: "Wireless Audio Transmitter and Receiver Using Laser",
      description: "Wireless audio transmission system using laser technology for optical communication.",
      longDescription: "Designed and implemented a system for transmitting audio signals wirelessly using laser technology, demonstrating expertise in optical communication. Developed circuits and components for encoding, transmitting, and receiving audio signals with minimal distortion.",
      technologies: ["Hardware", "Circuit Design", "Optical Communication", "Laser Technology"],
      liveUrl: "https://github.com/manishankar23/wireless-audio",
      githubUrl: "https://github.com/manishankar23/wireless-audio",
      imageUrl: "https://images.pexels.com/photos/1539/vintage-technology-music-old.jpg?auto=compress&cs=tinysrgb&w=800",
      date: "2022",
      featured: false
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ project, featured = false }) => (
    <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
            {project.date}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
          {featured && (
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium ml-auto">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {featured ? project.longDescription : project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              <Tag size={12} />
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex-1 justify-center"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors duration-200 flex-1 justify-center"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} featured />
          ))}
        </div>

        {/* Other Projects */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/manishankar23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-semibold transition-colors duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;