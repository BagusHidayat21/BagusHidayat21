'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  imageUrl?: string;
  resumeUrl?: string;
}

const AboutSection: React.FC<AboutProps> = ({
  title = "About Me",
  subtitle = "Passionate Backend Developer & Problem Solver",
  description = [
    "As a backend developer, I have a passion for building scalable and efficient web applications. During my time at Universitas Negeri Malang, I honed my skills in the PERN stack (PostgreSQL, Express.js, React, and Node.js).",
    "I have a strong foundation in computer science concepts and software engineering principles, which allows me to write clean, readable, and well-documented code.",
    "In my free time, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers in the community."
  ],
  imageUrl = "images/profilepicture.jpg",
  resumeUrl = "https://drive.google.com/uc?export=download&id=1Ch_GqcoLr5REf_rAoqFfH35pqMq5VRix"
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

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/BagusHidayat21')
            .then(response => response.json())
            .then(data => setProjects(data.public_repos))
            .catch(error => console.error(error));
    })

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-20 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Content */}
          <div className={`space-y-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Description */}
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={resumeUrl}
                className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Image & Stats */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Professional Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border border-gray-200"></div>
              <div className="relative z-10 bg-white">
                <img
                  src={imageUrl}
                  alt="About me"
                  className="w-full h-[400px] lg:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-light text-black leading-relaxed mb-8">
              "Code is like humor. When you have to explain it, it's not that good."
            </blockquote>
            <div className="w-16 h-0.5 bg-black mx-auto mb-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;