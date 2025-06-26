import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl sm:text-4xl font-bold text-white">AK</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight px-4">
            Full-Stack Developer &{' '}
            <span className="text-teal-600">AI Enthusiast</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Building scalable, user-focused solutions with{' '}
            <span className="font-semibold text-slate-700">Java</span>,{' '}
            <span className="font-semibold text-slate-700">Spring Boot</span>, and{' '}
            <span className="font-semibold text-slate-700">React</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <button
              onClick={() => onNavigate('projects')}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-4 sm:px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-teal-600 hover:text-teal-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </button>
              
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
                className="w-full sm:w-auto"
              >
              <button className="w-full sm:w-auto px-4 sm:px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-teal-600 hover:text-teal-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed positioning */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
