
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-8 bg-card/80 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Kishore R. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <div className="flex items-center space-x-1">
              <svg 
                className="w-4 h-4 text-cyan-400 animate-spin" 
                viewBox="-11.5 -10.23174 23 20.46348"
                style={{ animationDuration: '3s' }}
              >
                <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              <span className="font-medium text-cyan-400">React</span>
            </div>
            <span>•</span>
            <span className="font-medium text-violet-400">TypeScript</span>
            <span>•</span>
            <span className="font-medium text-teal-400">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
