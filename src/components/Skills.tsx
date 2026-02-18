import React, { useRef, useEffect, useState } from "react";

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

interface OrbitalIcon {
  skill: Skill;
  orbitTilt: number;
  angle: number;
  speed: number;
}

const Skills: React.FC = () => {
  const animRef = useRef<number>(0);
  const iconsRef = useRef<OrbitalIcon[]>([]);
  const hoveredRef = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [iconPositions, setIconPositions] = useState<{ x: number; y: number; z: number; scale: number }[]>([]);

  // Larger globe dimensions
  const W = 700;
  const H = 500;
  const cx = W / 2;
  const cy = H / 2;
  const rx = 260; // oblate: wider
  const ry = 160; // oblate: shorter (flattened)

  useEffect(() => {
    const orbits: OrbitalIcon[] = allSkills.map((skill, i) => {
      const orbitGroup = i % 4;
      const tiltAngles = [12, 42, 68, 105];
      return {
        skill,
        orbitTilt: tiltAngles[orbitGroup],
        angle: (i / allSkills.length) * Math.PI * 2 + (orbitGroup * Math.PI / 4),
        speed: 0.0025 + (i % 3) * 0.0008,
      };
    });
    iconsRef.current = orbits;

    const animate = () => {
      const updated = iconsRef.current.map((icon, i) => {
        if (hoveredRef.current !== i) {
          icon.angle += icon.speed;
        }
        const tiltRad = (icon.orbitTilt * Math.PI) / 180;
        const ox = Math.cos(icon.angle) * rx;
        const oy = Math.sin(icon.angle) * ry * Math.cos(tiltRad);
        const oz = Math.sin(icon.angle) * Math.sin(tiltRad);
        const x = cx + ox;
        const y = cy + oy;
        const scale = 0.6 + 0.4 * ((oz + 1) / 2);
        return { x, y, z: oz, scale };
      });
      setIconPositions([...updated]);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const sortedIndices = iconPositions.length
    ? [...Array(allSkills.length).keys()].sort(
        (a, b) => (iconPositions[a]?.z ?? 0) - (iconPositions[b]?.z ?? 0)
      )
    : [];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies orbiting my core universe — hover to identify each one.
          </p>
        </div>

        {/* Globe Container */}
        <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <div
            className="relative select-none"
            style={{ width: W, height: H }}
          >
            {/* SVG Globe */}
            <svg
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
              className="absolute inset-0"
              style={{ overflow: "visible" }}
            >
              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.14)" />
                  <stop offset="65%" stopColor="rgba(139,92,246,0.07)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <radialGradient id="globeBody" cx="38%" cy="32%" r="68%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.18)" />
                  <stop offset="45%" stopColor="rgba(20,18,60,0.5)" />
                  <stop offset="100%" stopColor="rgba(8,6,28,0.7)" />
                </radialGradient>
                <radialGradient id="globeShine" cx="32%" cy="26%" r="38%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <filter id="globeGlowFilter">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Soft outer aura */}
              <ellipse cx={cx} cy={cy} rx={rx + 60} ry={ry + 45} fill="url(#globeGlow)" />

              {/* Orbit ring guides */}
              {[12, 42, 68, 105].map((tilt, i) => {
                const tiltRad = (tilt * Math.PI) / 180;
                return (
                  <ellipse
                    key={i}
                    cx={cx}
                    cy={cy}
                    rx={rx}
                    ry={ry * Math.abs(Math.cos(tiltRad))}
                    fill="none"
                    stroke={i % 2 === 0 ? "rgba(6,182,212,0.15)" : "rgba(139,92,246,0.13)"}
                    strokeWidth="1"
                    strokeDasharray="5 7"
                  />
                );
              })}

              {/* Globe body */}
              <ellipse cx={cx} cy={cy} rx={rx - 30} ry={ry - 15} fill="url(#globeBody)" />

              {/* Globe border */}
              <ellipse
                cx={cx}
                cy={cy}
                rx={rx - 30}
                ry={ry - 15}
                fill="none"
                stroke="rgba(6,182,212,0.35)"
                strokeWidth="1.5"
                filter="url(#globeGlowFilter)"
              />

              {/* Shine */}
              <ellipse cx={cx} cy={cy} rx={rx - 30} ry={ry - 15} fill="url(#globeShine)" />

              {/* Equator */}
              <ellipse
                cx={cx}
                cy={cy}
                rx={rx - 30}
                ry={5}
                fill="none"
                stroke="rgba(6,182,212,0.2)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />

              {/* Latitude lines */}
              {[-35, 35].map((lat, i) => (
                <ellipse
                  key={i}
                  cx={cx}
                  cy={cy + (lat / 90) * (ry - 15)}
                  rx={(rx - 30) * Math.cos((lat * Math.PI) / 180)}
                  ry={3.5}
                  fill="none"
                  stroke="rgba(139,92,246,0.14)"
                  strokeWidth="0.8"
                  strokeDasharray="3 6"
                />
              ))}
            </svg>

            {/* Skill icons */}
            {sortedIndices.map((i) => {
              const pos = iconPositions[i];
              const skill = allSkills[i];
              if (!pos) return null;
              const isHovered = hoveredIndex === i;
              const opacity = 0.45 + 0.55 * ((pos.z + 1) / 2);

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : pos.scale})`,
                    zIndex: isHovered ? 100 : Math.round(pos.z * 50 + 50),
                    opacity: isHovered ? 1 : opacity,
                    transition: "transform 0.2s ease, opacity 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => {
                    hoveredRef.current = i;
                    setHoveredIndex(i);
                  }}
                  onMouseLeave={() => {
                    hoveredRef.current = null;
                    setHoveredIndex(null);
                  }}
                >
                  <div
                    className="relative flex items-center justify-center rounded-full"
                    style={{
                      width: 46,
                      height: 46,
                      background: isHovered
                        ? "rgba(6,182,212,0.2)"
                        : "rgba(10,8,32,0.7)",
                      border: `1.5px solid ${isHovered ? "rgba(6,182,212,0.9)" : "rgba(139,92,246,0.35)"}`,
                      boxShadow: isHovered
                        ? "0 0 16px rgba(6,182,212,0.7), 0 0 32px rgba(139,92,246,0.35)"
                        : "0 2px 8px rgba(0,0,0,0.5)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      style={{ width: 26, height: 26, objectFit: "contain" }}
                    />

                    {/* Tooltip */}
                    {isHovered && (
                      <div
                        className="absolute pointer-events-none whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium"
                        style={{
                          bottom: "calc(100% + 8px)",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "rgba(6,182,212,0.95)",
                          color: "#fff",
                          boxShadow: "0 0 12px rgba(6,182,212,0.5)",
                          letterSpacing: "0.03em",
                        }}
                      >
                        {skill.name}
                        <div
                          className="absolute left-1/2"
                          style={{
                            bottom: -5,
                            transform: "translateX(-50%)",
                            width: 0,
                            height: 0,
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "6px solid rgba(6,182,212,0.95)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
