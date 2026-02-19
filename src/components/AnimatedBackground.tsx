import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Stars
    const stars = Array.from({ length: 320 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Shooting stars
    const shootingStars: {
      x: number; y: number; vx: number; vy: number;
      length: number; opacity: number; life: number; maxLife: number;
    }[] = [];

    let tick = 0;

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        vx: 4 + Math.random() * 4,
        vy: 2 + Math.random() * 3,
        length: 80 + Math.random() * 80,
        opacity: 1,
        life: 0,
        maxLife: 60 + Math.random() * 40,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      // Nebula blobs
      const nebulaBlobs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.2, r: 320, color: 'rgba(6,182,212,0.055)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.35, r: 400, color: 'rgba(139,92,246,0.055)' },
        { x: canvas.width * 0.45, y: canvas.height * 0.75, r: 350, color: 'rgba(59,130,246,0.04)' },
        { x: canvas.width * 0.65, y: canvas.height * 0.1, r: 260, color: 'rgba(167,139,250,0.04)' },
      ];
      nebulaBlobs.forEach(blob => {
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        grad.addColorStop(0, blob.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw stars with twinkle
      stars.forEach(star => {
        const tw = 0.5 + 0.5 * Math.sin(tick * star.twinkleSpeed + star.twinkleOffset);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity * tw})`;
        ctx.fill();
      });

      // Spawn shooting stars occasionally
      if (tick % 90 === 0) spawnShootingStar();

      // Draw + update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;
        const progress = s.life / s.maxLife;
        s.opacity = 1 - progress;

        const grad = ctx.createLinearGradient(
          s.x - s.vx * (s.length / s.vx),
          s.y - s.vy * (s.length / s.vx),
          s.x, s.y
        );
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, `rgba(200,220,255,${s.opacity * 0.9})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x - s.vx * 10, s.y - s.vy * 10);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        if (s.life >= s.maxLife) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float-slow bg-gradient-to-br from-cyan-500/40 to-blue-600/10" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl animate-float-medium bg-gradient-to-br from-violet-500/30 to-purple-600/20" />
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] rounded-full opacity-15 blur-3xl animate-float-fast bg-gradient-to-br from-cyan-400/30 to-indigo-500/20" />
        {/* Distant planet */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 180,
            height: 180,
            top: '12%',
            right: '8%',
            background: 'radial-gradient(circle at 35% 35%, rgba(139,92,246,0.7), rgba(30,20,80,0.8))',
            boxShadow: '0 0 60px rgba(139,92,246,0.3)',
          }}
        />
        {/* Another planet */}
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 90,
            height: 90,
            bottom: '20%',
            right: '18%',
            background: 'radial-gradient(circle at 40% 30%, rgba(6,182,212,0.6), rgba(20,10,60,0.8))',
            boxShadow: '0 0 30px rgba(6,182,212,0.25)',
          }}
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
