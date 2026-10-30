import React from "react";
import { Users, GraduationCap, Award, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const MentoringSection: React.FC = () => {
  const { mentoring } = PORTFOLIO_DATA;

  return (
    <section id="mentoring" className="py-24 bg-[#FAF8F4] relative border-t border-[#A58B78]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#684A3B] uppercase">
            05. Teaching & Community Involvement
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#302720] tracking-tight">
            Community & Mentorship
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#302720]/80 leading-relaxed">
            Mentoring and teaching are central to my growth as an engineer. Explaining complex backend concepts, designing exercises, and unblocking peers strengthens my own technical foundation.
          </p>
        </div>

        {/* Editorial Timeline Layout */}
        <div className="relative border-l-2 border-[#A58B78]/25 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {mentoring.map((exp, idx) => (
            <div key={exp.organization} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#FAF8F4] border-2 border-[#684A3B] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#684A3B]" />
              </div>

              {/* Timeline Card */}
              <div className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl p-6 sm:p-8 shadow-bl-card hover:shadow-bl-hover transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#A58B78]/20">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#684A3B]">
                      <span className="font-semibold">{exp.period}</span>
                      {exp.location && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#302720]/70">{exp.location}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#302720] mt-1">
                      {exp.organization}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E9DFD2] rounded-xl text-xs font-bold text-[#684A3B] self-start sm:self-auto border border-[#A58B78]/25">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mt-5 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A58B78] font-bold block">
                    Core Responsibilities & Teaching Focus
                  </span>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#302720]/85">
                        <CheckCircle className="w-4 h-4 text-[#684A3B] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Demonstrated */}
                <div className="mt-6 pt-4 border-t border-[#A58B78]/15">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A58B78] block mb-2">
                    Competencies Demonstrated
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#302720]">
                    {exp.skillsDemonstrated.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-[#E9DFD2]/60 rounded-md border border-[#A58B78]/20 text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Ethos Banner */}
        <div className="mt-16 bg-[#E9DFD2]/50 border border-[#A58B78]/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-bl-subtle">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-[#684A3B] text-[#FAF8F4] rounded-2xl shrink-0 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#302720]">
                Fostering Inclusive Engineering Spaces
              </h4>
              <p className="text-xs sm:text-sm text-[#302720]/80 mt-0.5">
                Dedicated to encouraging women in tech through GirlsTech and mentoring computer science students across university clubs.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-4 py-2.5 bg-[#684A3B] hover:bg-[#302720] text-[#FAF8F4] text-xs font-semibold rounded-xl transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Invite to Mentor or Speak</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
