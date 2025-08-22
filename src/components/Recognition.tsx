import React from 'react';
import { Award, Trophy, BookOpen } from 'lucide-react';

const Recognition: React.FC = () => {
  return (
    <section id="recognition" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Recognitions & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Highlighting my certifications, achievements, and extracurricular activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certifications Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="text-blue-600 dark:text-blue-400 mb-6">
              <Award className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Certifications</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">MCET Certifications</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                  <li>Data Visualization in Python</li>
                  <li>Linux Programming</li>
                  <li>Artificial Intelligence</li>
                  <li>Linguaskills</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Oracle Certification</h4>
                <p className="text-gray-700 dark:text-gray-300">Oracle Fusion Cloud Applications ERP Foundations Certified Associate</p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="text-purple-600 dark:text-purple-400 mb-6">
              <Trophy className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Achievements</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Project Excellence</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  1st Place in project presentation for developing a Wireless audio communication using Li-Fi technology
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Academic Achievement</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  2nd Prize in Paper Presentation Event at Anna University
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Leadership & Engagement</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Received recognition for consistent engagement and leadership in various college events, 
                  demonstrating exceptional teamwork, communication, and problem-solving abilities
                </p>
              </div>
            </div>
          </div>

          {/* Extracurricular Activities Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="text-orange-600 dark:text-orange-400 mb-6">
              <BookOpen className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Extracurricular Activities</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Presentations</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Successfully presented technical papers at multiple inter-college events, showcasing exceptional communication,
                  technical knowledge, and presentation skills
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Development</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Actively participated in various workshops and seminars focused on:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  <li>Data Science</li>
                  <li>Machine Learning</li>
                  <li>Artificial Intelligence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
