import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Database, Globe, Smartphone, Cloud, GitBranch, Cpu, Monitor, Server, Zap } from 'lucide-react';

const Hero = () => {
  const techIcons = [
    { icon: Code, color: 'text-blue-400' },
    { icon: Database, color: 'text-green-400' },
    { icon: Globe, color: 'text-cyan-400' },
    { icon: Smartphone, color: 'text-pink-400' },
    { icon: Cloud, color: 'text-purple-400' },
    { icon: GitBranch, color: 'text-orange-400' },
    { icon: Cpu, color: 'text-red-400' },
    { icon: Monitor, color: 'text-indigo-400' },
    { icon: Server, color: 'text-yellow-400' },
    { icon: Zap, color: 'text-emerald-400' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const techIcon = techIcons[i % techIcons.length];
          const IconComponent = techIcon.icon;
          return (
          <div
            key={i}
            className={`absolute animate-float-particle ${techIcon.color}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-current/20 to-current/10 rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <IconComponent 
                size={Math.random() * 15 + 20} 
                className="relative opacity-40 group-hover:opacity-70 transition-opacity duration-300 drop-shadow-lg" 
              />
            </div>
          </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-pink-400 text-sm font-medium border border-pink-500/30 backdrop-blur-sm animate-glow">
              Welcome to my digital universe ✨
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Tez Aryan
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            A passionate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">
              Computer Science student and aspiring developer
            </span>
            {' '}specializing in web development, machine learning, and creating innovative digital solutions
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <Mail size={20} className="relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </a>
            <a
              href="#projects"
              className="group relative px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
            </a>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <Github size={28} className="relative z-10" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <Linkedin size={28} className="relative z-10" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;