import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Bachelor of Computer Science",
      company: 'SRM University',
      location: 'Chennai, India',
      period: '2023 - 2027',
      description: [
        "Currently pursuing Bachelor's degree in Computer Science and Engineering",
        'Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering',
        'Strong academic performance with focus on practical application of concepts',
        'Active participation in coding competitions and technical workshops',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'At Niramaya',
      location: 'Chennai, India',
      period: '2025 - Present',
      description: [
        'Worked on the Hospital Dashboard project to streamline medical data access and improve UI/UX.',
        'Developed responsive frontend components using React.js, integrating patient data visualization and analytics.',
        'Collaborated with the backend team to ensure seamless API integration and real-time updates',
      ],
    },
    {
      title: 'Technical Team Member',
      company: 'at NWC association',
      location: 'Chennai, India',
      period: '2024 - Present',
      description: [
        'Contributed to the development and design of technical projects and college-level events.',
        'Assisted in building and managing the front-end of club websites and portals',
        'Supported workshops and tech sessions focused on web development and programming tools',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="chip mb-4 inline-block">Experience</span>
          <h2 className="font-outfit font-normal text-[30px] sm:text-[44px] leading-[1.18] tracking-[-0.02em] text-[#F5F5F7] mb-4">
            My Professional{' '}
            <span className="text-champagne">Journey</span>
          </h2>
          <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA] max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold via-champagne-dim to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.4)] z-10" />

                {/* Content card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                  } ml-12 md:ml-0`}
                >
                  <div className="group glass-surface rounded-xl p-6 hover:hairline-border-hover transition-all duration-500">
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar
                        size={13}
                        className="text-gold"
                        strokeWidth={1.5}
                      />
                      <span className="chip !py-0.5 !px-2 !text-[10px]">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-outfit text-[18px] font-medium leading-[26px] text-[#F5F5F7] mb-1 group-hover:text-champagne transition-colors duration-300">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-[13px] mb-4">
                      <span className="font-outfit font-normal text-champagne-dim">
                        {exp.company}
                      </span>
                      <span className="text-[#52525B]">·</span>
                      <div className="flex items-center gap-1">
                        <MapPin
                          size={12}
                          className="text-[#52525B]"
                          strokeWidth={1.5}
                        />
                        <span className="font-outfit font-light text-[#52525B]">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 font-outfit font-light text-[13px] leading-[20px] text-[#A1A1AA] group-hover:text-[#d0c5af] transition-colors duration-300"
                        >
                          <span className="text-gold mt-0.5 text-[10px]">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default Experience;