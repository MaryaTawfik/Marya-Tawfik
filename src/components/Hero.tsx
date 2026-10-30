import React, { useState, useEffect, useRef } from "react";
import { PORTFOLIO } from "../data/portfolio";

export const Hero: React.FC = () => {
  const { meta, socials, hero } = PORTFOLIO;

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = hero.typewriterRoles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % hero.typewriterRoles.length);
    } else {
      const delta = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, hero.typewriterRoles]);

  // Pointer tracking for parallax and eyes
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });
  const [isHoveringBlob, setIsHoveringBlob] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Blinking eyes every 5 seconds
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 5000);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    // Clamped
    setPointerOffset({
      x: Math.max(-1, Math.min(1, offsetX)),
      y: Math.max(-1, Math.min(1, offsetY)),
    });
  };

  const handleMouseLeave = () => {
    setPointerOffset({ x: 0, y: 0 });
  };

  // Eye pupil offset
  const pupilX = pointerOffset.x * 5;
  const pupilY = pointerOffset.y * 4;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 overflow-hidden"
      id="hero"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Typewriter, Pitch, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Social Buttons: 5 circular buttons (GH, in, CF, LC, @) */}
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-[var(--fg)] bg-[var(--panel)] text-[var(--fg)] font-mono-code font-bold text-xs flex items-center justify-center btn-lift shadow-hard-sm"
                  aria-label={s.name}
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Heading: Hi, I'm Marya */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[var(--fg)] leading-[1.08]">
              Hi, I'm <span className="marker-hl">Marya</span>
            </h1>

            {/* Typewriter role line */}
            <div className="h-8 flex items-center text-lg sm:text-xl font-mono-code font-semibold text-[var(--atext)]">
              <span>{displayText}</span>
              <span className="w-2.5 h-5 bg-[var(--atext)] ml-1 animate-caret" aria-hidden="true" />
            </div>

            {/* Pitch paragraph */}
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              {meta.pitch}
            </p>

            {/* Actions: View CV and Hire me */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={meta.resumeUrl}
                className="px-7 py-3 rounded-full bg-[var(--a1)] text-[var(--on-a1)] font-display font-bold text-base border-2 border-[var(--fg)] shadow-hard-card btn-lift"
              >
                View CV
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-[var(--panel)] text-[var(--fg)] font-display font-bold text-base border-2 border-[var(--fg)] shadow-hard-card btn-lift"
              >
                Hire me
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Smiley Blob + Parallax Chips + Star */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px]">
            {/* Spinning Star SVG (a2 fill) */}
            <div
              className="absolute top-2 right-4 w-9 h-9 animate-slow-spin pointer-events-none"
              style={{ color: "var(--a2)" }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
              </svg>
            </div>

            {/* Decorative Squiggle Line SVG */}
            <div
              className="absolute -bottom-2 left-6 w-20 h-6 pointer-events-none text-[var(--fg)] opacity-70"
              aria-hidden="true"
            >
              <svg viewBox="0 0 80 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M2 10 Q 12 2, 22 10 T 42 10 T 62 10 T 78 10" />
              </svg>
            </div>

            {/* Floating Sticker Chips Layer (Moves with -pointerOffset) */}
            <div
              className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out z-20"
              style={{
                transform: `translate(${-pointerOffset.x * 12}px, ${-pointerOffset.y * 12}px)`,
              }}
            >
              {/* Chip 1: 200 OK */}
              <div
                className="absolute top-4 left-2 sm:left-4 bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm rounded-full px-3 py-1 font-mono-code text-xs font-bold flex items-center gap-1.5 animate-bob"
                style={{ "--rot": hero.chips[0].rot } as React.CSSProperties}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hero.chips[0].dot }} />
                <span>{hero.chips[0].text}</span>
              </div>

              {/* Chip 2: O(log n) */}
              <div
                className="absolute top-8 right-2 sm:right-6 bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm rounded-full px-3 py-1 font-mono-code text-xs font-bold flex items-center gap-1.5 animate-bob"
                style={{ "--rot": hero.chips[1].rot, animationDelay: "0.8s" } as React.CSSProperties}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hero.chips[1].dot }} />
                <span>{hero.chips[1].text}</span>
              </div>

              {/* Chip 3: { api } */}
              <div
                className="absolute bottom-12 -left-2 sm:left-2 bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm rounded-full px-3 py-1 font-mono-code text-xs font-bold flex items-center gap-1.5 animate-bob"
                style={{ "--rot": hero.chips[2].rot, animationDelay: "1.4s" } as React.CSSProperties}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hero.chips[2].dot }} />
                <span>{hero.chips[2].text}</span>
              </div>

              {/* Chip 4: SELECT * */}
              <div
                className="absolute bottom-6 right-2 sm:right-4 bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm rounded-full px-3 py-1 font-mono-code text-xs font-bold flex items-center gap-1.5 animate-bob"
                style={{ "--rot": hero.chips[3].rot, animationDelay: "2.1s" } as React.CSSProperties}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hero.chips[3].dot }} />
                <span>{hero.chips[3].text}</span>
              </div>

              {/* Chip 5: Redis */}
              <div
                className="absolute top-1/2 -right-3 sm:-right-1 bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm rounded-full px-3 py-1 font-mono-code text-xs font-bold flex items-center gap-1.5 animate-bob"
                style={{ "--rot": hero.chips[4].rot, animationDelay: "1.7s" } as React.CSSProperties}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hero.chips[4].dot }} />
                <span>{hero.chips[4].text}</span>
              </div>
            </div>

            {/* Blob Layer (Moves with +pointerOffset) */}
            <div
              className="relative z-10 transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${pointerOffset.x * 12}px, ${pointerOffset.y * 12}px)`,
              }}
              onMouseEnter={() => setIsHoveringBlob(true)}
              onMouseLeave={() => setIsHoveringBlob(false)}
            >
              {/* Morphing Blob */}
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 bg-[var(--a1)] border-[3px] border-[var(--fg)] shadow-hard-large animate-blob-morph flex items-center justify-center cursor-pointer transition-colors"
                title="Marya's avatar (Can be swapped with a real photo in src/data/portfolio.ts)"
              >
                {/* Smiley Face SVG */}
                <svg
                  viewBox="0 0 160 160"
                  className="w-40 h-40"
                  aria-hidden="true"
                >
                  {/* Eyes: two ovals with pupil that tracks pointer */}
                  {/* Left Eye */}
                  <g transform="translate(48, 56)">
                    {isBlinking ? (
                      <line x1="-10" y1="0" x2="10" y2="0" stroke="var(--fg)" strokeWidth="4" strokeLinecap="round" />
                    ) : (
                      <>
                        <ellipse cx="0" cy="0" rx="9" ry="12" fill="var(--fg)" />
                        {/* Eye pupil white shine */}
                        <circle cx={pupilX} cy={pupilY - 3} r="3.5" fill="#FFFFFF" />
                      </>
                    )}
                  </g>

                  {/* Right Eye */}
                  <g transform="translate(112, 56)">
                    {isBlinking ? (
                      <line x1="-10" y1="0" x2="10" y2="0" stroke="var(--fg)" strokeWidth="4" strokeLinecap="round" />
                    ) : (
                      <>
                        <ellipse cx="0" cy="0" rx="9" ry="12" fill="var(--fg)" />
                        <circle cx={pupilX} cy={pupilY - 3} r="3.5" fill="#FFFFFF" />
                      </>
                    )}
                  </g>

                  {/* Cheeks: two var(--a2) circular blushes */}
                  <circle cx="34" cy="84" r="8" fill="var(--a2)" opacity="0.9" />
                  <circle cx="126" cy="84" r="8" fill="var(--a2)" opacity="0.9" />

                  {/* Smile: grows slightly on hover */}
                  <path
                    d={
                      isHoveringBlob
                        ? "M 44 92 Q 80 136 116 92"
                        : "M 48 94 Q 80 126 112 94"
                    }
                    stroke="var(--fg)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-300"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Heartbeat SVG line with running a2 dash */}
      <div className="w-full mt-14 sm:mt-20 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1000 60"
          className="w-full h-12 sm:h-14 stroke-[var(--fg)] stroke-[3px] sm:stroke-[4px]"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Base track line */}
          <path
            d="M 0 30 L 350 30 L 380 30 L 400 10 L 420 50 L 440 18 L 455 36 L 470 30 L 1000 30"
            stroke="var(--fg)"
          />
          {/* Running animated dash */}
          <path
            d="M 0 30 L 350 30 L 380 30 L 400 10 L 420 50 L 440 18 L 455 36 L 470 30 L 1000 30"
            stroke="var(--a2)"
            strokeWidth="5"
            className="animate-pulse-dash"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};
