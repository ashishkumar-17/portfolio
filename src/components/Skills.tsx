import React from 'react';
import { Coffee, Server, Code, Database, Container, Shield, Share2, Brain } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      coffee: Coffee,
      server: Server,
      code: Code,
      database: Database,
      container: Container,
      shield: Shield,
      'share-2': Share2,
      brain: Brain,
      component: Code
    };
    return icons[iconName as keyof typeof icons] || Code;
  };

  const categories = {
    Frontend: skills.filter(skill => skill.category === 'Frontend'),
    Backend: skills.filter(skill => skill.category === 'Backend'),
    Database: skills.filter(skill => skill.category === 'Database'),
    Tools: skills.filter(skill => skill.category === 'Tools'),
    'AI/ML': skills.filter(skill => skill.category === 'AI/ML')
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {Object.entries(categories).map(([categoryName, categorySkills]) => (
            <div key={categoryName} className="bg-slate-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                {categoryName}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {categorySkills.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <div
                      key={skill.name}
                      className="group bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="p-2 bg-teal-100 rounded-lg mr-3 group-hover:bg-teal-200 transition-colors duration-300">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                        </div>
                        <h4 className="font-semibold text-slate-800 text-sm sm:text-base">{skill.name}</h4>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm text-slate-600">Proficiency</span>
                          <span className="text-xs sm:text-sm font-medium text-slate-700">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 sm:mb-6">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {['Agile Methodologies', 'RESTful APIs', 'Microservices', 'Cloud Platforms', 'CI/CD', 'Test-Driven Development', 'System Design'].map((skill) => (
              <span
                key={skill}
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-slate-700 rounded-full font-medium hover:from-teal-100 hover:to-blue-100 transition-colors duration-300 text-xs sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;