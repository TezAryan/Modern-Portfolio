import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Bachelor of Computer Science',
      company: 'University (Current Student)',
      location: 'Chennai, India',
      period: '2021 - Present',
      description: [
        'Currently pursuing Bachelor\'s degree in Computer Science and Engineering',
        'Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering',
        'Strong academic performance with focus on practical application of concepts',
        'Active participation in coding competitions and technical workshops'
      ]
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Freelance Projects',
      location: 'Chennai, India',
      period: '2023 - Present',
      description: [
        'Developed complete e-commerce websites with payment integration and user management',
        'Created responsive web applications using modern frameworks and libraries',
        'Implemented database solutions and API integrations for various client projects',
        'Managed project timelines and client communications effectively'
      ]
    },
    {
      title: 'Software Development Projects',
      company: 'Academic & Personal',
      location: 'Chennai, India',
      period: '2022 - Present',
      description: [
        'Built comprehensive management systems using Java and database technologies',
        'Developed machine learning models for data analysis and prediction tasks',
        'Created desktop applications with user-friendly interfaces using Swing',
        'Gained hands-on experience with version control, testing, and deployment'
      ]
    },
    {
      title: 'Technical Skills Development',
      company: 'Self-Learning & Practice',
      location: 'Chennai, India',
      period: '2021 - Present',
      description: [
        'Continuously learning new technologies through online courses and tutorials',
        'Practicing problem-solving through coding challenges and competitive programming',
        'Building personal projects to apply theoretical knowledge in practical scenarios',
        'Staying updated with latest trends in web development and machine learning'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="text-purple-400" size={24} />
            <span className="text-purple-400 font-medium">Work Experience</span>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Professional{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 opacity-50"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
                
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                } ml-16 md:ml-0`}>
                  <div className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 hover:scale-105">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <Calendar size={16} className="text-purple-400 mr-2" />
                        <span className="text-sm font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-400 mb-4">
                        <span className="font-medium text-pink-400">{exp.company}</span>
                        <span className="mx-2 text-purple-400">•</span>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 text-cyan-400" />
                          <span className="text-cyan-400">{exp.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors duration-300">
                            <span className="text-purple-400 mr-2 mt-1">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;