import React from "react";
import { PORTFOLIO } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const Closing: React.FC = () => {
  const { closing, cv } = PORTFOLIO;
  const { ref, isVisible } = useIntersectionObserver(0.2);

  // Splits the headline around the highlighted word, for example "amazing"
  const parts = closing.highlight ? closing.headline.split(closing.highlight) : [closing.headline];

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section ref={ref} className="w-full py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div
          className={`relative p-8 sm:p-12 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[28px] shadow-hard-large transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* The smile: ":)" turned on its side */}
          <span
            role="img"
            aria-label="smile"
            className="absolute -top-6 right-6 sm:right-10 w-16 h-16 rounded-full bg-[var(--a1)] border-2 border-[var(--fg)] shadow-hard-sm flex items-center justify-center font-display font-extrabold text-3xl text-[var(--on-a1)]"
          >
            <span className="inline-block rotate-90">:)</span>
          </span>

          <h2 className="max-w-[18em] font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[var(--fg)]">
            {parts.length === 2 ? (
              <>
                {parts[0]}
                <span className="marker-hl">{closing.highlight}</span>
                {parts[1]}
              </>
            ) : (
              closing.headline
            )}
          </h2>

          <p className="mt-5 max-w-[34em] font-mono-code text-base sm:text-lg text-[var(--muted)]">
            {closing.sub}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Download CV: a plain link to the PDF in the public folder */}
            <a
              href={cv.file}
              download={cv.downloadName}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--a1)] text-[var(--on-a1)] border-2 border-[var(--fg)] font-bold shadow-hard-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-large"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 11l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Download my CV
            </a>

            <button
              type="button"
              onClick={backToTop}
              className="px-7 py-3 rounded-full bg-transparent text-[var(--fg)] border-2 border-[var(--fg)] font-bold transition-all duration-150 hover:bg-[var(--a2)] hover:text-[var(--on-a2)]"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
