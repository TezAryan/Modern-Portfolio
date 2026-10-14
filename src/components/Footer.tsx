import { Heart, Code, Github, Linkedin, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(212,175,55,0.1)]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-outfit text-xl font-light text-[#F5F5F7]">
              Tez<span className="text-gold font-normal">.</span>
            </h3>
            <p className="font-outfit font-light text-[13px] leading-[20px] text-[#52525B]">
              A passionate Computer Science student creating innovative digital
              solutions.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5 pt-2">
              <a
                href="https://github.com/TezAryan"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[#52525B] hover:text-gold hover:border-[rgba(212,175,55,0.25)] transition-all duration-300"
              >
                <Github size={15} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/tez-aryan-saraf-48131a371"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[#52525B] hover:text-champagne hover:border-[rgba(212,175,55,0.25)] transition-all duration-300"
              >
                <Linkedin size={15} strokeWidth={1.5} />
              </a>
              <a
                href="https://leetcode.com/u/tez_aryan/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[#52525B] hover:text-[#FFA116] hover:border-[rgba(212,175,55,0.25)] transition-all duration-300"
              >
                <Code2 size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-outfit font-light text-[13px] text-[#52525B] hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:tezaryan2004@gmail.com"
                className="block font-outfit font-light text-[13px] text-[#52525B] hover:text-gold transition-colors duration-300"
              >
                tezaryan2004@gmail.com
              </a>
              <a
                href="tel:+918116030786"
                className="block font-outfit font-light text-[13px] text-[#52525B] hover:text-gold transition-colors duration-300"
              >
                +91 8116030786
              </a>
              <a
                href="https://drive.google.com/file/d/1rIrgsF1C8wv9g4DCVy_ySX1qlYZ0RKRi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-outfit font-light text-[13px] text-[#52525B] hover:text-gold transition-colors duration-300"
              >
                View Resume ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.04)] mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 font-outfit font-light text-[13px] text-[#52525B]">
              <span>Made with</span>
              <Heart size={13} className="text-gold" strokeWidth={1.5} />
              <span>and</span>
              <Code
                size={13}
                className="text-champagne-dim"
                strokeWidth={1.5}
              />
              <span>by</span>
              <span className="text-champagne-dim font-normal">Tez Aryan</span>
            </div>
            <p className="font-outfit font-light text-[13px] text-[#52525B]">
              © 2024 Tez Aryan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;