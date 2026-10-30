import React from "react";
import { ArrowDown, Github, Linkedin, ArrowUpRight, Terminal, Award, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { PortraitComposition } from "./PortraitComposition";

export const HeroSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-1/4 right-5 w-96 h-96 bg-[#E9DFD2]/50 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-5 w-80 h-80 bg-[#A58B78]/10 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Primary Message */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Identity Kicker & A2SVian affiliation */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold tracking-widest text-[#684A3B] uppercase font-mono">
                FULL-STACK DEVELOPER · BACKEND FOCUS
              </span>
              <span className="text-[#A58B78]" aria-hidden="true">·</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E9DFD2]/80 border border-[#A58B78]/30 text-xs font-semibold text-[#302720]">
                <Sparkles className="w-3 h-3 text-[#684A3B]" />
                <span>A2SVian</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#302720] tracking-tight leading-[1.12]">
              Building Systems.{" "}
              <span className="block text-[#684A3B]">Solving Problems.</span>
              <span className="block">Empowering Developers.</span>
            </h1>

            {/* Introduction Paragraph */}
            <p className="text-lg sm:text-xl text-[#302720]/85 font-normal leading-relaxed max-w-2xl">
              I'm <strong className="font-semibold text-[#302720]">Marya Tawfik</strong>, a full-stack developer focused on backend engineering. I build practical digital experiences, enjoy competitive programming, and love sharing knowledge through mentoring.
            </p>

            {/* Quick Core Competencies as clean text */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#302720]/75 font-mono">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#684A3B]" />
                Go · FastAPI · Node.js
              </span>
              <span className="text-[#A58B78]" aria-hidden="true">/</span>
              <span>SQL & MongoDB</span>
              <span className="text-[#A58B78]" aria-hidden="true">/</span>
              <span>RAG & Vector Search</span>
              <span className="text-[#A58B78]" aria-hidden="true">/</span>
              <span>Algorithms & DSA</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#684A3B] hover:bg-[#302720] text-[#FAF8F4] font-semibold text-sm rounded-xl shadow-bl-card hover:shadow-bl-hover transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#E9DFD2]/60 text-[#302720] border border-[#684A3B]/40 font-semibold text-sm rounded-xl transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#684A3B]" />
              </a>
            </div>

            {/* Primary Social Links */}
            <div className="pt-4 flex items-center gap-5">
              <span className="text-xs font-semibold text-[#A58B78] uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#E9DFD2]/50 hover:bg-[#E9DFD2] text-[#302720] hover:text-[#684A3B] border border-[#A58B78]/25 transition-all shadow-sm flex items-center gap-2 text-xs font-medium"
                  aria-label="Marya Tawfik LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-[#684A3B]" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#E9DFD2]/50 hover:bg-[#E9DFD2] text-[#302720] hover:text-[#684A3B] border border-[#A58B78]/25 transition-all shadow-sm flex items-center gap-2 text-xs font-medium"
                  aria-label="Marya Tawfik GitHub Profile"
                >
                  <Github className="w-4 h-4 text-[#684A3B]" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Layered Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md">
              <PortraitComposition
                defaultSrc={profile.portraitUrl}
                name={profile.name}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
