import React, { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  icon: string;
}

const orbits: { label: string; skills: Skill[]; direction: 1 | -1; speed: number }[] = [
  {
    label: "Languages",
    direction: 1,
    speed: 0.003,
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    label: "Frontend",
    direction: -1,
    speed: 0.0025,
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    label: "Backend & DB",
    direction: 1,
    speed: 0.002,
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    label: "Generative AI",
    direction: -1,
    speed: 0.0018,
    skills: [
      { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Pinecone", icon: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4" },
    ],
  },
  {
    label: "Tools",
    direction: 1,
    speed: 0.008,
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
];

const Skills: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const angleRefs = useRef<number[]>(orbits.map(() => 0));
  const animRef = useRef(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const loop = () => {
      orbits.forEach((o, i) => {
        angleRefs.current[i] += o.speed * o.direction;
      });
      setTick((t) => t + 1);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const containerSize = isMobile ? 340 : 620;
  const center = containerSize / 2;
  const baseRadius = isMobile ? 45 : 75;
  const gap = isMobile ? 32 : 55;
  const iconSize = isMobile ? 32 : 42;
  const sunSize = isMobile ? 50 : 70;

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Skills &amp; Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies orbiting my universe — hover to explore.
          </p>
        </div>

        <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <div
            className="relative"
            style={{ width: containerSize, height: containerSize }}
          >
            {/* Orbital ring lines */}
            {orbits.map((_, i) => {
              const r = baseRadius + gap * i;
              return (
                <div
                  key={`ring-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    left: center - r,
                    top: center - r,
                    border: "1px solid rgba(6,182,212,0.15)",
                  }}
                />
              );
            })}

            {/* Center blue sphere */}
            <div
              className="absolute rounded-full"
              style={{
                width: sunSize,
                height: sunSize,
                left: center - sunSize / 2,
                top: center - sunSize / 2,
                background:
                  "radial-gradient(circle at 35% 30%, #38bdf8, #0284c7 50%, #0369a1 80%, #075985)",
                boxShadow:
                  "0 0 40px rgba(56,189,248,0.5), 0 0 80px rgba(2,132,199,0.3), inset 0 -8px 20px rgba(3,105,161,0.5)",
              }}
            >
              {/* Specular highlight */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "45%",
                  height: "45%",
                  left: "18%",
                  top: "12%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.45), transparent 70%)",
                }}
              />
            </div>

            {/* Orbiting skills */}
            {orbits.map((orbit, orbitIdx) => {
              const r = baseRadius + gap * orbitIdx;
              const angle = angleRefs.current[orbitIdx];

              return orbit.skills.map((skill, skillIdx) => {
                const theta =
                  angle + (skillIdx / orbit.skills.length) * Math.PI * 2;
                const x = center + Math.cos(theta) * r;
                const y = center + Math.sin(theta) * r;
                const isHovered = hoveredSkill === `${orbitIdx}-${skillIdx}`;

                return (
                  <div
                    key={`${orbitIdx}-${skillIdx}`}
                    className="absolute"
                    style={{
                      left: x,
                      top: y,
                      transform: `translate(-50%, -50%) scale(${isHovered ? 1.35 : 1})`,
                      zIndex: isHovered ? 100 : 10,
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={() =>
                      setHoveredSkill(`${orbitIdx}-${skillIdx}`)
                    }
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: iconSize,
                        height: iconSize,
                        background: isHovered
                          ? "rgba(6,182,212,0.25)"
                          : "rgba(10,8,32,0.9)",
                        border: `1.5px solid ${
                          isHovered
                            ? "rgba(6,182,212,0.9)"
                            : "rgba(139,92,246,0.25)"
                        }`,
                        boxShadow: isHovered
                          ? "0 0 20px rgba(6,182,212,0.5)"
                          : "0 2px 8px rgba(0,0,0,0.3)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        draggable={false}
                        style={{
                          width: iconSize * 0.6,
                          height: iconSize * 0.6,
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {isHovered && (
                      <div
                        className="absolute pointer-events-none whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold"
                        style={{
                          bottom: "calc(100% + 10px)",
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
              });
            })}

            {/* Orbit labels */}
            {orbits.map((orbit, i) => {
              const r = baseRadius + gap * i;
              return (
                <div
                  key={`label-${i}`}
                  className="absolute pointer-events-none text-muted-foreground"
                  style={{
                    left: center + r + 4,
                    top: center - 8,
                    fontSize: isMobile ? 8 : 10,
                    opacity: 0.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {orbit.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
