import React, { useState, useEffect } from "react";
import { PORTFOLIO } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const Competitive: React.FC = () => {
  const { competitive } = PORTFOLIO;
  const { ref, isVisible } = useIntersectionObserver(0.2);

  // Counter for rating pin
  const [currentRatingCount, setCurrentRatingCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const target = competitive.currentRating;
    const steps = 30;
    const interval = 1000 / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCurrentRatingCount(Math.round(target * progress));
      if (step >= steps) {
        clearInterval(timer);
        setCurrentRatingCount(target);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, competitive.currentRating]);

  // Ladder positions (800 to 2400 = 1600 range)
  const currentPct = ((competitive.currentRating - 800) / 1600) * 100;
  const peakPct = ((competitive.peakRating - 800) / 1600) * 100;

  // Track open state for expandable details items to control hard shadow
  const [openProblems, setOpenProblems] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleProblem = (idx: number) => {
    setOpenProblems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section
      id="competitive"
      ref={ref}
      className="w-full bg-[var(--panel2)] border-y-2 border-[var(--fg)] py-16 sm:py-24 transition-colors duration-300"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Heading */}
        <div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--fg)]">
            Competitive <span className="marker-hl">programming</span>
          </h2>
          <p className="mt-2 text-base text-[var(--muted)] font-mono-code">
            Speed, algorithmic correctness, and edge-case invariants under contest pressure.
          </p>
        </div>

        {/* Part A: Where I stand on Codeforces (Rating Ladder) */}
        <div className="p-6 sm:p-8 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[22px] shadow-hard-large space-y-8">
          <div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[var(--fg)]">
              Where I stand on Codeforces
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] font-mono-code mt-0.5">
              Codeforces rating scale from 800 (Newbie) to 2400 (International Master).
            </p>
          </div>

          {/* Interactive Ladder Bar with Pins */}
          <div className="relative pt-12 pb-14 px-2 sm:px-4">
            {/* Top Pin: 1540 now */}
            <div
              className={`absolute top-0 transition-all duration-700 ease-out flex flex-col items-center -translate-x-1/2 z-20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ left: `${currentPct}%` }}
            >
              <div className="px-2.5 py-1 rounded-full bg-[var(--a1)] border-2 border-[var(--fg)] shadow-hard-sm font-mono-code font-bold text-xs text-[var(--on-a1)] whitespace-nowrap">
                {currentRatingCount} now
              </div>
              <div className="w-0.5 h-3 bg-[var(--fg)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--fg)] -mt-1" />
            </div>

            {/* The Horizontal Ladder Bar */}
            <div className="w-full h-8 rounded-full border-2 border-[var(--fg)] overflow-hidden flex bg-[var(--bg)] shadow-hard-sm">
              {competitive.ladder.map((tier) => {
                const tierRange = tier.max - tier.min;
                const widthPct = (tierRange / 1600) * 100;
                return (
                  <div
                    key={tier.name}
                    className="h-full border-r-1.5 last:border-r-0 border-[var(--fg)] transition-all duration-700 ease-out"
                    style={{
                      width: isVisible ? `${widthPct}%` : "0%",
                      backgroundColor: tier.color,
                    }}
                    title={`${tier.name} (${tier.min}–${tier.max})`}
                  />
                );
              })}
            </div>

            {/* Bottom Pin: 1612 peak */}
            <div
              className={`absolute bottom-0 transition-all duration-700 ease-out flex flex-col items-center -translate-x-1/2 z-20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ left: `${peakPct}%`, transitionDelay: "200ms" }}
            >
              <div className="w-2 h-2 rounded-full bg-[var(--fg)] -mb-1" />
              <div className="w-0.5 h-3 bg-[var(--fg)]" />
              <div className="px-2.5 py-1 rounded-full bg-[var(--a2)] border-2 border-[var(--fg)] shadow-hard-sm font-mono-code font-bold text-xs text-[var(--on-a2)] whitespace-nowrap">
                {competitive.peakRating} peak
              </div>
            </div>
          </div>

          {/* Ladder Legend */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-1.5 border-[var(--line)] font-mono-code text-xs">
            {competitive.ladder.map((tier) => {
              const isCurrentTier =
                competitive.currentRating >= tier.min && competitive.currentRating < tier.max;
              return (
                <div key={tier.name} className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full border border-[var(--fg)]"
                    style={{ backgroundColor: tier.color }}
                  />
                  <span
                    className={`${
                      isCurrentTier
                        ? "font-extrabold text-[var(--fg)] underline underline-offset-4"
                        : "text-[var(--dim)]"
                    }`}
                  >
                    {tier.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part B & C: Profiles and Contests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Part B: Profiles */}
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-2xl text-[var(--fg)]">
              Profiles
            </h3>
            <div className="space-y-3">
              {competitive.profiles.map((p) => (
                <div
                  key={p.platform}
                  className="p-3.5 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[16px] shadow-hard-sm flex items-center justify-between transition-transform duration-150 hover:translate-x-2"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-[54px] h-[54px] rounded-[14px] bg-[var(--a1)] border-2 border-[var(--fg)] flex items-center justify-center font-mono-code font-extrabold text-lg text-[var(--on-a1)] shadow-hard-sm shrink-0">
                      {p.initials}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-[var(--fg)]">
                        {p.platform}
                      </h4>
                      <span className="font-mono-code text-xs text-[var(--dim)] block">
                        @{p.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="font-mono-code text-xs font-semibold text-[var(--fg)]">
                      {p.ratingText}
                    </span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-code text-xs font-bold text-[var(--atext)] hover:underline"
                    >
                      Open profile ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part C: Contests and Badges */}
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-2xl text-[var(--fg)]">
              Contests and badges
            </h3>
            <div className="space-y-3">
              {competitive.contests.map((c) => (
                <div
                  key={c.name}
                  className="p-3.5 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[16px] shadow-hard-sm flex items-center justify-between transition-transform duration-150 hover:translate-x-2"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-[54px] h-[54px] rounded-[14px] bg-[var(--a1)] border-2 border-[var(--fg)] flex items-center justify-center font-mono-code font-extrabold text-sm text-[var(--on-a1)] shadow-hard-sm shrink-0">
                      {c.badge}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-[var(--fg)]">
                        {c.name}
                      </h4>
                      <span className="font-mono-code text-xs text-[var(--dim)] block">
                        {c.date}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono-code text-xs font-bold text-[var(--fg)]">
                      {c.rankText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part D: Problems I liked */}
        <div className="space-y-4">
          <h3 className="font-display font-extrabold text-2xl text-[var(--fg)]">
            Problems I liked
          </h3>
          <div className="space-y-3">
            {competitive.likedProblems.map((prob, idx) => {
              const isOpen = !!openProblems[idx];
              return (
                <div
                  key={prob.title}
                  className={`bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[18px] transition-all duration-200 overflow-hidden ${
                    isOpen ? "shadow-hard-card" : "shadow-hard-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleProblem(idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display font-bold text-lg text-[var(--fg)]">
                        {prob.title}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg)] border border-[var(--fg)] font-mono-code text-xs font-bold text-[var(--muted)]">
                        {prob.tag}
                      </span>
                    </div>

                    {/* Round +/- Toggle */}
                    <div className="w-7 h-7 rounded-full border-2 border-[var(--fg)] bg-[var(--panel2)] flex items-center justify-center font-mono-code font-bold text-sm shrink-0 shadow-hard-sm">
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 space-y-3 border-t-1.5 border-[var(--line)]">
                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        {prob.approach}
                      </p>
                      <div className="p-2.5 bg-[var(--bg)] border border-[var(--fg)] rounded-lg font-mono-code text-xs font-bold text-[var(--atext)]">
                        {prob.complexity}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
