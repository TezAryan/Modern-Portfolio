import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code2,
  FileText,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tezaryan2004@gmail.com',
      href: 'mailto:tezaryan2004@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8116030786',
      href: 'tel:+918116030786',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chennai, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/TezAryan',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tez-aryan-saraf-48131a371',
    },
    {
      icon: Code2,
      name: 'LeetCode',
      href: 'https://leetcode.com/u/tez_aryan/',
    },
    {
      icon: FileText,
      name: 'Resume',
      href: 'https://drive.google.com/file/d/1rIrgsF1C8wv9g4DCVy_ySX1qlYZ0RKRi/view?usp=sharing',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="chip mb-4 inline-block">Get In Touch</span>
          <h2 className="font-outfit font-normal text-[30px] sm:text-[44px] leading-[1.18] tracking-[-0.02em] text-[#F5F5F7] mb-4">
            Let's Create Something{' '}
            <span className="text-champagne">Amazing</span>
          </h2>
          <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA] max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left column */}
          <div className="space-y-6">
            {/* Intro card */}
            <div className="glass-surface rounded-2xl p-8">
              <h3 className="font-outfit text-[22px] font-medium leading-[30px] tracking-[-0.01em] text-[#F5F5F7] mb-3">
                Let's start a conversation
              </h3>
              <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA]">
                Whether you have a question, want to discuss a project, or just
                want to say hi, I'd love to hear from you. Send me a message and
                I'll respond as soon as possible.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 glass-surface rounded-xl p-4 hover:hairline-border-hover transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.15)] group-hover:border-gold transition-colors duration-300">
                    <info.icon
                      size={18}
                      className="text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim">
                      {info.title}
                    </p>
                    <a
                      href={info.href}
                      className="font-outfit font-light text-[15px] text-[#A1A1AA] hover:text-gold transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass-surface rounded-xl p-6">
              <h4 className="font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#52525B] hover:text-gold hover:border-[rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Form */}
          <div className="glass-surface rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgba(13,14,18,0.7)] border border-[rgba(255,255,255,0.1)] rounded-lg font-outfit font-light text-[15px] text-[#F5F5F7] placeholder-[#52525B] focus:border-gold focus:ring-0 focus:shadow-[0_0_0_1px_#D4AF37,0_0_12px_rgba(212,175,55,0.2)] transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgba(13,14,18,0.7)] border border-[rgba(255,255,255,0.1)] rounded-lg font-outfit font-light text-[15px] text-[#F5F5F7] placeholder-[#52525B] focus:border-gold focus:ring-0 focus:shadow-[0_0_0_1px_#D4AF37,0_0_12px_rgba(212,175,55,0.2)] transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[rgba(13,14,18,0.7)] border border-[rgba(255,255,255,0.1)] rounded-lg font-outfit font-light text-[15px] text-[#F5F5F7] placeholder-[#52525B] focus:border-gold focus:ring-0 focus:shadow-[0_0_0_1px_#D4AF37,0_0_12px_rgba(212,175,55,0.2)] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="btn-champagne w-full py-3.5 rounded-xl text-[15px] flex items-center justify-center gap-2"
              >
                <Send size={16} strokeWidth={1.5} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;