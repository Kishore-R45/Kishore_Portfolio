import React, { useEffect, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow effect
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[45] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-primary/60 animate-pulse" />
      </div>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[46]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full rounded-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
      </div>
    </>
  );
};

export default CursorEffect;
