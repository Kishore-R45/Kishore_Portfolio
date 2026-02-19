import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";

interface Skill {
  name: string;
  icon: string;
}

const allSkills: Skill[] = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Pinecone", icon: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4" },
];

/* ---- evenly distribute N points on a sphere (Fibonacci) ---- */
function fibonacciSphere(count: number) {
  const pts: { x: number; y: number; z: number }[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return pts;
}

const Skills: React.FC = () => {
  /* ---- responsive size ---- */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---- refs for animation-loop values ---- */
  const containerRef = useRef<HTMLDivElement>(null);
  const animId = useRef(0);
  const angleRef = useRef(0);
  const velocityRef = useRef(0.005);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const pausedRef = useRef(false);
  const lastMoveTimeRef = useRef(0);

  /* ---- state ---- */
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [positions, setPositions] = useState<
    { x: number; y: number; z: number; scale: number }[]
  >([]);

  /* ---- constants (responsive) ---- */
  const SIZE = isMobile ? 320 : 520;
  const RADIUS = isMobile ? 128 : 210;
  const PERSPECTIVE = 700;
  const BASE_SPEED = 0.004;
  const DRAG_SENSITIVITY = 0.008;
  const FRICTION = 0.97;
  const MAX_VELOCITY = 0.12;
  const TILT = 0.38; // ~22° Earth-like axial tilt

  const basePoints = useMemo(() => fibonacciSphere(allSkills.length), []);

  /* ---- pointer handlers ---- */
  const handleDown = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    setDragging(true);
    setHoveredIdx(null);
    pausedRef.current = false;
    lastXRef.current = clientX;
    lastMoveTimeRef.current = Date.now();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return;
    const delta = clientX - lastXRef.current;
    lastXRef.current = clientX;
    const v = delta * DRAG_SENSITIVITY;
    velocityRef.current = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, v));
    angleRef.current += velocityRef.current;
    lastMoveTimeRef.current = Date.now();
  }, []);

  const handleUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setDragging(false);
    // reduce momentum if pointer was stationary before release
    if (Date.now() - lastMoveTimeRef.current > 80) {
      velocityRef.current *= 0.15;
    }
  }, []);

  /* ---- attach mouse & touch events ---- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMD = (e: MouseEvent) => {
      e.preventDefault();
      handleDown(e.clientX);
    };
    const onMM = (e: MouseEvent) => handleMove(e.clientX);
    const onMU = () => handleUp();

    const onTS = (e: TouchEvent) => handleDown(e.touches[0].clientX);
    const onTM = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const onTE = () => handleUp();

    el.addEventListener("mousedown", onMD);
    window.addEventListener("mousemove", onMM);
    window.addEventListener("mouseup", onMU);
    el.addEventListener("touchstart", onTS, { passive: true });
    el.addEventListener("touchmove", onTM, { passive: false });
    el.addEventListener("touchend", onTE);

    return () => {
      el.removeEventListener("mousedown", onMD);
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("mouseup", onMU);
      el.removeEventListener("touchstart", onTS);
      el.removeEventListener("touchmove", onTM);
      el.removeEventListener("touchend", onTE);
    };
  }, [handleDown, handleMove, handleUp]);

  /* ---- main animation loop ---- */
  useEffect(() => {
    const cosT = Math.cos(TILT);
    const sinT = Math.sin(TILT);

    const tick = () => {
      // auto-rotate when not dragging & not hovering
      if (!isDraggingRef.current && !pausedRef.current) {
        velocityRef.current *= FRICTION;
        if (Math.abs(velocityRef.current) < BASE_SPEED) {
          velocityRef.current =
            velocityRef.current >= 0 ? BASE_SPEED : -BASE_SPEED;
        }
        angleRef.current += velocityRef.current;
      }

      const cosA = Math.cos(angleRef.current);
      const sinA = Math.sin(angleRef.current);

      const next = basePoints.map((p) => {
        // Y-axis rotation (Earth spin)
        const x1 = p.x * cosA + p.z * sinA;
        const y1 = p.y;
        const z1 = -p.x * sinA + p.z * cosA;
        // X-axis tilt
        const x2 = x1;
        const y2 = y1 * cosT - z1 * sinT;
        const z2 = y1 * sinT + z1 * cosT;
        // perspective
        const fov = PERSPECTIVE / (PERSPECTIVE + z2 * RADIUS);
        return {
          x: SIZE / 2 + x2 * RADIUS * fov,
          y: SIZE / 2 + y2 * RADIUS * fov,
          z: z2,
          scale: fov,
        };
      });

      setPositions(next);
      animId.current = requestAnimationFrame(tick);
    };

    animId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId.current);
  }, [basePoints]);

  /* ---- z-sort for correct layering ---- */
  const sorted = positions.length
    ? [...Array(allSkills.length).keys()].sort(
        (a, b) => positions[a].z - positions[b].z
      )
    : [];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Skills &amp; Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Technologies orbiting my universe — drag to spin, hover to explore.
          </p>
        </div>

        {/* globe */}
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            ref={containerRef}
            className="relative select-none"
            style={{
              width: SIZE,
              height: SIZE,
              cursor: dragging ? "grabbing" : "grab",
            }}
          >
            {/* ambient glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: RADIUS * 2 + 120,
                height: RADIUS * 2 + 120,
                left: SIZE / 2 - RADIUS - 60,
                top: SIZE / 2 - RADIUS - 60,
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.07) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
              }}
            />

            {/* sphere shell */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: RADIUS * 2,
                height: RADIUS * 2,
                left: SIZE / 2 - RADIUS,
                top: SIZE / 2 - RADIUS,
                background:
                  "radial-gradient(circle at 30% 25%, rgba(6,182,212,0.12), rgba(139,92,246,0.06) 40%, rgba(8,6,28,0.4) 75%, rgba(4,2,20,0.55))",
                border: "1px solid rgba(6,182,212,0.20)",
                boxShadow:
                  "0 0 80px rgba(6,182,212,0.08), inset 0 0 100px rgba(139,92,246,0.05)",
              }}
            />

            {/* specular highlight */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: RADIUS * 1.05,
                height: RADIUS * 1.05,
                left: SIZE / 2 - RADIUS * 0.68,
                top: SIZE / 2 - RADIUS * 0.72,
                background:
                  "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08), transparent 55%)",
              }}
            />

            {/* skill icons */}
            {sorted.map((i) => {
              const pos = positions[i];
              const skill = allSkills[i];
              if (!pos) return null;

              const isHovered = hoveredIdx === i;
              const alpha = 0.12 + 0.88 * ((pos.z + 1) / 2);
              const behind = pos.z < -0.15;

              return (
                <div
                  key={skill.name}
                  className="absolute"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transform: `translate(-50%,-50%) scale(${
                      isHovered ? 1.5 : pos.scale
                    })`,
                    zIndex: isHovered ? 200 : Math.round((pos.z + 1) * 50),
                    opacity: isHovered ? 1 : alpha,
                    transition: "transform .2s ease, opacity .2s ease",
                    pointerEvents: behind || dragging ? "none" : "auto",
                    cursor: behind || dragging ? "default" : "pointer",
                  }}
                  onMouseEnter={() => {
                    if (isDraggingRef.current) return;
                    setHoveredIdx(i);
                    pausedRef.current = true;
                  }}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                    pausedRef.current = false;
                  }}
                >
                  {/* icon circle */}
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 50,
                      height: 50,
                      background: isHovered
                        ? "rgba(6,182,212,0.22)"
                        : "rgba(10,8,32,0.85)",
                      border: `1.5px solid ${
                        isHovered
                          ? "rgba(6,182,212,0.9)"
                          : `rgba(139,92,246,${
                              0.1 + 0.3 * ((pos.z + 1) / 2)
                            })`
                      }`,
                      boxShadow: isHovered
                        ? "0 0 24px rgba(6,182,212,0.55), 0 0 48px rgba(139,92,246,0.2)"
                        : `0 2px 12px rgba(0,0,0,${
                            0.25 + 0.4 * ((1 - pos.z) / 2)
                          })`,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      draggable={false}
                      style={{
                        width: 28,
                        height: 28,
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* tooltip */}
                  {isHovered && (
                    <div
                      className="absolute pointer-events-none whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold"
                      style={{
                        bottom: "calc(100% + 12px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background:
                          "linear-gradient(135deg, rgba(6,182,212,0.95), rgba(139,92,246,0.90))",
                        color: "#fff",
                        boxShadow: "0 4px 20px rgba(6,182,212,0.45)",
                        letterSpacing: "0.04em",
                        animation: "tooltipIn .2s ease",
                      }}
                    >
                      {skill.name}
                      <span
                        style={{
                          position: "absolute",
                          bottom: -5,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: 0,
                          borderLeft: "6px solid transparent",
                          borderRight: "6px solid transparent",
                          borderTop: "6px solid rgba(6,182,212,0.95)",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* drag-to-rotate hint */}
            <div
              className="absolute left-1/2 flex items-center gap-2 pointer-events-none"
              style={{
                bottom: 6,
                transform: "translateX(-50%)",
                opacity: dragging ? 0 : 0.5,
                transition: "opacity .3s",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span className="text-gray-500 text-xs tracking-wide">
                drag to rotate
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* tooltip animation keyframe */}
      <style>{`
        @keyframes tooltipIn {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;