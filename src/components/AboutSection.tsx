import React, { useState } from "react";
import { Server, Brain, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const AboutSection: React.FC = () => {
  const { pillars } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Server, Brain, Users];

  return (
    <section id="about" className="py-24 bg-[#FAF8F4] relative border-t border-[#A58B78]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#684A3B] uppercase">
            01. Philosophy & Engineering Pillars
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#302720] tracking-tight">
            How I Think, Build, and Contribute
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#302720]/80 leading-relaxed">
            As an <strong className="font-semibold text-[#684A3B]">A2SVian</strong> and full-stack software developer with a backend focus, my work is driven by architectural clarity, computational discipline, and a strong conviction in knowledge sharing.
          </p>
        </div>

        {/* Dynamic Editorial Composition: Interactive Tab Navigator & Deep Focus Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Pillar Selectors */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = icons[idx];
              const isSelected = activeTab === idx;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative text-left group ${
                    isSelected
                      ? "bg-[#E9DFD2] border-[#A58B78]/40 shadow-bl-card"
                      : "bg-[#FAF8F4] hover:bg-[#E9DFD2]/40 border-[#A58B78]/20 shadow-bl-subtle"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        isSelected
                          ? "bg-[#684A3B] text-[#FAF8F4]"
                          : "bg-[#E9DFD2]/60 text-[#684A3B] group-hover:bg-[#E9DFD2]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-medium text-[#A58B78]">
                          0{idx + 1}
                        </span>
                        {isSelected && (
                          <span className="text-[11px] font-semibold text-[#684A3B] flex items-center gap-1">
                            <span>Active Pillar</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-[#302720] mt-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#302720]/75 mt-0.5">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Pillar Focus Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl p-8 sm:p-10 shadow-bl-card relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              {/* Background watermark */}
              <div
                className="absolute -right-8 -bottom-8 text-[#E9DFD2]/40 font-extrabold text-9xl select-none pointer-events-none font-mono"
                aria-hidden="true"
              >
                0{activeTab + 1}
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#684A3B]">
                  <span>Pillar 0{activeTab + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pillars[activeTab].subtitle}</span>
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#302720]">
                  {pillars[activeTab].title}
                </h3>

                <p className="mt-4 text-base sm:text-lg text-[#302720]/85 leading-relaxed">
                  {pillars[activeTab].description}
                </p>

                <div className="mt-8 pt-6 border-t border-[#A58B78]/20">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A58B78] mb-3">
                    Core Technical Practice & Mindset
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillars[activeTab].focusAreas.map((area, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-[#302720]">
                        <CheckCircle2 className="w-4 h-4 text-[#684A3B] mt-0.5 shrink-0" />
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* A2SV Context Tag */}
              <div className="mt-8 pt-4 border-t border-[#A58B78]/15 flex items-center justify-between text-xs text-[#302720]/70 font-mono">
                <span>A2SVian Engineering Foundation</span>
                <span>Production Reliability Mindset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
