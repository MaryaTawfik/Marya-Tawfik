import React from "react";
import { PORTFOLIO } from "../data/portfolio";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const Community: React.FC = () => {
  const { community } = PORTFOLIO;
  const { ref, isVisible } = useIntersectionObserver(0.2);

  return (
    <section
      id="community"
      ref={ref}
      className="w-full bg-[var(--panel2)] border-y-2 border-[var(--fg)] py-16 sm:py-24 transition-colors duration-300"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Heading */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--fg)]">
              Community &amp; <span className="marker-hl">Mentorship</span>
            </h2>
            <p className="mt-3 max-w-[40em] text-base text-[var(--muted)]">
              {community.intro}
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm font-mono-code text-xs font-bold text-[var(--fg)]">
            {community.items.length} programs
          </span>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {community.items.map((item, i) => (
            <div
              key={item.name}
              className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <article className="relative h-full overflow-hidden p-6 pt-9 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[22px] shadow-hard-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-hard-large">
                {/* Colored top bar */}
                <span
                  className="absolute top-0 left-0 right-0 h-3 border-b-2 border-[var(--fg)]"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />

                <span className="inline-block px-3 py-1 rounded-full bg-[var(--a1)] border-2 border-[var(--fg)] font-mono-code text-xs font-bold text-[var(--on-a1)]">
                  {item.role}
                </span>

                <h3 className="mt-4 font-display font-extrabold text-2xl leading-tight tracking-tight text-[var(--fg)]">
                  {item.name}
                </h3>

                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
