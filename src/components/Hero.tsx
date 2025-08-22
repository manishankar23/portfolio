import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profile from '../../public/profile.jpg'; // Ensure you have a profile image in the public folder
const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-teal-400 p-1">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Hi I'M <span className="bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">Mani Shankar S</span>
            </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
            Frontend Developer
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Building responsive and user-friendly interfaces with modern web technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[180px]"
            >
              View My Work
            </button>
            <a 
              href="/Manishankar_resume.pdf"
              download
              className="bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[180px] flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/mainshankar23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/manishankar23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:manishankar232005@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;