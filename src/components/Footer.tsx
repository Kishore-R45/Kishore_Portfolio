
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Footer: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 text-sm">
              © 2024 John Doe. All rights reserved. Built with ♥ and React.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/80 text-sm">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-purple-400" />
                  <span className="text-white/80 text-sm">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs">
            Designed and developed with modern web technologies • React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
