import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Strong communication skills for effective teamwork"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm an aspiring AI & Data Science engineer with a strong foundation in programming and data analysis. 
                Currently pursuing my Bachelor's degree, I'm passionate about leveraging technology to solve real-world problems 
                through data-driven solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I focus on continuous learning and staying updated with the latest developments in AI and Data Science. 
                My academic journey has equipped me with both theoretical knowledge and practical skills in machine learning, 
                data visualization, and statistical analysis.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'GraphQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;