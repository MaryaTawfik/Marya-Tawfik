import React, { useState } from "react";
import { Server, Database, Sparkles, Layout, Cpu, Check, Code2, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const categoryIcons = [
    Server,    // Backend Development
    Database,  // Databases & Storage
    Sparkles,  // AI & Retrieval
    Layout,    // Frontend Development
    Cpu,       // Computer Science & Problem Solving
  ];

  const activeCategory = skillCategories[selectedCategoryIndex];
  const Icon = categoryIcons[selectedCategoryIndex];

  return (
    <section id="skills" className="py-24 bg-[#FAF8F4] relative border-t border-[#A58B78]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-[#684A3B] uppercase">
            03. Technical Capabilities & Core Tools
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#302720] tracking-tight">
            Systems, Languages & Engineering Stack
          </h2>
          <p className="mt-3 text-base text-[#302720]/80">
            Organized by functional domain. Clear architectural focus without arbitrary proficiency meters or marketing percentages.
          </p>
        </div>

        {/* Category Navigation Pills (Interactive Tabs) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#E9DFD2]/50 rounded-2xl border border-[#A58B78]/25 mb-10">
          {skillCategories.map((cat, idx) => {
            const TabIcon = categoryIcons[idx];
            const isSelected = selectedCategoryIndex === idx;

            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-[#684A3B] text-[#FAF8F4] shadow-sm"
                    : "text-[#302720] hover:bg-[#E9DFD2] hover:text-[#684A3B]"
                }`}
              >
                <TabIcon className="w-4 h-4 shrink-0" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Showcase */}
        <div className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl p-6 sm:p-10 shadow-bl-card transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#A58B78]/20 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#E9DFD2] text-[#684A3B] rounded-2xl border border-[#A58B78]/30">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#302720]">
                  {activeCategory.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#302720]/75 mt-0.5">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-[#A58B78] flex items-center gap-1.5">
              <span>{activeCategory.skills.length} Core Areas</span>
            </div>
          </div>

          {/* Detailed Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {activeCategory.skills.map((skill, i) => (
              <div
                key={skill.name}
                className="p-5 bg-white/70 hover:bg-[#E9DFD2]/40 rounded-2xl border border-[#A58B78]/25 transition-all duration-200 shadow-bl-subtle flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-[#302720] group-hover:text-[#684A3B] transition-colors font-mono">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[#A58B78]">0{i + 1}</span>
                  </div>
                  <p className="text-xs text-[#302720]/80 mt-2.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#A58B78]/15 flex items-center justify-between text-[11px] font-mono text-[#684A3B]">
                  <span>Applied In Production</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Summary of All Competencies */}
          <div className="mt-10 pt-6 border-t border-[#A58B78]/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#302720]/70">
            <span>Engineering Stack · Microservices · APIs · Algorithms</span>
            <span className="text-[#684A3B] font-semibold">Ready for Full-Stack & Backend Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
