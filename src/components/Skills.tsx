import { Code, Database, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Responsive Design', level: 88 },
      ],
    },
    {
      icon: Database,
      title: 'Backend',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'REST APIs', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQLite', level: 85 },
        { name: 'Firebase', level: 70 },
        { name: 'Database Design', level: 78 },
      ],
    },
    {
      icon: GitBranch,
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'IntelliJ IDEA', level: 85 },
        { name: 'Postman', level: 80 },
      ],
    },
    {
      icon: Code,
      title: 'Machine Learning',
      skills: [
        { name: 'Python ML', level: 1 },
        { name: 'TensorFlow', level: 1 },
        { name: 'Scikit-learn', level: 1 },
        { name: 'Data Analysis', level: 1 },
        { name: 'Pandas', level: 1 },
      ],
    },
    {
      icon: Globe,
      title: 'Other Technologies',
      skills: [
        { name: 'Linux', level: 1 },
        { name: 'Docker', level: 1 },
        { name: 'AWS Basics', level: 1 },
        { name: 'API Development', level: 1 },
        { name: 'Problem Solving', level: 1 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="chip mb-4 inline-block">Skills & Technologies</span>
          <h2 className="font-outfit font-normal text-[30px] sm:text-[44px] leading-[1.18] tracking-[-0.02em] text-[#F5F5F7] mb-4">
            My Technical{' '}
            <span className="text-champagne">Arsenal</span>
          </h2>
          <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA] max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group glass-surface rounded-2xl p-6 hover:hairline-border-hover transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.15)] group-hover:border-gold transition-colors duration-300">
                  <category.icon
                    size={20}
                    className="text-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-outfit text-[18px] font-medium leading-[26px] text-[#F5F5F7] group-hover:text-champagne transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3.5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-outfit text-[13px] font-normal text-[#A1A1AA] group-hover:text-[#d0c5af] transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="font-jakarta text-[10px] font-semibold tracking-[0.1em] text-[#52525B] group-hover:text-champagne-dim transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-1 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background:
                            'linear-gradient(90deg, #8C733E, #D4AF37)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;