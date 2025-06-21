import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-6">
          
          {/* Powered By Section */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-gray-600 text-sm font-medium">Powered by</h3>
            <div className="flex items-center space-x-8">
              
              {/* Next.js */}
              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/nextjs.svg" alt="" className="h-6 w-6"/>
                <span className="text-xs text-gray-500">Next.js</span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/react.svg" alt="" className="h-6 w-6" />
                <span className="text-xs text-gray-500">React</span>
              </div>

              {/* Tailwind CSS */}
              <div className="flex flex-col items-center space-y-2">
                <img src="/icons/tailwind.svg" alt="" className="h-6 w-6"/>
                <span className="text-xs text-gray-500">Tailwind</span>
              </div>

            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Bagus Hidayat for Fortofolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
