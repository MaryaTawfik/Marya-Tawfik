import React, { useRef, useState, useEffect } from "react";
import { PORTFOLIO } from "../data/portfolio";

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO;
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth = 580; // card + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Top Header: Title and Nav Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--fg)]">
              My <span className="marker-hl">projects</span>
            </h2>
            <p className="mt-2 text-base text-[var(--muted)] font-mono-code">
              Backend systems with measurable invariants.
            </p>
          </div>

          {/* Previous and Next Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border-2 border-[var(--fg)] bg-[var(--panel)] text-[var(--fg)] font-bold flex items-center justify-center btn-lift shadow-hard-sm disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border-2 border-[var(--fg)] bg-[var(--panel)] text-[var(--fg)] font-bold flex items-center justify-center btn-lift shadow-hard-sm disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Container with Scroll Snap */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <article
              key={project.name}
              className="w-[90vw] sm:w-[560px] shrink-0 bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[22px] shadow-hard-card overflow-hidden snap-start flex flex-col justify-between"
            >
              <div>
                {/* 14px Colored Top Bar */}
                <div
                  className="w-full h-3.5 border-b-2 border-[var(--fg)]"
                  style={{ backgroundColor: project.color }}
                />

                <div className="p-6 sm:p-7 space-y-5">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--fg)]">
                      {project.name}
                    </h3>
                    <p className="font-mono-code text-sm font-semibold text-[var(--atext)] mt-0.5">
                      "{project.tagline}"
                    </p>
                  </div>

                  {/* Problem */}
                  <div className="space-y-1">
                    <span className="font-mono-code text-xs uppercase font-bold text-[var(--dim)] tracking-wider">
                      Problem
                    </span>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Architecture */}
                  {/* <div className="space-y-1">
                    <span className="font-mono-code text-xs uppercase font-bold text-[var(--dim)] tracking-wider">
                      Architecture
                    </span>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {project.architecture}
                    </p>
                  </div> */}

                  {/* Hard Parts (Square colored bullets) */}
                  {/* <div className="space-y-1.5 pt-1">
                    <span className="font-mono-code text-xs uppercase font-bold text-[var(--dim)] tracking-wider block">
                      Hard parts
                    </span>
                    <div className="space-y-1.5">
                      {project.hardParts.map((hp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--fg)]">
                          <span
                            className="w-2.5 h-2.5 shrink-0 mt-1 border border-[var(--fg)]"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="leading-snug">{hp}</span>
                        </div>
                      ))}
                    </div>
                  </div> */}

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg)] border border-[var(--fg)] text-[11px] font-mono-code font-bold text-[var(--fg)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="px-6 sm:px-7 py-4 bg-[var(--panel2)] border-t-2 border-[var(--fg)] flex items-center gap-4 font-mono-code text-xs font-bold">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--fg)] hover:text-[var(--atext)] underline underline-offset-4"
                  >
                    Live demo ↗
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--fg)] hover:text-[var(--atext)] underline underline-offset-4"
                  >
                    Repo ↗
                  </a>
                )}
                {project.links.docs && (
                  <a
                    href={project.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--fg)] hover:text-[var(--atext)] underline underline-offset-4"
                  >
                    API docs ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
