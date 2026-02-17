import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float-slow bg-gradient-to-br from-cyan-500/40 to-blue-600/10" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl animate-float-medium bg-gradient-to-br from-violet-500/30 to-purple-600/20" />
      <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] rounded-full opacity-15 blur-3xl animate-float-fast bg-gradient-to-br from-cyan-400/30 to-indigo-500/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
