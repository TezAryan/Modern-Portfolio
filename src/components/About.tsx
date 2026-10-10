import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="chip mb-4 inline-block">About Me</span>
          <h2 className="font-outfit font-normal text-[30px] sm:text-[44px] leading-[1.18] tracking-[-0.02em] text-[#F5F5F7] mb-4">
            Crafting Digital{' '}
            <span className="text-champagne">Experiences</span>
          </h2>
          <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA] max-w-2xl mx-auto">
            I'm a Computer Science student passionate about technology and
            innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio card */}
          <div className="space-y-8">
            <div className="glass-surface rounded-2xl p-8 hover:hairline-border-hover transition-all duration-500">
              <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA] mb-4">
                Currently pursuing my Bachelor's in Computer Science, I'm
                passionate about web development, machine learning, and creating
                innovative solutions. I have hands-on experience with modern
                technologies and love building projects that solve real-world
                problems.
              </p>
              <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA]">
                I'm always eager to learn new technologies, work on challenging
                projects, and collaborate with others to create impactful
                digital experiences.
              </p>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-3">
              {['React', 'JavaScript', 'Python', 'Java', 'HTML/CSS', 'Git'].map(
                (tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid gap-5">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group glass-surface rounded-xl p-6 hover:hairline-border-hover transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.15)] group-hover:border-gold transition-colors duration-300">
                    <highlight.icon
                      size={20}
                      className="text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-outfit text-[18px] font-medium leading-[26px] text-[#F5F5F7] mb-1 group-hover:text-champagne transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="font-outfit font-light text-[13px] leading-[20px] text-[#A1A1AA] group-hover:text-[#d0c5af] transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;