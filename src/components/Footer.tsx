import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[var(--panel)] border-t-2 border-[var(--fg)] py-8 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[var(--muted)]">
        <span>&copy; 2026 Marya Tawfik.</span>
        {/* <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--a2)]" aria-hidden="true" />
          <span>Stay Happy :)</span>
        </div> */}
      </div>
    </footer>
  );
};
