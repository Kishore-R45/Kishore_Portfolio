import React, { useEffect, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }> = [];

    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;

    const createParticle = (x: number, y: number) => {
      const speed = Math.random() * 2 + 1;
      const angle = Math.random() * Math.PI * 2;
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 30 + Math.random() * 20,
        size: Math.random() * 3 + 1,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const distance = Math.hypot(mouseX - lastX, mouseY - lastY);
      
      if (distance > 5) {
        createParticle(mouseX, mouseY);
        lastX = mouseX;
        lastY = mouseY;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        particle.vy += 0.1; // gravity

        const progress = particle.life / particle.maxLife;
        const opacity = (1 - progress) * 0.6;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(var(--primary), ${opacity})`;
        ctx.fill();

        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[45] pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default CursorEffect;
