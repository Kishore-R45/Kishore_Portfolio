import React, { useEffect, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLSpanElement[]>([]);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;
    let lastFrame = 0;
    let mousePosition = { x: 0, y: 0 };
    let timeoutID: number;
    let idle = false;

    class Dot {
      index: number;
      anglespeed: number;
      x: number;
      y: number;
      scale: number;
      range: number;
      limit: number;
      element: HTMLSpanElement;
      lockX: number;
      lockY: number;
      angleX: number;
      angleY: number;

      constructor(index = 0) {
        this.index = index;
        this.anglespeed = 0.05;
        this.x = 0;
        this.y = 0;
        this.scale = 1 - 0.05 * index;
        this.range = width / 2 - (width / 2) * this.scale + 2;
        this.limit = width * 0.75 * this.scale;
        this.element = document.createElement('span');
        this.element.style.transform = `scale(${this.scale})`;
        this.lockX = 0;
        this.lockY = 0;
        this.angleX = 0;
        this.angleY = 0;
        cursor?.appendChild(this.element);
        dotsRef.current.push(this.element);
      }

      lock() {
        this.lockX = this.x;
        this.lockY = this.y;
        this.angleX = Math.PI * 2 * Math.random();
        this.angleY = Math.PI * 2 * Math.random();
      }

      draw() {
        if (!idle || this.index <= sineDots) {
          this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
        } else {
          this.angleX += this.anglespeed;
          this.angleY += this.anglespeed;
          this.y = this.lockY + Math.sin(this.angleY) * this.range;
          this.x = this.lockX + Math.sin(this.angleX) * this.range;
          this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
        }
      }
    }

    const dots: Dot[] = [];

    function startIdleTimer() {
      timeoutID = window.setTimeout(goInactive, idleTimeout);
      idle = false;
    }

    function resetIdleTimer() {
      clearTimeout(timeoutID);
      startIdleTimer();
    }

    function goInactive() {
      idle = true;
      for (let dot of dots) {
        dot.lock();
      }
    }

    function buildDots() {
      for (let i = 0; i < amount; i++) {
        let dot = new Dot(i);
        dots.push(dot);
      }
    }

    const onMouseMove = (event: MouseEvent) => {
      mousePosition.x = event.clientX - width / 2;
      mousePosition.y = event.clientY - width / 2;
      resetIdleTimer();
    };

    const onTouchMove = (event: TouchEvent) => {
      mousePosition.x = event.touches[0].clientX - width / 2;
      mousePosition.y = event.touches[0].clientY - width / 2;
      resetIdleTimer();
    };

    const render = (timestamp: number) => {
      const delta = timestamp - lastFrame;
      positionCursor(delta);
      lastFrame = timestamp;
      requestAnimationFrame(render);
    };

    const positionCursor = (delta: number) => {
      let x = mousePosition.x;
      let y = mousePosition.y;
      dots.forEach((dot, index, dots) => {
        let nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw();
        if (!idle || index <= sineDots) {
          const dx = (nextDot.x - dot.x) * 0.35;
          const dy = (nextDot.y - dot.y) * 0.35;
          x += dx;
          y += dy;
        }
      });
    };

    function init() {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
      lastFrame = Date.now();
      buildDots();
      render(lastFrame);
    }

    init();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      clearTimeout(timeoutID);
      dotsRef.current.forEach(dot => dot.remove());
      dotsRef.current = [];
    };
  }, []);

  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div
        ref={cursorRef}
        className="cursor-trail"
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          display: 'block',
          borderRadius: 0,
          transformOrigin: 'center center',
          mixBlendMode: 'difference',
          top: 0,
          left: 0,
          zIndex: 1000,
          filter: 'url(#goo)',
        }}
      />
      <style>{`
        .cursor-trail span {
          position: absolute;
          display: block;
          width: 26px;
          height: 26px;
          border-radius: 20px;
          background-color: hsl(var(--primary));
          transform-origin: center center;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default CursorEffect;
