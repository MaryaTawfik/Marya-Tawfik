import React from "react";
import { CheckCircle2, Milestone, Terminal, Trophy, Sparkles } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const milestones = [
    {
      year: "2026",
      title: "A2SVian Technical Training",
      organization: "Africa to Silicon Valley (A2SV)",
      description:
        "Selected for rigorous algorithmic problem-solving, advanced data structures, and production-grade engineering principles.",
      badge: "Core Engineering",
    },
    {
      year: "2026",
      title: "ETCPC Collegiate Contestant",
      organization: "Ethiopian Collegiate Programming Contest",
      description:
        "Collaborated under contest pressure to solve algorithmic challenges requiring graph traversal, dynamic programming, and edge-case verification.",
      badge: "Competitive Contest",
    },
    {
      year: "2026",
      title: "Backend Facilitator & Coordinator",
      organization: "GirlsTech Unilorin & CSEC ASTU",
      description:
        "Led backend curricula, designed workshop modules on REST APIs, and coordinated student-mentor support pipelines.",
      badge: "Leadership & Teaching",
    },
    {
      year: "2025 – Present",
      title: "Full-Stack & Backend Systems Development",
      organization: "Independent & Open Source",
      description:
        "Architecting SafeLink (privacy-first voice triage), SRAHub (candidate indexing), and Smart Campus (vector RAG pipeline).",
      badge: "System Architectures",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F4] relative border-t border-[#A58B78]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#684A3B] uppercase">
            06. Milestones & Technical Trajectory
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-[#302720] tracking-tight">
            Key Milestones
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#302720]/80">
            A concise view of verified technical milestones, community leadership, and collegiate programming endeavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F4] border border-[#A58B78]/25 rounded-2xl p-6 shadow-bl-subtle hover:shadow-bl-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#684A3B] mb-2">
                  <span className="font-bold">{item.year}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-[#E9DFD2] rounded text-[#302720]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#302720]">
                  {item.title}
                </h3>
                <span className="text-xs font-medium text-[#A58B78] block mt-0.5">
                  {item.organization}
                </span>

                <p className="text-xs text-[#302720]/80 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#A58B78]/15 flex items-center gap-1.5 text-[11px] font-mono text-[#684A3B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
