'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TechStackProps {
  title?: string;
  subtitle?: string;
}

const TechStackSection: React.FC<TechStackProps> = ({
  title = "Tech Stack",
  subtitle = "Technologies I work with to bring ideas to life"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Custom SVG Icons
  const ReactIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" fill="none" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
    </svg>
  );

  const NextIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
    </svg>
  );

  const JSIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">JS</text>
    </svg>
  );

  const TSIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">TS</text>
    </svg>
  );

  const NodeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z" fill="currentColor"/>
    </svg>
  );

  const ExpressIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <text x="12" y="14" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">EX</text>
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );

  const PHPIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <ellipse cx="12" cy="12" rx="10" ry="6" fill="currentColor"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PHP</text>
    </svg>
  );

  const LaravelIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );

  const MySQLIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect x="2" y="8" width="20" height="8" rx="2" fill="currentColor"/>
      <text x="12" y="13" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">MySQL</text>
    </svg>
  );

  const PostgreIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">PG</text>
    </svg>
  );

  const DockerIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <rect x="2" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="6" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="10" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="14" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="18" y="6" width="3" height="3" fill="currentColor"/>
      <rect x="6" y="10" width="3" height="3" fill="currentColor"/>
      <rect x="10" y="10" width="3" height="3" fill="currentColor"/>
      <rect x="14" y="10" width="3" height="3" fill="currentColor"/>
      <rect x="10" y="14" width="3" height="3" fill="currentColor"/>
    </svg>
  );

  const GitIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" fill="currentColor"/>
    </svg>
  );

  const PostmanIcon = () => (
    <svg viewBox="0 0 24 24" className="w-12 h-12">
      <circle cx="12" cy="12" r="10" fill="currentColor"/>
      <text x="12" y="15" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">POST</text>
    </svg>
  );

  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: <ReactIcon />, color: "text-blue-500" },
        { name: "Next.js", icon: <NextIcon />, color: "text-gray-800" },
        { name: "JavaScript", icon: <JSIcon />, color: "text-yellow-500" },
        { name: "TypeScript", icon: <TSIcon />, color: "text-blue-600" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: <NodeIcon />, color: "text-green-600" },
        { name: "Express", icon: <ExpressIcon />, color: "text-gray-700" },
        { name: "PHP", icon: <PHPIcon />, color: "text-purple-600" },
        { name: "Laravel", icon: <LaravelIcon />, color: "text-red-500" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "MySQL", icon: <MySQLIcon />, color: "text-orange-500" },
        { name: "PostgreSQL", icon: <PostgreIcon />, color: "text-blue-700" }
      ]
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "Docker", icon: <DockerIcon />, color: "text-blue-500" },
        { name: "Git", icon: <GitIcon />, color: "text-gray-700" },
        { name: "Postman", icon: <PostmanIcon />, color: "text-orange-600" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="tech-stack" className="py-20 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-4">
            {title}
          </h2>
          <div className="w-20 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className={`transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Title */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-medium text-black mb-2">
                  {category.category}
                </h3>
                <div className="w-12 h-0.5 bg-gray-400 mx-auto"></div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="group flex flex-col items-center space-y-4 p-8 bg-white hover:bg-blue-200 transition-all duration-300 border border-gray-100"
                  >
                    {/* Tech Icon */}
                    <div className={`${tech.color} transition-colors duration-300`}>
                      {tech.icon}
                    </div>
                    
                    {/* Tech Name */}
                    <h4 className="text-lg font-medium text-black transition-colors duration-300 text-center">
                      {tech.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Always learning and exploring new technologies to stay current with industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
                Always Learning
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
                Team Player
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;