import React from 'react';
import { Code, Database, Brain, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend technologies'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Experience with SQL and NoSQL database systems'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Building intelligent applications with AI/ML capabilities'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication and Agile methodology experience'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Passionate about solving real-world problems with elegant, scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-blue-100 p-6 sm:p-8 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}photo.jpg`}
                alt="Professional headshot"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="prose prose-lg text-slate-600">
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                I'm a dedicated full-stack developer with a passion for creating innovative solutions 
                that bridge the gap between complex technical challenges and user-friendly experiences. 
                My journey in software development has been driven by curiosity and a commitment to 
                continuous learning.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                With expertise in <strong className="text-slate-700">Java</strong>, <strong className="text-slate-700">Spring Boot</strong>, 
                and <strong className="text-slate-700">React</strong>, I specialize in building scalable applications 
                that leverage modern technologies including AI and machine learning to solve real-world problems.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="group p-4 rounded-lg bg-slate-50 hover:bg-teal-50 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-3 text-sm sm:text-base">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'React', 'MySQL', 'PostgreSQL', 'Docker', 'AI/ML'].map((tech) => (
                  <span key={tech} className="px-2 sm:px-3 py-1 bg-white text-slate-700 rounded-full text-xs sm:text-sm font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
