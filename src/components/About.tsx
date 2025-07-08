import React from 'react';
import { Code, Palette, Zap, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="text-pink-400" size={24} />
            <span className="text-pink-400 font-medium">About Me</span>
            <Sparkles className="text-pink-400" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a Computer Science student passionate about technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-0 hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <p className="text-lg text-gray-300 mb-4">
                  Currently pursuing my Bachelor's in Computer Science, I'm passionate about web development, 
                  machine learning, and creating innovative solutions. I have hands-on experience with modern 
                  technologies and love building projects that solve real-world problems.
                </p>
                <p className="text-lg text-gray-300">
                  I'm always eager to learn new technologies, work on challenging projects, and collaborate 
                  with others to create impactful digital experiences.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'JavaScript', 'Python', 'Java', 'HTML/CSS', 'Git'].map((tech, index) => (
                <span
                  key={tech}
                  className="group relative px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <span className="relative z-10">{tech}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-start space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${highlight.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {highlight.description}
                    </p>
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

export default About;