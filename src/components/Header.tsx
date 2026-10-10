import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-overlay'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <a href="#home" className="group relative">
            <span className="font-outfit text-xl font-light tracking-tight text-[#F5F5F7] group-hover:text-gold transition-colors duration-300">
              Tez<span className="text-gold font-normal">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-jakarta text-[13px] font-medium tracking-[0.02em] text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="btn-champagne px-5 py-2 rounded-lg text-[13px] tracking-[0.02em]"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#A1A1AA] hover:text-gold transition-colors duration-300"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 animate-slide-down">
            <div className="flex flex-col gap-1 glass-surface rounded-xl p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-jakarta text-sm text-[#A1A1AA] hover:text-gold transition-colors duration-300 py-2.5 px-3 rounded-lg hover:bg-[rgba(212,175,55,0.06)]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-champagne mt-2 px-5 py-2.5 rounded-lg text-sm text-center"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;