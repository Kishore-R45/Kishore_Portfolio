import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Show name after a brief delay
    const nameTimer = setTimeout(() => setShowName(true), 200);

    // Start fade out and complete
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const completeTimer = setTimeout(() => onComplete(), 2300);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(nameTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Code brackets animation */}
      <div className="relative flex items-center gap-2 mb-8">
        <span 
          className={`text-5xl md:text-7xl font-mono text-violet-500 transition-all duration-500 ${
            showName ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          {'<'}
        </span>
        
        <div className="overflow-hidden">
          <span 
            className={`text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 bg-clip-text text-transparent inline-block transition-all duration-700 ${
              showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Kishore
          </span>
        </div>
        
        <span 
          className={`text-5xl md:text-7xl font-mono text-violet-500 transition-all duration-500 ${
            showName ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {'/>'}
        </span>
      </div>

      {/* Loading bar */}
      <div className="w-48 md:w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <p className={`mt-4 text-sm text-muted-foreground font-mono transition-opacity duration-300 ${
        showName ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="inline-block animate-pulse">Loading portfolio</span>
        <span className="inline-flex w-8">
          <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
        </span>
      </p>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-violet-500/20"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '-10px',
              animation: `float-particle ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
