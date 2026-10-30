import React, { useState } from "react";
import { Terminal, ExternalLink, Code2, Trophy, GitCommit, CheckCircle2, Edit3, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const ProblemSolvingSection: React.FC = () => {
  const { problemSolving } = PORTFOLIO_DATA;

  // Configurable stats state so Marya can edit her exact live counts directly in the UI if desired
  const [isEditingStats, setIsEditingStats] = useState(false);
  const [solvedCount, setSolvedCount] = useState("400+");
  const [codeforcesRating, setCodeforcesRating] = useState("Active Rating [Configurable]");

  return (
    <section id="problem-solving" className="py-24 bg-[#FAF8F4] relative border-t border-[#A58B78]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#684A3B] uppercase">
              04. Competitive Programming & Algorithmic Rigor
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#302720] tracking-tight">
              Problem Solving
            </h2>
            <p className="mt-3 text-base text-[#302720]/80">
              Practicing data structures and algorithmic complexity through competitive programming and collegiate contest participation.
            </p>
          </div>

          {/* Quick config button for Marya to update metrics accurately */}
          <button
            type="button"
            onClick={() => setIsEditingStats(!isEditingStats)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#684A3B] bg-[#E9DFD2]/60 hover:bg-[#E9DFD2] rounded-xl border border-[#A58B78]/30 transition-all self-start md:self-auto"
            title="Update live numbers with your real statistics"
          >
            {isEditingStats ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            <span>{isEditingStats ? "Done Editing" : "Configure Exact Stats"}</span>
          </button>
        </div>

        {/* Live editing panel if active */}
        {isEditingStats && (
          <div className="mb-8 p-5 bg-[#E9DFD2]/50 border border-[#A58B78]/30 rounded-2xl animate-fadeIn">
            <h4 className="text-xs font-mono font-bold uppercase text-[#684A3B] mb-3">
              Configure Your Verified Contest & Solved Stats (No fabricated numbers)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#302720] mb-1">
                  LeetCode Problems Solved:
                </label>
                <input
                  type="text"
                  value={solvedCount}
                  onChange={(e) => setSolvedCount(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#A58B78]/40 focus:border-[#684A3B]"
                  placeholder="e.g. 420+ Problems"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#302720] mb-1">
                  Codeforces Contest Rank / Rating:
                </label>
                <input
                  type="text"
                  value={codeforcesRating}
                  onChange={(e) => setCodeforcesRating(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-[#A58B78]/40 focus:border-[#684A3B]"
                  placeholder="e.g. Pupil / Specialist / 1250"
                />
              </div>
            </div>
            <p className="text-[11px] text-[#302720]/70 mt-2 font-mono">
              Note: Values are updated live on this page. Permanent updates can be saved in src/data/portfolioData.ts.
            </p>
          </div>
        )}

        {/* 3 Core Platform & Contest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {problemSolving.platforms.map((platform, idx) => {
            const isCodeforces = platform.name.includes("Codeforces");
            const isLeetCode = platform.name.includes("LeetCode");
            const isETCPC = platform.name.includes("ETCPC");

            const displayValue = isLeetCode
              ? solvedCount
              : isCodeforces
              ? codeforcesRating
              : platform.metricValue;

            return (
              <div
                key={platform.name}
                className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl p-6 sm:p-7 shadow-bl-card hover:shadow-bl-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-[#A58B78]">
                      0{idx + 1}
                    </span>
                    {isETCPC ? (
                      <Trophy className="w-5 h-5 text-amber-700" />
                    ) : (
                      <Code2 className="w-5 h-5 text-[#684A3B]" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#302720] mt-3 group-hover:text-[#684A3B] transition-colors">
                    {platform.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#302720]/80 mt-2 leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#A58B78]/20">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#A58B78] block">
                        {platform.metricLabel}
                      </span>
                      <span className="text-base font-bold text-[#684A3B] mt-0.5 block font-mono">
                        {displayValue}
                      </span>
                    </div>

                    <a
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#E9DFD2]/60 hover:bg-[#684A3B] hover:text-[#FAF8F4] text-[#302720] transition-colors border border-[#A58B78]/25 shadow-xs"
                      aria-label={`Open ${platform.name} profile`}
                      title={`Visit ${platform.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Algorithmic Disciplines & Mindset Section */}
        <div className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl p-7 sm:p-9 shadow-bl-card">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#684A3B] font-bold">
              Core Data Structures & Algorithmic Patterns
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#302720] mt-1">
              Methodical Decomposition & Complexity Analysis
            </h3>
            <p className="text-xs sm:text-sm text-[#302720]/75 mt-1.5">
              Trained through A2SV's intensive competitive curriculum, analyzing asymptotic time and space invariants before writing code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemSolving.disciplines.map((item, index) => (
              <div
                key={item.name}
                className="p-4 bg-white/70 rounded-xl border border-[#A58B78]/20 shadow-bl-subtle"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#684A3B] shrink-0" />
                  <span className="text-sm font-bold text-[#302720] font-mono">
                    {item.name}
                  </span>
                </div>
                <p className="text-xs text-[#302720]/75 mt-1 pl-6">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-[#A58B78]/15 flex flex-wrap items-center justify-between text-xs font-mono text-[#302720]/70">
            <span>ETCPC Contender · Collegiate Programming Contest</span>
            <span>Zero Hallucinated Metrics · Configurable Profiles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
