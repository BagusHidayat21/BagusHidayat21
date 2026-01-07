import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-6">

          {/* Powered By Section */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Powered by</h3>
            <div className="flex items-center space-x-8">

              {/* Next.js */}
              <div className="flex flex-col items-center space-y-2">
                <Image src="/icons/nextjs.svg" alt="Next.js" width={24} height={24} className="dark-icon" />
                <span className="text-xs text-gray-500 dark:text-gray-400">Next.js</span>
              </div>

              {/* React */}
              <div className="flex flex-col items-center space-y-2">
                <Image src="/icons/react.svg" alt="React" width={24} height={24} />
                <span className="text-xs text-gray-500 dark:text-gray-400">React</span>
              </div>

              {/* Tailwind CSS */}
              <div className="flex flex-col items-center space-y-2">
                <Image src="/icons/tailwind.svg" alt="Tailwind CSS" width={24} height={24} />
                <span className="text-xs text-gray-500 dark:text-gray-400">Tailwind</span>
              </div>

            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Bagus Hidayat for Fortofolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
