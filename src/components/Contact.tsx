import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tezaryan2004@gmail.com',
      href: 'mailto:tezaryan2004@gmail.com',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8116030786',
      href: 'tel:+918116030786',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chennai, India',
      href: '#',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      gradient: 'from-sky-500 to-sky-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="text-pink-400" size={24} />
            <span className="text-pink-400 font-medium">Get In Touch</span>
            <Sparkles className="text-pink-400" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Create Something{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur opacity-50"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let's start a conversation
                </h3>
                <p className="text-gray-300 mb-6">
                  Whether you have a question, want to discuss a project, or just want to say hi, 
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className={`relative p-3 bg-gradient-to-r ${info.gradient} rounded-lg mr-4 shadow-lg`}>
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div className="relative">
                    <p className="text-sm font-medium text-purple-300">{info.title}</p>
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-30"></div>
              <div className="relative">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow me on social media
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300`}></div>
                      <social.icon size={20} className="relative z-10" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                  <Send size={20} className="relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;