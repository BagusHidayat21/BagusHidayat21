import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Code2, Briefcase, Users, Globe, Award, Calendar, ArrowUpRight } from 'lucide-react';

const ProjectCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "J-TAG (Jenangan Tap Attendance Gateway)",
      role: "Full-Stack Developer",
      description: "Developed a RESTful API for an RFID-based attendance system in collaboration with SMK Negeri 1 Jenangan. Focused on real-time data processing and integration with the school management system.",
      techStack: ["PostgreSQL", "Express.js", "React", "Node.js"],
      category: "Enterprise API",
      link: "https://j-tag.vercel.app",
      githubRepo: "https://github.com/BagusHidayat21/RFID-Absen",
      year: "2024",
      status: "live",
      image: "images/J-Tag.png"
    },
    {
      id: 2,
      title: "CARFY - Car Rental Website",
      role: "Full-Stack Developer",
      description: "Developed a Laravel-based car rental website as the final project for Web Programming course. Implemented key features such as vehicle inventory management, booking system, and payment processing.",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      category: "Web Application",
      githubRepo: "https://github.com/BagusHidayat21/Website-Mobil-Laravel-10",
      year: "2024",
      status: "completed",
      image: "images/Carfy.png"
    },
    {
      id: 3,
      title: "HealMe – Mental Health Platform",
      role: "Full-Stack Developer",
      description: "Developed a mental health consultation platform using Laravel 10 for Wintex IID 2024. Implemented secure user authentication, appointment scheduling, mood tracking, and anonymous support forums.",
      techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      category: "Healthcare Platform",
      githubRepo: "https://github.com/BagusHidayat21/HealMe",
      year: "2024",
      status: "completed",
      image: "images/HealMe.png"
    },
    {
      id: 4,
      title: "Cahaya Dunia Village Library Website",
      role: "Full-Stack Developer",
      description: "Developed a digital library management system for the Ngadimulyo Village Government, including features for book cataloging, member management, and borrowing/returning processes.",
      techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Government System",
      githubRepo: "https://github.com/BagusHidayat21/Perpustaakan-Desa-Ngadimulyo",
      link: "http://perpusdesa-cahayadunia.ngadimulyo-trenggalek.my.id/",
      year: "2024",
      status: "live",
      image: "images/perpusdes.png"
    },
    {
      id: 5,
      title: "UangKita – Financial Planning Web App",
      role: "Full-Stack Developer",
      description: "Developed a financial planning and savings management application with features like goal-based savings trackers, budget planners, and financial projections using Agile development.",
      techStack: ["Laravel", "PHP", "MySQL", "Chart.js", "Bootstrap", "JavaScript"],
      category: "Financial Application",
      githubRepo: "https://github.com/BagusHidayat21/UangKita",
      year: "2024",
      status: "completed",
      image: "images/uangkita.png"
    }
  ];

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'Enterprise API':
        return {
          icon: <Briefcase className="w-4 h-4" />,
          color: 'bg-gray-900 text-white'
        };
      case 'Web Application':
        return {
          icon: <Globe className="w-4 h-4" />,
          color: 'bg-black text-white'
        };
      case 'Healthcare Platform':
        return {
          icon: <Users className="w-4 h-4" />,
          color: 'bg-gray-800 text-white'
        };
      case 'Government System':
        return {
          icon: <Award className="w-4 h-4" />,
          color: 'bg-gray-700 text-white'
        };
      case 'Financial Application':
        return {
          icon: <Code2 className="w-4 h-4" />,
          color: 'bg-gray-900 text-white'
        };
      default:
        return {
          icon: <Code2 className="w-4 h-4" />,
          color: 'bg-gray-900 text-white'
        };
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'live':
        return { text: 'Live', color: 'bg-white text-gray-900 border border-gray-200' };
      case 'completed':
        return { text: 'Completed', color: 'bg-gray-900 text-white' };
      case 'development':
        return { text: 'In Development', color: 'bg-gray-600 text-white' };
      default:
        return { text: 'Unknown', color: 'bg-gray-400 text-white' };
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="max-w-7xl mx-auto py-20 px-8 overflow-hidden bg-white dark:bg-gray-950 transition-colors">
      {/* Header */}
      <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
        }`}>
        <h1 className="text-5xl lg:text-6xl font-extralight text-black dark:text-white mb-6 tracking-tight">
          Featured Projects
        </h1>
        <div className={`w-16 h-px bg-black dark:bg-white mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'
          }`}></div>
        <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-800 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
          A curated selection of projects demonstrating technical excellence
          and innovative solutions across various domains.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const categoryConfig = getCategoryConfig(project.category);
          const statusConfig = getStatusConfig(project.status);
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-700 hover:shadow-2xl overflow-hidden transform hover:-translate-y-1 ${isVisible
                ? 'translate-y-0 opacity-100 scale-100 rotate-0'
                : `${isEven ? 'translate-y-12 -translate-x-8' : 'translate-y-12 translate-x-8'} opacity-0 scale-95 ${isEven ? '-rotate-1' : 'rotate-1'}`
                }`}
              style={{
                transitionDelay: `${600 + index * 150}ms`,
                transformOrigin: 'center'
              }}
            >
              {/* Project Header Image */}
              <div className="h-56 relative overflow-hidden bg-gray-50 dark:bg-gray-800">
                <Image
                  src={`/${project.image}`}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index < 2}
                  className={`object-cover transition-all duration-700 group-hover:scale-105 ${isVisible ? 'scale-100' : 'scale-110'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Status Badge */}
                <div className={`absolute top-6 left-6 transition-all duration-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${700 + index * 150}ms` }}
                >
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig.color} backdrop-blur-sm`}>
                    <span>{statusConfig.text}</span>
                  </div>
                </div>

                {/* Year Badge */}
                <div className={`absolute top-6 right-6 transition-all duration-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${750 + index * 150}ms` }}
                >
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-gray-900 backdrop-blur-sm">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Category */}
                <div className={`mb-6 transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${850 + index * 150}ms` }}
                >
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium ${categoryConfig.color}`}>
                    {categoryConfig.icon}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Title and Role */}
                <div className={`mb-6 transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${900 + index * 150}ms` }}
                >
                  <h3 className="text-2xl font-light text-black dark:text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {project.role}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-light transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${950 + index * 150}ms` }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className={`mb-8 transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 150}ms` }}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 ${isVisible ? 'scale-100' : 'scale-90'
                          }`}
                        style={{ transitionDelay: `${1050 + index * 150 + idx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-medium border border-gray-100 dark:border-gray-700">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`flex items-center space-x-4 transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1100 + index * 150}ms` }}
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 transition-all duration-300 text-sm font-medium group/btn"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More Section */}
      <div className={`text-center mt-20 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <div className="inline-block bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-12 hover:shadow-lg transition-all duration-500">
          <h3 className={`text-2xl font-light text-black dark:text-white mb-4 transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '1500ms' }}
          >
            Explore More Projects
          </h3>
          <p className={`text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto font-light leading-relaxed transition-all duration-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '1600ms' }}
          >
            Discover additional projects and contributions showcasing
            diverse technical implementations and solutions.
          </p>
          <a
            href="https://github.com/BagusHidayat21?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 transition-all duration-300 font-medium ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            style={{ transitionDelay: '1700ms' }}
          >
            <Github className="w-5 h-5 mr-3" />
            View GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;