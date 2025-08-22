import React from 'react';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  percentage: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: "Intermediate", percentage: 75 },
        { name: "Java", level: "Intermediate", percentage: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "MySQL", level: "Intermediate", percentage: 80 },
        { name: "Linux", level: "Intermediate", percentage: 75 },
        { name: "Matplotlib", level: "Intermediate", percentage: 75 },
        { name: "Git", level: "Intermediate", percentage: 80 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "Version Control", level: "Intermediate", percentage: 80 },
        { name: "Database Management", level: "Intermediate", percentage: 75 },
        { name: "Data Visualization", level: "Intermediate", percentage: 75 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: "Intermediate", percentage: 65 },
        { name: "Problem-Solving", level: "Intermediate", percentage: 65 },
        { name: "Analytical Thinking", level: "Intermediate", percentage: 70 },
        //{ name: "Root Cause Analysis", level: "Intermediate", percentage: 70 }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'Intermediate':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Beginner':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'NumPy', 'Excel',
              'Power BI', 'Data Mining', 'Statistical Analysis', 'Critical Thinking'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;