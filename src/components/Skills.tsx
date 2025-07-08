import React from 'react';
import { Code, Database, Globe, Smartphone, Cloud, GitBranch, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Responsive Design', level: 88 }
      ],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Database,
      title: 'Backend',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'REST APIs', level: 80 }
      ],
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQLite', level: 85 },
        { name: 'Firebase', level: 70 },
        { name: 'Database Design', level: 78 }
      ],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: GitBranch,
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'IntelliJ IDEA', level: 85 },
        { name: 'Postman', level: 80 }
      ],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Code,
      title: 'Machine Learning',
      skills: [
        { name: 'Python ML', level: 1 },
        { name: 'TensorFlow', level: 1 },
        { name: 'Scikit-learn', level: 1 },
        { name: 'Data Analysis', level: 1 },
        { name: 'Pandas', level: 1 }
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Other Technologies',
      skills: [
        { name: 'Linux', level: 1 },
        { name: 'Docker', level: 1 },
        { name: 'AWS Basics', level: 1 },
        { name: 'API Development', level: 1 },
        { name: 'Problem Solving', level: 1 }
      ],
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="text-purple-400" size={24} />
            <span className="text-purple-400 font-medium">Skills & Technologies</span>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Technical{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mr-4`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-300 group-hover/skill:text-purple-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400 group-hover/skill:text-purple-400 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-gray-600/30 rounded-full"></div>
                        <div 
                          className={`relative h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;