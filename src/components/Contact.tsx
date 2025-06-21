import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const GetInTouch: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/BagusHidayat21',
      description: 'Check out my projects and code',
      username: '@BagusHidayat21'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/bagushidayat-id',
      description: 'Connect with me professionally',
      username: '@bagushidayat-id'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:bagus.hidayat.id@gmail.com',
      description: 'Send me a direct message',
      username: 'bagus.hidayat.id@gmail.com'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always update visibility based on current intersection state
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="max-w-4xl mx-auto py-20 px-8 md:px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full transition-all duration-1000 ${
          isVisible ? 'opacity-60 animate-pulse' : 'opacity-0 translate-y-4'
        }`}></div>
        <div className={`absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full transition-all duration-1200 delay-200 ${
          isVisible ? 'opacity-50 animate-bounce' : 'opacity-0 translate-y-4'
        }`}></div>
        <div className={`absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full transition-all duration-1400 delay-400 ${
          isVisible ? 'opacity-40 animate-ping' : 'opacity-0 translate-y-4'
        }`}></div>
        <div className={`absolute bottom-20 right-1/3 w-1 h-1 bg-yellow-400 rounded-full transition-all duration-1600 delay-600 ${
          isVisible ? 'opacity-60 animate-pulse' : 'opacity-0 translate-y-4'
        }`}></div>
      </div>

      <div className="text-center mb-16">
        <h1 className={`text-4xl lg:text-5xl font-light text-black mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Get In Touch
        </h1>
        <div className={`h-0.5 bg-black mx-auto mb-6 transition-all duration-1200 delay-200 ${
          isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
        }`}></div>
        <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind, want to discuss potential partnerships, 
          or just want to say hello, feel free to reach out through any of these platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <div
              key={link.name}
              className={`group relative transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-white border border-gray-200 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:bg-black hover:border-black group hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6 transition-all duration-500 group-hover:bg-white group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-gray-700 transition-all duration-500 group-hover:text-black" />
                  </div>
                  
                  <h3 className="text-2xl font-light text-black mb-3 transition-all duration-500 group-hover:text-white">
                    {link.name}
                  </h3>
                  
                  <p className="text-gray-500 mb-4 text-sm leading-relaxed transition-all duration-500 group-hover:text-gray-200">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-xs font-medium text-gray-400 transition-all duration-500 group-hover:text-gray-300">
                    <span>{link.username}</span>
                    <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <div className={`text-center transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="inline-block bg-white border border-gray-200 p-8 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <h3 className="text-2xl font-light text-black mb-4">Let's Create Something Amazing</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            I'm currently <span className="text-black font-medium">available for freelance work</span> and 
            open to discussing new projects. I typically respond within 24-48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className={`flex items-center space-x-2 transition-all duration-800 delay-1200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <div className={`w-2 h-2 bg-green-500 rounded-full transition-all duration-1000 delay-1400 ${
                isVisible ? 'animate-pulse' : 'scale-0'
              }`}></div>
              <span>Available for work</span>
            </span>
            <span className={`flex items-center space-x-2 transition-all duration-800 delay-1300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <div className={`w-2 h-2 bg-blue-500 rounded-full transition-all duration-1000 delay-1500 ${
                isVisible ? 'animate-pulse' : 'scale-0'
              }`}></div>
              <span>Open to collaborations</span>
            </span>
            <span className={`flex items-center space-x-2 transition-all duration-800 delay-1400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <div className={`w-2 h-2 bg-yellow-500 rounded-full transition-all duration-1000 delay-1600 ${
                isVisible ? 'animate-pulse' : 'scale-0'
              }`}></div>
              <span>Quick response time</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;