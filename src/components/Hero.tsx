'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { HeroProps } from '@/types';

const HeroSection: React.FC<HeroProps> = ({
  name = "Bagus Hidayat",
  title = "Fullstack Developer",
  subtitle = "Crafting Scalable Fullstack Experiences",
  description = "I design and develop robust, scalable fullstack applications using Node.js, Express.js, PostgreSQL, and React. I also develop with Laravel, PHP, and React.",
  location = "Malang, Indonesia",
  ctaText = "View My Work",
  ctaHref = "#projects"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('https://api.github.com/users/BagusHidayat21');
        const data = await response.json();
        setProjects(data.public_repos);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-8 py-20 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Content */}
        <div className={`space-y-12 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <MapPin size={16} />
            <span className="text-sm font-medium tracking-wide">{location}</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-light text-black leading-tight mb-6">
                <Typewriter words={[`Hello, I'm ${name}`]} cursor cursorStyle="|" typeSpeed={100} deleteSpeed={50} delaySpeed={10000} loop />
              </h1>
              <h2 className="text-2xl lg:text-4xl font-light text-gray-700 mb-8">
                {title}
              </h2>
            </div>

            <div className="w-20 h-0.5 bg-black mx-auto"></div>

            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-medium text-black mb-6">
                {subtitle}
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a
              href={ctaHref}
              className="inline-flex items-center space-x-3 px-10 py-5 bg-black text-white text-lg font-medium hover:bg-gray-800 transition-all duration-300 group"
            >
              <span>{ctaText}</span>
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className={`pt-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-center space-x-12 lg:space-x-20">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">{projects}+</div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">PROJECTS</div>
              </div>
              <div className="w-px h-16 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">3+</div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">YEARS EXP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;