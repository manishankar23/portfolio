import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  website?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "FRENZO TECHNOLOGIES",
      position: "Software Development Intern",
      location: "Coimbatore",
      duration: "May 2024 - June 2024",
      startDate: "2024-05-24",
      endDate: "2024-06-04",
      description: "Internship focused on machine learning and software development applications.",
      achievements: [
        "Gained hands-on expertise with advanced machine learning techniques and frameworks",
        "Applied machine learning on real-world projects to improve practical understanding and problem-solving skills",
        "Successfully integrated and evaluated machine learning models to create unique project solutions"
      ],
      technologies: ["Machine Learning", "Python", "SQL","Database"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and key contributions in various roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600 h-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-stretch`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 ml-16 md:ml-0' : 'md:pl-8 ml-16 md:ml-0'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {experience.company}
                          </h4>
                          {experience.website && (
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                              aria-label={`Visit ${experience.company} website`}
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-gray-600 dark:text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certifications
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  University of California, Berkeley • 2014-2018
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  AWS Certified Solutions Architect
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Amazon Web Services • 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;