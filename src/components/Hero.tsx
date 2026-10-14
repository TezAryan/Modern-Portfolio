import { Github, Linkedin, ArrowDown, FileText, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ───── LEFT: Photo Card ───── */}
          <div className="animate-fade-in-up flex-shrink-0">
            <div
              className="relative w-[280px] sm:w-[320px] rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(13, 14, 18, 0.55)',
                backdropFilter: 'blur(28px) saturate(140%)',
                border: '1px solid rgba(212, 175, 55, 0.12)',
                boxShadow:
                  '0 24px 64px -12px rgba(0, 0, 0, 0.7), 0 0 32px -4px rgba(212, 175, 55, 0.06)',
              }}
            >
              {/* Photo */}
              <div className="relative p-5 pb-0">
                {/* Decorative dashed arc */}
                <svg
                  className="absolute -top-4 -left-4 w-40 h-40 pointer-events-none"
                  viewBox="0 0 160 160"
                  fill="none"
                >
                  <path
                    d="M10 140 C10 60, 60 10, 140 10"
                    stroke="rgba(212, 175, 55, 0.3)"
                    strokeWidth="2.5"
                    strokeDasharray="10 8"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                  <img
                    src="/photo.jpg"
                    alt="Tez Aryan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add(
                        'bg-gradient-to-br',
                        'from-[#1a1a20]',
                        'to-[#0d0e12]'
                      );
                    }}
                  />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 pt-4 text-center">
                <h2 className="font-outfit text-[24px] font-medium tracking-[-0.01em] text-[#F5F5F7] mb-1">
                  Tez Aryan
                </h2>

                {/* Small gold accent icon */}
                <div className="flex justify-center my-3">
                  <div className="w-8 h-8 rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center">
                    <span className="text-gold text-sm">⚡</span>
                  </div>
                </div>

                <p className="font-outfit font-light text-[13px] leading-[20px] text-[#A1A1AA] mb-5">
                  A passionate Computer Science student and aspiring developer
                </p>

                {/* Social icons row */}
                <div className="flex justify-center gap-2.5 pb-1">
                  <a
                    href="https://github.com/TezAryan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#52525B] hover:text-gold hover:border-[rgba(212,175,55,0.3)] transition-all duration-300"
                  >
                    <Github size={16} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tez-aryan-saraf-48131a371"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#52525B] hover:text-champagne hover:border-[rgba(212,175,55,0.3)] transition-all duration-300"
                  >
                    <Linkedin size={16} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://leetcode.com/u/tez_aryan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LeetCode"
                    className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#52525B] hover:text-[#FFA116] hover:border-[rgba(212,175,55,0.3)] transition-all duration-300"
                  >
                    <Code2 size={16} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1rIrgsF1C8wv9g4DCVy_ySX1qlYZ0RKRi/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Resume"
                    className="p-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[#52525B] hover:text-gold hover:border-[rgba(212,175,55,0.3)] transition-all duration-300"
                  >
                    <FileText size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ───── RIGHT: Hero text ───── */}
          <div
            className="flex-1 text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            {/* Kicker label */}
            <div className="mb-6">
              <span className="chip">Creative Developer & Designer</span>
            </div>

            {/* Headline */}
            <h1 className="font-outfit font-light text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.12] tracking-[-0.03em] text-[#F5F5F7] mb-6">
              Hi, I'm{' '}
              <span className="text-gold-light">Tez Aryan</span>
            </h1>

            {/* Sub-headline */}
            <p className="font-outfit font-light text-[15px] sm:text-[17px] leading-[28px] tracking-[-0.005em] text-[#A1A1AA] mb-10 max-w-xl">
              Specializing in{' '}
              <span className="text-champagne font-normal">
                web development, machine learning,
              </span>{' '}
              and creating innovative digital solutions that push the boundaries
              of what's possible.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-14">
              <a
                href="#contact"
                className="btn-champagne px-8 py-3.5 rounded-xl text-[15px]"
              >
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1rIrgsF1C8wv9g4DCVy_ySX1qlYZ0RKRi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-8 py-3.5 rounded-xl text-[15px] font-outfit font-light flex items-center gap-2"
              >
                <FileText size={16} strokeWidth={1.5} />
                View Resume
              </a>
            </div>
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