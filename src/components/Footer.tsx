
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 John Doe. All rights reserved. Built with ♥ and React.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            Designed and developed with modern web technologies • React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
