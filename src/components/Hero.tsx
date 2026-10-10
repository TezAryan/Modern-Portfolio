import { Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient radial glow from design system */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Kicker label */}
          <div className="mb-8">
            <span className="chip">
              Creative Developer & Designer
            </span>
          </div>

          {/* Hero headline — display-hero weight 300 */}
          <h1 className="font-outfit font-light text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.12] tracking-[-0.03em] text-[#F5F5F7] mb-6">
            Hi, I'm{' '}
            <span className="text-gold-light">Tez Aryan</span>
          </h1>

          {/* Sub-headline — body-lg */}
          <p className="font-outfit font-light text-[15px] sm:text-[17px] leading-[28px] tracking-[-0.005em] text-[#A1A1AA] mb-10 max-w-2xl mx-auto">
            A passionate{' '}
            <span className="text-champagne font-normal">
              Computer Science student and aspiring developer
            </span>{' '}
            specializing in web development, machine learning, and creating
            innovative digital solutions
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14">
            <a href="#contact" className="btn-champagne px-8 py-3.5 rounded-xl text-[15px]">
              Get In Touch
            </a>
            <a
              href="#projects"
              className="btn-ghost px-8 py-3.5 rounded-xl text-[15px] font-outfit font-light"
            >
              View My Work
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#52525B] hover:text-gold transition-all duration-300 hover:scale-110"
            >
              <Github size={22} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#52525B] hover:text-champagne transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ArrowDown size={18} className="text-[#52525B]" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

export default Hero;