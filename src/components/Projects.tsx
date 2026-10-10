import { ExternalLink, Github, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Tutorite',
      description:
        'Developed a student-teacher interaction and study platform with video calling, live class sessions, and academic content management.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: [],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'completed',
    },
    {
      title: 'Job Seeker Website',
      description:
        'Created a web app for students to find jobs and internships with dual user modes (Student & Recruiter) and dynamic opportunity listings.',
      image:
        'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: [],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'completed',
    },
    {
      title: 'AI Finance App',
      description:
        'Building a smart finance app that uses AI models for spending analysis, budgeting suggestions, and personalized financial planning.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: [],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'ongoing',
    },
    {
      title: 'Hospital Dashboard — Niramaya',
      description:
        'Built a fully responsive hospital management dashboard during internship using React.js, Tailwind CSS, and API integration for real-time data.',
      image:
        'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: [],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'ongoing',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my projects, skills, and experience with interactive animations.',
      image:
        'https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'completed',
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="chip mb-4 inline-block">Featured Projects</span>
          <h2 className="font-outfit font-normal text-[30px] sm:text-[44px] leading-[1.18] tracking-[-0.02em] text-[#F5F5F7] mb-4">
            My Creative{' '}
            <span className="text-champagne">Portfolio</span>
          </h2>
          <p className="font-outfit font-light text-[15px] leading-[24px] text-[#A1A1AA] max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-surface rounded-2xl overflow-hidden hover:hairline-border-hover transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] brightness-[0.7] group-hover:brightness-[0.85]"
                />
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  {project.status === 'ongoing' ? (
                    <div className="flex items-center gap-1 bg-[rgba(212,175,55,0.85)] backdrop-blur-sm text-obsidian px-2.5 py-1 rounded-full">
                      <Clock size={11} strokeWidth={2} />
                      <span className="font-jakarta text-[10px] font-semibold tracking-[0.05em] uppercase">
                        Ongoing
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 bg-[rgba(140,115,62,0.85)] backdrop-blur-sm text-[#F5F5F7] px-2.5 py-1 rounded-full">
                      <CheckCircle size={11} strokeWidth={2} />
                      <span className="font-jakarta text-[10px] font-semibold tracking-[0.05em] uppercase">
                        Completed
                      </span>
                    </div>
                  )}
                </div>
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-obsidian/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[rgba(255,255,255,0.08)] backdrop-blur-sm rounded-xl text-[#F5F5F7] hover:bg-[rgba(212,175,55,0.15)] hover:text-gold transition-all duration-300 hover:scale-110"
                  >
                    <Github size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[rgba(255,255,255,0.08)] backdrop-blur-sm rounded-xl text-[#F5F5F7] hover:bg-[rgba(212,175,55,0.15)] hover:text-gold transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-outfit text-[18px] font-medium leading-[26px] text-[#F5F5F7] mb-2 group-hover:text-champagne transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-outfit font-light text-[13px] leading-[20px] text-[#A1A1AA] mb-4 group-hover:text-[#d0c5af] transition-colors duration-300">
                  {project.description}
                </p>
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="chip !text-[9px] !py-1 !px-2.5">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center text-champagne-dim hover:text-gold transition-colors duration-300 cursor-pointer group/link">
                  <span className="font-jakarta text-[13px] font-medium tracking-[0.02em]">
                    View Project
                  </span>
                  <ArrowRight
                    size={14}
                    className="ml-1.5 group-hover/link:translate-x-1 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;