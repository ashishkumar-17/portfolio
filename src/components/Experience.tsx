import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            My professional journey and key contributions in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className={`absolute left-4 sm:left-6 w-4 h-4 rounded-full border-4 ${
                  experience.current 
                    ? 'bg-teal-600 border-teal-200' 
                    : 'bg-white border-teal-300'
                }`}></div>

                {/* Content Card */}
                <div className="ml-12 sm:ml-16 w-full">
                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 sm:p-6 hover:shadow-md transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-teal-600 font-semibold mb-2">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.duration}
                        {experience.current && (
                          <span className="ml-2 px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs sm:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              I'm actively seeking full-time opportunities where I can contribute to innovative projects 
              and continue growing as a developer. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/ashishkumar1707/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-4 sm:px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                <ExternalLink className="w-4 h-4" />
                View LinkedIn Profile
              </button>

            </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
                className="px-4 sm:px-6"
              >
              <button className="px-4 sm:px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-teal-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                Download Resume
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
