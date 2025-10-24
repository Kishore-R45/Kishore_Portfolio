import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-float-slow bg-gradient-to-br from-primary/40 to-primary/10" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl animate-float-medium bg-gradient-to-br from-accent/30 to-cyan-500/20" />
      <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] rounded-full opacity-20 blur-3xl animate-float-fast bg-gradient-to-br from-primary/30 to-purple-500/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
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
