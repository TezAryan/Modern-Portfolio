import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Colorful Animated Logo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-1 group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                <item.icon size={16} className="relative z-10 group-hover:text-pink-400 transition-colors duration-300" />
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-pink-400 transition-colors relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
            {isMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-2 bg-gray-800/50 backdrop-blur-xl rounded-lg p-4 border border-purple-500/20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center space-x-2 py-2 px-3 rounded-lg hover:bg-purple-500/10"
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;