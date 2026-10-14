/**
 * Skills section — Centered icon grid with COLORED brand logos.
 *
 * Uses two CDN sources:
 * • Devicon  — for tech with multi-color SVGs
 * • Simple Icons — for mono-color brand marks (with brand hex applied)
 *
 * Items without a CDN icon get a styled text-abbreviation tile.
 */

const DEVICON =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

interface Skill {
  name: string;
  /** Full icon URL (devicon or simpleicons) */
  iconUrl?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const si = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const di = (name: string, variant = 'original') =>
  `${DEVICON}/${name}/${name}-${variant}.svg`;

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', iconUrl: di('cplusplus') },
      { name: 'Python', iconUrl: di('python') },
      { name: 'JavaScript', iconUrl: di('javascript') },
      { name: 'Objective-C', iconUrl: si('apple', 'A8B9CC') },
      { name: 'Linux', iconUrl: di('linux') },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', iconUrl: di('react') },
      { name: 'Next.js', iconUrl: si('nextdotjs', 'E5E5E5') },
      { name: 'Node.js', iconUrl: di('nodejs', 'original') },
      { name: 'Tailwind CSS', iconUrl: si('tailwindcss', '06B6D4') },
      { name: 'REST APIs' },
      { name: 'Prisma', iconUrl: si('prisma', 'E5E5E5') },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Machine Learning' },
      { name: 'NLP' },
      { name: 'TensorFlow', iconUrl: di('tensorflow') },
      { name: 'PyTorch', iconUrl: di('pytorch', 'original') },
      { name: 'Scikit-learn', iconUrl: si('scikitlearn', 'F7931E') },
      { name: 'LLMs' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', iconUrl: di('mysql', 'original') },
      { name: 'MongoDB', iconUrl: di('mongodb', 'original') },
      { name: 'Supabase', iconUrl: si('supabase', '3FCF8E') },
    ],
  },
  {
    title: 'Cloud / DevOps',
    skills: [
      { name: 'AWS', iconUrl: si('amazonaws', 'FF9900') },
      { name: 'Docker', iconUrl: di('docker', 'original') },
      { name: 'Jenkins', iconUrl: di('jenkins', 'original') },
      { name: 'CI/CD' },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', iconUrl: di('git', 'original') },
      { name: 'GitHub', iconUrl: si('github', 'E5E5E5') },
      { name: 'VS Code', iconUrl: di('vscode', 'original') },
      { name: 'Vercel', iconUrl: si('vercel', 'E5E5E5') },
      { name: 'Drizzle ORM' },
      { name: 'Antigravity' },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'GPT-5', iconUrl: si('openai', '10A37F') },
      { name: 'Claude Opus 4', iconUrl: si('anthropic', 'D4A574') },
      { name: 'Cursor AI', iconUrl: si('cursor', 'E5E5E5') },
      { name: 'NotebookLM' },
      { name: 'Google Stitch', iconUrl: si('google', '4285F4') },
      { name: 'v0', iconUrl: si('vercel', 'E5E5E5') },
    ],
  },
];

/** Styled text fallback for skills without a brand icon */
const TextIcon = ({ name }: { name: string }) => {
  const abbr =
    name.length <= 4
      ? name
      : name
          .split(/[\s/]+/)
          .map((w) => w[0])
          .join('')
          .toUpperCase()
          .slice(0, 3);

  return (
    <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center flex-shrink-0">
      <span className="font-jakarta text-[11px] font-bold tracking-wider text-champagne-dim">
        {abbr}
      </span>
    </div>
  );
};

const SkillTile = ({ skill }: { skill: Skill }) => (
  <div className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(212,175,55,0.25)] hover:bg-[rgba(212,175,55,0.04)] transition-all duration-300 min-w-[90px]">
    {skill.iconUrl ? (
      <img
        src={skill.iconUrl}
        alt={skill.name}
        className="w-10 h-10 object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        loading="lazy"
        onError={(e) => {
          // Replace with text fallback on load error
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            const fallback = document.createElement('div');
            fallback.className =
              'w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center';
            const abbr = skill.name
              .split(/[\s/]+/)
              .map((w: string) => w[0])
              .join('')
              .toUpperCase()
              .slice(0, 3);
            fallback.innerHTML = `<span class="font-jakarta text-[11px] font-bold tracking-wider" style="color:#8C733E">${abbr}</span>`;
            parent.insertBefore(fallback, target);
          }
        }}
      />
    ) : (
      <TextIcon name={skill.name} />
    )}
    <span className="font-outfit text-[11px] sm:text-[12px] text-center leading-tight text-[#A1A1AA] group-hover:text-[#d0c5af] transition-colors duration-300 whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="chip mb-4 inline-block">Skills & Technologies</span>
          <h2 className="font-outfit font-normal text-[30px] sm:text-[44px] leading-[1.18] tracking-[-0.02em] text-[#F5F5F7] mb-4">
            My Technical{' '}
            <span className="text-champagne">Arsenal</span>
          </h2>
          <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA] max-w-2xl mx-auto">
            A comprehensive toolkit spanning languages, frameworks, AI, cloud,
            and developer productivity
          </p>
        </div>

        {/* Category blocks — centered */}
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="text-center">
              {/* Category label */}
              <h3 className="font-jakarta text-[10px] font-semibold tracking-[0.14em] uppercase text-champagne-dim mb-5">
                {category.title}
              </h3>

              {/* Centered icon grid */}
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <SkillTile key={skill.name} skill={skill} />
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