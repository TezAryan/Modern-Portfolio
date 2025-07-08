import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 text-white py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <h3 className="relative text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tez Aryan
              </h3>
            </div>
            <p className="text-gray-400">
              A passionate Computer Science student creating innovative digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 relative group"
                  >
                    <span className="relative z-10">{link}</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                tezaryan2004@gmail.com
              </p>
              <p className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                +91 8116030786
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-blue-400" />
              <span>by</span>
              <span className="text-purple-400 font-medium">Tez Aryan</span>
              <Sparkles size={16} className="text-pink-400 animate-pulse" />
            </div>
            <p className="text-gray-400">
              © 2024 Tez Aryan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;