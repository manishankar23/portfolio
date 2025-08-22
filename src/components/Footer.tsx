import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/manishankar23',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/mani-shankar-s',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:manishankar232005@gmail.com',
      label: 'Email'
    }
  ];

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mani Shankar S</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Frontend Developer with a strong foundation in building responsive and user-friendly interfaces.
              Passionate about creating seamless user experiences with modern web technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Pollachi, Tamil Nadu</p>
              <p>manishankar232005@gmail.com</p>
              <p>+91 8637663661</p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              <span>© {currentYear} Mani Shankar S</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button 
                onClick={() => handleQuickLinkClick('#about')}
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleQuickLinkClick('#contact')}
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;