import React, { useState, useEffect } from "react";

type MoodType = "sunny" | "coral" | "mono" | "ink";

export const Nav: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<MoodType>("sunny");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-mood") as MoodType;
    if (saved && ["sunny", "coral"].includes(saved)) {
      setCurrentMood(saved);
      document.documentElement.setAttribute("data-mood", saved);
    } else {
      const initial = document.documentElement.getAttribute("data-mood") as MoodType || "sunny";
      setCurrentMood(initial);
    }
  }, []);

  const setMood = (mood: MoodType) => {
    setCurrentMood(mood);
    document.documentElement.setAttribute("data-mood", mood);
    try {
      localStorage.setItem("portfolio-mood", mood);
    } catch (e) {}
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Mentoring", href: "#community" },
    // { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full pt-4 sm:pt-6 pb-2 px-3 sm:px-4 z-40 sticky top-2 sm:sticky pointer-events-auto">
      <nav
        className="max-w-[920px] mx-auto bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-nav rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-colors duration-300"
        aria-label="Main Navigation"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-2.5 gap-x-4">
          {/* Logo "marya" + coral dot */}
          <a
            href="#"
            className="flex items-center gap-1.5 font-display font-extrabold text-2xl text-[var(--fg)] tracking-tight focus:outline-none"
            aria-label="Marya Home"
          >
            <span>marya</span>
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--a2)" }}
              aria-hidden="true"
            />
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium font-mono-code order-3 sm:order-2 w-full sm:w-auto justify-center sm:justify-start pt-1 sm:pt-0 border-t sm:border-t-0 border-[var(--line)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[var(--fg)] hover:bg-[var(--a1)] hover:text-[var(--on-a1)] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mood switcher dots */}
          <div className="flex items-center gap-2 order-2 sm:order-3" aria-label="Theme Moods">
            {/* <button
              type="button"
              onClick={() => setMood("sunny")}
              className={`w-6 h-6 rounded-full border-2 border-[var(--fg)] swatch-sunny cursor-pointer transition-transform ${
                currentMood === "sunny" ? "swatch-active scale-110" : "hover:scale-105"
              }`}
              title="Sunny mood (default)"
              aria-label="Switch to Sunny mood"
              aria-pressed={currentMood === "sunny"}
            /> */}
            {/* <button
              type="button"
              onClick={() => setMood("coral")}
              className={`w-6 h-6 rounded-full border-2 border-[var(--fg)] swatch-coral cursor-pointer transition-transform ${
                currentMood === "coral" ? "swatch-active scale-110" : "hover:scale-105"
              }`}
              title="Coral mood"
              aria-label="Switch to Coral mood"
              aria-pressed={currentMood === "coral"}
            /> */}
            {/* <button
              type="button"
              onClick={() => setMood("mono")}
              className={`w-6 h-6 rounded-full border-2 border-[var(--fg)] swatch-mono cursor-pointer transition-transform ${
                currentMood === "mono" ? "swatch-active scale-110" : "hover:scale-105"
              }`}
              title="Mono mood (black & white)"
              aria-label="Switch to Mono mood"
              aria-pressed={currentMood === "mono"}
            /> */}
            {/* <button
              type="button"
              onClick={() => setMood("ink")}
              className={`w-6 h-6 rounded-full border-2 border-[var(--fg)] swatch-ink cursor-pointer transition-transform ${
                currentMood === "ink" ? "swatch-active scale-110" : "hover:scale-105"
              }`}
              title="Ink mood (dark)"
              aria-label="Switch to Ink mood"
              aria-pressed={currentMood === "ink"}
            /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
