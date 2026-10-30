import React from "react";
import { PORTFOLIO } from "../data/portfolio";

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO;

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--fg)]">
            Where I have <span className="marker-hl">worked</span>
          </h2>
          <p className="mt-2 text-base text-[var(--muted)] font-mono-code">
            Engineering trajectory, key systems shipped, and real performance optimizations.
          </p>
        </div>

        {/* Vertical Timeline with 3px line and 18px round a1 dots with 3px borders */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:content-[''] before:absolute before:left-[8px] sm:before:left-[12px] before:top-3 before:bottom-3 before:w-[3px] before:bg-[var(--fg)]">
          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* 18px Round a1 dot with 3px border */}
              <div
                className="absolute -left-[23px] sm:-left-[35px] top-1.5 w-[18px] h-[18px] rounded-full bg-[var(--a1)] border-[3px] border-[var(--fg)] shadow-hard-sm"
                aria-hidden="true"
              />

              {/* Card content */}
              <div className="p-6 sm:p-7 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[22px] shadow-hard-card transition-transform duration-200 hover:translate-x-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b-1.5 border-[var(--line)]">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--fg)]">
                    {item.role}
                  </h3>
                  <span className="font-mono-code font-bold text-xs sm:text-sm text-[var(--atext)]">
                    {item.period}
                  </span>
                </div>

                <div className="mt-4 space-y-2.5 font-mono-code text-xs sm:text-sm text-[var(--muted)]">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--a2)] border border-[var(--fg)] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
