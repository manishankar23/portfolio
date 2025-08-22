import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="text-blue-600 dark:text-blue-400 mb-8">
              <GraduationCap className="w-12 h-12 mx-auto" />
            </div>
            
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Technology in AI&DS</h4>
                <p className="text-gray-700 dark:text-gray-300">Dr. Mahalingam College of Engineering and Technology, Pollachi</p>
                <p className="text-gray-600 dark:text-gray-400">Expected April, 2026 | CGPA: 7.8 (Till 6th sem)</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Higher Secondary (HSC)</h4>
                <p className="text-gray-700 dark:text-gray-300">MSP Solai Nadar Memorial Higher Secondary School, Dindigul</p>
                <p className="text-gray-600 dark:text-gray-400">May, 2022 | Score: 65%</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Secondary School (SSLC)</h4>
                <p className="text-gray-700 dark:text-gray-300">MSP Solai Nadar Memorial Higher Secondary School, Dindigul</p>
                <p className="text-gray-600 dark:text-gray-400">May, 2020 | Score: 56%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
