'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface TopbarProps {
    logo?: string;
    links?: { name: string,  href: string }[];
}

const Topbar: React.FC<TopbarProps> = ({ 
    logo = "Hid.", 
    links = [
      { name: "About", href: "#about" },
      { name: "Tech Stack", href: "#tech-stack" },
      { name: "Projects", href: "#projects" },
    ]
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState<string>("");

    useEffect(() => {
      const handleScroll = () => {
        const sections = links.map(link => {
          const el = document.querySelector(link.href);
          if (!el) return null;
          return {
            name: link.name,
            offsetTop: (el as HTMLElement).offsetTop,
          };
        }).filter(Boolean) as { name: string, offsetTop: number }[];
    
        const scrollPosition = window.scrollY + 100; // 100 for offset
    
        for (let i = sections.length - 1; i >= 0; i--) {
          if (scrollPosition >= sections[i].offsetTop) {
            setActive(sections[i].name);
            break;
          }
        }
      };
    
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    
      return () => window.removeEventListener("scroll", handleScroll);
    }, [links]);
  
    return (
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                {logo}
              </a>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative group px-3 py-2 text-sm font-medium transition-colors
                    ${active === link.name ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all
                    ${active === link.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                ))}
              </div>
            </div>
  
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  };
  
  export default Topbar;
