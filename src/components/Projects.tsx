import React from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and secure payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-pink-500 to-rose-500',
      status: 'completed'
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, course enrollment, grades, and academic information with role-based access.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-purple-500 to-indigo-500',
      status: 'completed'
    },
    {
      title: 'Library Management System',
      description: 'A desktop application for managing library operations including book inventory, member management, and lending/return processes.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'Swing', 'MySQL', 'Database Design'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-cyan-500 to-blue-500',
      status: 'completed'
    },
    {
      title: 'Machine Learning Projects',
      description: 'Collection of ML projects including data analysis, predictive modeling, and classification algorithms using Python.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-emerald-500 to-teal-500',
      status: 'ongoing'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience with interactive animations.',
      image: 'https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-orange-500 to-red-500',
      status: 'completed'
    },
    {
      title: 'Web Development Projects',
      description: 'Various web applications including responsive designs, interactive features, and modern UI/UX implementations.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-violet-500 to-purple-500',
      status: 'ongoing'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="text-pink-400" size={24} />
            <span className="text-pink-400 font-medium">Featured Projects</span>
            <Sparkles className="text-pink-400" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Creative{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    {project.status === 'ongoing' ? (
                      <div className="flex items-center space-x-1 bg-orange-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        <Clock size={12} />
                        <span>Ongoing</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1 bg-green-500/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        <CheckCircle size={12} />
                        <span>Completed</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-purple-300 rounded-full text-sm border border-purple-500/30`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-purple-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;