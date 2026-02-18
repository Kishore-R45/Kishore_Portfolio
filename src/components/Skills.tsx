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
  orbitRadius: number;
  orbitTilt: number; // degrees - tilt of orbit plane
  angle: number;     // current angle
  speed: number;     // radians per frame
  size: number;
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const iconsRef = useRef<OrbitalIcon[]>([]);
  const hoveredRef = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [iconPositions, setIconPositions] = useState<{ x: number; y: number; z: number; scale: number }[]>([]);

  // Globe dimensions
  const W = 520;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;
  const rx = 160; // oblate: wider
  const ry = 110; // oblate: shorter (flattened)

  useEffect(() => {
    // Distribute skills across multiple orbits
    const orbits: OrbitalIcon[] = allSkills.map((skill, i) => {
      const totalSkills = allSkills.length;
      // Spread orbits tilts evenly
      const orbitGroup = i % 4;
      const tiltAngles = [15, 45, 70, 110]; // different orbital planes
      return {
        skill,
        orbitRadius: 1, // fraction of rx/ry used in ellipse
        orbitTilt: tiltAngles[orbitGroup],
        angle: (i / totalSkills) * Math.PI * 2 + (orbitGroup * Math.PI / 4),
        speed: 0.003 + (i % 3) * 0.001,
        size: 36,
      };
    });
    iconsRef.current = orbits;

    const animate = () => {
      const updated = iconsRef.current.map((icon, i) => {
        if (hoveredRef.current !== i) {
          icon.angle += icon.speed;
        }
        // Project 3D orbit onto 2D
        const tiltRad = (icon.orbitTilt * Math.PI) / 180;
        // x on orbit plane
        const ox = Math.cos(icon.angle) * rx;
        // y on orbit plane (compressed by tilt)
        const oy = Math.sin(icon.angle) * ry * Math.cos(tiltRad);
        // z for depth
        const oz = Math.sin(icon.angle) * Math.sin(tiltRad);

        const x = cx + ox;
        const y = cy + oy;
        const z = oz; // -1 to 1
        const scale = 0.55 + 0.45 * ((z + 1) / 2);
        return { x, y, z, scale };
      });
      setIconPositions([...updated]);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Sort by z so back icons render behind front icons
  const sortedIndices = iconPositions.length
    ? [...Array(allSkills.length).keys()].sort(
        (a, b) => (iconPositions[a]?.z ?? 0) - (iconPositions[b]?.z ?? 0)
      )
    : [];

  return (
    <section id="skills" className="py-20 relative bg-secondary/30 overflow-hidden">
      {/* Space dust background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies orbiting my core universe — hover to identify each one.
          </p>
        </div>

        {/* Globe Container */}
        <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <div
            ref={containerRef}
            className="relative select-none"
            style={{ width: W, height: H }}
          >
            {/* Globe SVG */}
            <svg
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
              className="absolute inset-0"
              style={{ overflow: "visible" }}
            >
              {/* Outer glow */}
              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.18)" />
                  <stop offset="60%" stopColor="rgba(139,92,246,0.09)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <radialGradient id="globeBody" cx="38%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.22)" />
                  <stop offset="40%" stopColor="rgba(30,27,75,0.55)" />
                  <stop offset="100%" stopColor="rgba(15,10,40,0.72)" />
                </radialGradient>
                <radialGradient id="globeShine" cx="35%" cy="28%" r="40%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.13)" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer aura */}
              <ellipse cx={cx} cy={cy} rx={rx + 55} ry={ry + 38} fill="url(#globeGlow)" />

              {/* Orbit rings (visual guides) */}
              {[15, 45, 70, 110].map((tilt, i) => {
                const tiltRad = (tilt * Math.PI) / 180;
                return (
                  <ellipse
                    key={i}
                    cx={cx}
                    cy={cy}
                    rx={rx}
                    ry={ry * Math.abs(Math.cos(tiltRad))}
                    fill="none"
                    stroke={i % 2 === 0 ? "rgba(6,182,212,0.18)" : "rgba(139,92,246,0.15)"}
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                );
              })}

              {/* Globe body */}
              <ellipse cx={cx} cy={cy} rx={rx - 20} ry={ry - 10} fill="url(#globeBody)" />

              {/* Globe border */}
              <ellipse
                cx={cx}
                cy={cy}
                rx={rx - 20}
                ry={ry - 10}
                fill="none"
                stroke="rgba(6,182,212,0.45)"
                strokeWidth="1.5"
                filter="url(#glow)"
              />

              {/* Shine highlight */}
              <ellipse cx={cx} cy={cy} rx={rx - 20} ry={ry - 10} fill="url(#globeShine)" />

              {/* Equator line */}
              <ellipse
                cx={cx}
                cy={cy}
                rx={rx - 20}
                ry={4}
                fill="none"
                stroke="rgba(6,182,212,0.25)"
                strokeWidth="1"
                strokeDasharray="3 5"
              />

              {/* Latitude lines */}
              {[-30, 30].map((lat, i) => (
                <ellipse
                  key={i}
                  cx={cx}
                  cy={cy + (lat / 90) * (ry - 10)}
                  rx={(rx - 20) * Math.cos((lat * Math.PI) / 180)}
                  ry={3}
                  fill="none"
                  stroke="rgba(139,92,246,0.18)"
                  strokeWidth="0.8"
                  strokeDasharray="3 5"
                />
              ))}
            </svg>

            {/* Skill icons */}
            {sortedIndices.map((i) => {
              const pos = iconPositions[i];
              const skill = allSkills[i];
              if (!pos) return null;
              const isHovered = hoveredIndex === i;
              const opacity = 0.4 + 0.6 * ((pos.z + 1) / 2);
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : pos.scale})`,
                    zIndex: isHovered ? 100 : Math.round(pos.z * 50 + 50),
                    opacity: isHovered ? 1 : opacity,
                    transition: "transform 0.25s ease, opacity 0.25s ease",
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
                  {/* Icon bubble */}
                  <div
                    className="relative flex items-center justify-center rounded-full border"
                    style={{
                      width: 40,
                      height: 40,
                      background: isHovered
                        ? "rgba(6,182,212,0.25)"
                        : "rgba(15,12,40,0.75)",
                      borderColor: isHovered
                        ? "rgba(6,182,212,0.85)"
                        : "rgba(139,92,246,0.4)",
                      boxShadow: isHovered
                        ? "0 0 14px rgba(6,182,212,0.7), 0 0 28px rgba(139,92,246,0.4)"
                        : "0 2px 8px rgba(0,0,0,0.5)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      style={{ width: 22, height: 22, objectFit: "contain" }}
                    />

                    {/* Tooltip */}
                    {isHovered && (
                      <div
                        className="absolute -top-9 left-1/2 pointer-events-none whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium"
                        style={{
                          transform: "translateX(-50%)",
                          background: "rgba(6,182,212,0.92)",
                          color: "#fff",
                          boxShadow: "0 0 10px rgba(6,182,212,0.6)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {skill.name}
                        <div
                          className="absolute left-1/2 -bottom-1.5"
                          style={{
                            transform: "translateX(-50%)",
                            width: 0,
                            height: 0,
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "6px solid rgba(6,182,212,0.92)",
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

        {/* Legend chips */}
        <div className="flex flex-wrap justify-center gap-2 mt-10" data-aos="fade-up" data-aos-delay="300">
          {[
            { label: "Languages", color: "from-amber-400 to-orange-500" },
            { label: "Frameworks", color: "from-cyan-400 to-blue-500" },
            { label: "Tools", color: "from-emerald-400 to-teal-500" },
            { label: "Gen AI", color: "from-violet-400 to-purple-500" },
          ].map((cat) => (
            <span
              key={cat.label}
              className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${cat.color} text-white shadow-lg`}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
