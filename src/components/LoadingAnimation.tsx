import React, { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Fetching Skills...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 relative">
        {/* Main Logo/Title Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </h1>
            <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-white/10 animate-ping">
              Portfolio
            </div>
          </div>
        </div>

        {/* Rotating Loading Ring */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
          <div 
            className="absolute inset-2 border-4 border-transparent border-r-cyan-400 rounded-full animate-spin"
            style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
          ></div>
          <div 
            className="absolute inset-4 border-4 border-transparent border-b-pink-500 rounded-full animate-spin"
            style={{ animationDuration: '2s' }}
          ></div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          <div className="text-center mt-2 text-purple-300 font-semibold">
            {progress}%
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-xl text-gray-300 animate-fade-in">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>
            💻
          </div>
          <div className="absolute top-1/3 right-1/4 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>
            🚀
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>
            ⚡
          </div>
          <div className="absolute bottom-1/4 right-1/3 text-4xl animate-bounce" style={{ animationDelay: '2s' }}>
            🎨
          </div>
        </div>
      </div>

      {/* Completion Animation */}
      {progress === 100 && (
        <div className="absolute inset-0 bg-white animate-pulse opacity-20"></div>
      )}
    </div>
  );
};

export default LoadingAnimation;