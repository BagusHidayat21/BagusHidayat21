'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TechStackProps } from '@/types'

const TechStackSection: React.FC<TechStackProps> = ({
  title = "Tech Stack",
  subtitle = "Technologies I work with to bring ideas to life"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always set visibility based on current intersection state
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: <Image src="/icons/react.svg" className="w-12 h-12" width={24} height={24} alt="React Icon" />, color: "text-blue-500" },
        { name: "Next.js", icon: <Image src="/icons/nextjs.svg" className="w-12 h-12 dark-icon" width={24} height={24} alt="Next.js Icon" />, color: "text-gray-800" },
        { name: "JavaScript", icon: <Image src="/icons/javascript.svg" className="w-12 h-12" width={24} height={24} alt="JavaScript Icon" />, color: "text-yellow-500" },
        { name: "TypeScript", icon: <Image src="/icons/typescript.svg" className="w-12 h-12" width={24} height={24} alt="TypeScript Icon" />, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: <Image src="/icons/tailwind.svg" className="w-12 h-12" width={24} height={24} alt="Tailwind CSS Icon" />, color: "text-cyan-500" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: <Image src="/icons/nodejs.svg" className="w-12 h-12" width={24} height={24} alt="Node.js Icon" />, color: "text-green-600" },
        { name: "Express", icon: <Image src="/icons/express.svg" className="w-12 h-12 dark-icon" width={24} height={24} alt="Express Icon" />, color: "text-gray-700" },
        { name: "PHP", icon: <Image src="/icons/php.svg" className="w-12 h-12" width={24} height={24} alt="PHP Icon" />, color: "text-purple-600" },
        { name: "Laravel", icon: <Image src="/icons/laravel.svg" className="w-12 h-12" width={24} height={24} alt="Laravel Icon" />, color: "text-red-500" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "MySQL", icon: <Image src="/icons/mysql.svg" className="w-12 h-12" width={24} height={24} alt="MySQL Icon" />, color: "text-orange-500" },
        { name: "PostgreSQL", icon: <Image src="/icons/postgresql.svg" className="w-12 h-12" width={24} height={24} alt="PostgreSQL Icon" />, color: "text-blue-700" }
      ]
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "Docker", icon: <Image src="/icons/docker.svg" className="w-12 h-12" width={24} height={24} alt="Docker Icon" />, color: "text-blue-500" },
        { name: "Git", icon: <Image src="/icons/git.svg" className="w-12 h-12 dark-icon" width={24} height={24} alt="Git Icon" />, color: "text-gray-700" },
        { name: "Postman", icon: <Image src="/icons/postman.svg" className="w-12 h-12" width={24} height={24} alt="Postman Icon" />, color: "text-orange-600" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="tech-stack" className="py-20 lg:py-20 bg-white dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-6xl mx-auto px-8 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`}>
          <h2 className="text-4xl lg:text-5xl font-light text-black dark:text-white mb-4">
            {title}
          </h2>
          <div className={`w-20 h-0.5 bg-black dark:bg-white mx-auto mb-6 transition-all duration-300 delay-100 ${isVisible ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-20">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-500 ease-out ${isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-16 opacity-0 scale-95'
                }`}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
                transform: isVisible
                  ? 'translateY(0) scale(1)'
                  : `translateY(${16 + categoryIndex * 8}px) scale(0.95)`
              }}
            >
              {/* Category Title */}
              <div className="text-center mb-12">
                <h3 className={`text-2xl font-medium text-black dark:text-white mb-2 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  {category.category}
                </h3>
                <div className={`w-12 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto transition-all duration-300 ${isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100 + 50}ms` }}
                ></div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className={`group flex flex-col items-center space-y-4 p-8 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg transform hover:-translate-y-2 ${isVisible
                      ? 'translate-y-0 opacity-100 scale-100 rotate-0'
                      : 'translate-y-8 opacity-0 scale-90 rotate-1'
                      }`}
                    style={{
                      transitionDelay: `${categoryIndex * 50 + techIndex * 50}ms`,
                      transformOrigin: 'center'
                    }}
                  >
                    {/* Tech Icon */}
                    <div className={`${tech.color} transition-all duration-200 group-hover:scale-110 ${isVisible ? 'scale-100' : 'scale-75'
                      }`}>
                      {tech.icon}
                    </div>

                    {/* Tech Name */}
                    <h4 className={`text-lg font-medium text-black dark:text-white transition-all duration-200 text-center group-hover:text-gray-700 dark:group-hover:text-gray-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 50 + techIndex * 50}ms` }}
                    >
                      {tech.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-500 ease-out ${isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-12 opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="max-w-2xl mx-auto">
            <p className={`text-lg text-gray-600 dark:text-gray-400 mb-8 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              Always learning and exploring new technologies to stay current with industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Always Learning', 'Problem Solver', 'Team Player'].map((badge, index) => (
                <span
                  key={badge}
                  className={`px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200 ${isVisible
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-4 opacity-0 scale-95'
                    }`}
                  style={{
                    transitionDelay: `${300 + index * 50}ms`,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : `translateY(16px) scale(0.95)`
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;