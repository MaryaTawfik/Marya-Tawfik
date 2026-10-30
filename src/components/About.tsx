import React, { useState, useEffect } from "react";
import { PORTFOLIO } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const About: React.FC = () => {
  const { about } = PORTFOLIO;
  const { ref, isVisible } = useIntersectionObserver(0.2);

  // Line-by-line reveal for the code window
  const [revealedLines, setRevealedLines] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (revealedLines >= about.codeLines.length) return;

    const timer = setTimeout(() => {
      setRevealedLines((prev) => prev + 1);
    }, 140);

    return () => clearTimeout(timer);
  }, [isVisible, revealedLines, about.codeLines.length]);

  // Stat count-ups
  const [cfCount, setCfCount] = useState(0);
  const [lcCount, setLcCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1200; // ms
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const targetCf = about.stats[0].value;
    const targetLc = about.stats[1].value;
    const targetProjects = about.stats[2].value;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCfCount(Math.round(targetCf * progress));
      setLcCount(Math.round(targetLc * progress));
      setProjectsCount(Math.round(targetProjects * progress));

      if (step >= steps) {
        clearInterval(timer);
        setCfCount(targetCf);
        setLcCount(targetLc);
        setProjectsCount(targetProjects);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, about.stats]);

  // Syntax highlighting helper for marya.ts
  const renderSyntaxHighlightedLine = (line: string) => {
    // If empty or brackets
    if (line.startsWith("const marya = {") || line.endsWith("};")) {
      return (
        <span>
          <span style={{ color: "var(--syn1)" }} className="font-bold">const</span>{" "}
          <span style={{ color: "var(--fg)" }}>marya = &#123;</span>
        </span>
      );
    }
    if (line.trim() === "};") {
      return <span style={{ color: "var(--fg)" }}>&#125;;</span>;
    }

    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) {
      return <span style={{ color: "var(--fg)" }}>{line}</span>;
    }

    const prop = line.slice(0, colonIdx);
    const val = line.slice(colonIdx + 1);

    return (
      <span>
        <span style={{ color: "var(--syn2)" }}>{prop}</span>:
        <span style={{ color: "var(--syn3)" }}>{val}</span>
      </span>
    );
  };

  return (
    <section
      id="about"
      ref={ref}
      className="w-full bg-[var(--panel2)] border-y-2 border-[var(--fg)] py-16 sm:py-24 transition-colors duration-300"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Code Window titled marya.ts with 3-dot bar */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[22px] shadow-hard-large overflow-hidden">
              {/* Title Bar with three dots */}
              <div className="px-4 py-3 bg-[var(--panel)] border-b-2 border-[var(--fg)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-1.5 border-[var(--fg)] bg-[#FF6150]" />
                  <span className="w-3 h-3 rounded-full border-1.5 border-[var(--fg)] bg-[#FFC21A]" />
                  <span className="w-3 h-3 rounded-full border-1.5 border-[var(--fg)] bg-[#2BB673]" />
                </div>
                <span className="font-mono-code font-bold text-xs text-[var(--fg)]">
                  marya.ts
                </span>
                <span className="w-8" />
              </div>

              {/* Code lines */}
              <div className="p-5 font-mono-code text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[260px]">
                {about.codeLines.map((line, idx) => {
                  const isLineVisible = idx < revealedLines;
                  return (
                    <div
                      key={idx}
                      className={`transition-opacity duration-200 flex items-start ${
                        isLineVisible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="w-6 text-[var(--dim)] select-none shrink-0 text-right pr-3 text-[11px]">
                        {idx + 1}
                      </span>
                      <div className="whitespace-pre">
                        {renderSyntaxHighlightedLine(line)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Heading, About text, Bullets, Stats, CTA */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--fg)] leading-tight">
              {about.heading} <span className="marker-hl">{about.highlightWord}</span>
            </h2>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              {about.paragraph}
            </p>

            {/* Three dotted bullets */}
            <div className="space-y-2 pt-1 font-mono-code text-sm sm:text-base font-medium text-[var(--fg)]">
              {about.bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--a2)] border border-[var(--fg)] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Three Stat Blocks counting up */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-3">
              {/* Stat 1: Codeforces */}
              <div className="p-3 sm:p-4 rounded-[16px] bg-[var(--a1)] text-[var(--on-a1)] border-2 border-[var(--fg)] shadow-hard-card flex flex-col justify-between">
                <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                  {cfCount}
                </span>
                <span className="font-mono-code font-bold text-[11px] sm:text-xs uppercase tracking-wider mt-1 leading-snug">
                  CF Solved
                </span>
              </div>

              {/* Stat 2: LeetCode */}
              <div className="p-3 sm:p-4 rounded-[16px] bg-[var(--a2)] text-[var(--on-a2)] border-2 border-[var(--fg)] shadow-hard-card flex flex-col justify-between">
                <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                  {lcCount}
                </span>
                <span className="font-mono-code font-bold text-[11px] sm:text-xs uppercase tracking-wider mt-1 leading-snug">
                  LC Solved
                </span>
              </div>

              {/* Stat 3: Shipped Projects */}
              <div className="p-3 sm:p-4 rounded-[16px] bg-[var(--panel)] text-[var(--fg)] border-2 border-[var(--fg)] shadow-hard-card flex flex-col justify-between">
                <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                  {projectsCount}
                </span>
                <span className="font-mono-code font-bold text-[11px] sm:text-xs uppercase tracking-wider mt-1 leading-snug">
                  Total 
                </span>
              </div>
            </div>

            {/* Let's talk button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-[var(--a1)] text-[var(--on-a1)] font-display font-bold text-base border-2 border-[var(--fg)] shadow-hard-card btn-lift inline-block"
              >
                Let's talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
