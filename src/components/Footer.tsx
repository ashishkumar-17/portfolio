import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">Ashish Kumar</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Full-Stack Developer specializing in building exceptional digital experiences 
              with Java, Spring Boot, and React.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-slate-200 text-sm sm:text-base">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-slate-300 hover:text-teal-400 transition-colors duration-200 text-left text-xs sm:text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-slate-200 text-sm sm:text-base">Let's Connect</h4>
            <div className="text-slate-300 text-xs sm:text-sm space-y-2">
              <p>ashishk.bits@gmail.com</p>
              <p>Available for Remote Work</p>
              <p>Open to New Opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center text-slate-300 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mx-1" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-slate-300 text-xs sm:text-sm">
                © 2025 Ashish Kumar. All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-teal-600 hover:bg-teal-700 rounded-full transition-colors duration-200"
                aria-label="Back to top"
              >
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;