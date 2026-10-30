import React from "react";
import { PORTFOLIO } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO;
  const { ref, isVisible } = useIntersectionObserver(0.15);

  // Simple clean SVG icon representation for each skill
  const renderSkillIcon = (name: string) => {
    switch (name) {
      case "Node.js":
        return <span className="font-mono-code font-extrabold text-sm">JS</span>;
      case "PostgreSQL":
        return <span className="font-mono-code font-extrabold text-sm">PG</span>;
      case "TypeScript":
        return <span className="font-mono-code font-extrabold text-sm">TS</span>;
      case "C++":
        return <span className="font-mono-code font-extrabold text-sm">C++</span>;
      case "REST design":
        return <span className="font-mono-code font-extrabold text-xs">REST</span>;
      case "Redis":
        return <span className="font-mono-code font-extrabold text-sm">RD</span>;
      case "Python":
        return <span className="font-mono-code font-extrabold text-sm">PY</span>;
      case "Docker":
        return <span className="font-mono-code font-extrabold text-sm">DK</span>;
      case "React":
        return <span className="font-mono-code font-extrabold text-sm">RE</span>;
      case "AWS":
        return <span className="font-mono-code font-extrabold text-sm">AWS</span>;
      default:
        return <span className="font-mono-code font-extrabold text-sm">&lt;/&gt;</span>;
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--fg)]">
            Skills and <span className="marker-hl">tools</span>
          </h2>
          <p className="mt-2 text-base text-[var(--muted)] font-mono-code">
            Backend services, data architectures, and algorithmic tools I use to build systems.
          </p>
        </div>

        {/* Responsive Grid of rows (min 320px per column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group p-4 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[16px] shadow-hard-card flex items-center justify-between transition-all duration-200 hover:translate-x-2.5 cursor-default"
            >
              {/* Left: 48px square icon (hover turns a2 and tilts) + Name & Category */}
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-[12px] bg-[var(--a1)] text-[var(--on-a1)] border-2 border-[var(--fg)] flex items-center justify-center font-bold transition-all duration-200 group-hover:bg-[var(--a2)] group-hover:rotate-6 shadow-hard-sm shrink-0"
                  aria-hidden="true"
                >
                  {renderSkillIcon(skill.name)}
                </div>

                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--fg)] leading-snug">
                    {skill.name}
                  </h3>
                  <span className="font-mono-code text-xs text-[var(--dim)] block">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Right: 5 Pips + Level Word */}
              <div className="flex flex-col items-end gap-1.5">
                <div className="flex items-center gap-1.5" aria-label={`${skill.name} proficiency: ${skill.pips} out of 5`}>
                  {[1, 2, 3, 4, 5].map((pip) => {
                    const isFilled = pip <= skill.pips;
                    // Pip animation staggered delay
                    const delayMs = isVisible ? (idx * 50 + pip * 70) : 0;

                    return (
                      <span
                        key={pip}
                        className={`w-3 h-3 rounded-full border-1.5 border-[var(--fg)] transition-all duration-300 ${
                          isFilled && isVisible
                            ? "bg-[var(--a1)] scale-100"
                            : isFilled
                            ? "bg-transparent scale-90"
                            : "bg-[var(--panel2)] opacity-40 scale-90"
                        }`}
                        style={{
                          transitionDelay: `${delayMs}ms`,
                        }}
                      />
                    );
                  })}
                </div>
                <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
