import React from "react";
import { X, FileText, Download, CheckCircle2, Mail, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { profile } = PORTFOLIO_DATA;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/45 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F4] border border-[#A58B78]/40 rounded-3xl p-6 sm:p-8 shadow-bl-elevated my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#A58B78]/20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E9DFD2] text-[#684A3B]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-xl sm:text-2xl font-bold text-[#302720]">
                Marya Tawfik — Résumé Overview
              </h3>
              <p className="text-xs text-[#684A3B] font-mono mt-0.5">
                Full-Stack Developer · Backend Focus · A2SVian
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#302720] hover:bg-[#E9DFD2] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A58B78] mb-1.5">
              Profile Summary
            </h4>
            <p className="text-sm text-[#302720]/85 leading-relaxed bg-white/60 p-4 rounded-2xl border border-[#A58B78]/20">
              Backend-focused full-stack engineer and competitive programmer with intensive training through Africa to Silicon Valley (A2SV). Experienced in building privacy-conscious architectures (SafeLink), high-throughput talent platforms (SRAHub), and academic RAG pipelines (Smart Campus). Proven mentor and coordinator across multiple engineering cohorts.
            </p>
          </div>

          {/* Quick Technical Inventory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#E9DFD2]/40 rounded-2xl border border-[#A58B78]/20">
              <span className="text-xs font-mono font-bold text-[#684A3B] uppercase block mb-1">
                Backend & Data
              </span>
              <p className="text-xs text-[#302720]/80 leading-relaxed font-mono">
                Go, FastAPI, Node.js, REST APIs, WebSockets, SQL (PostgreSQL), MongoDB
              </p>
            </div>

            <div className="p-4 bg-[#E9DFD2]/40 rounded-2xl border border-[#A58B78]/20">
              <span className="text-xs font-mono font-bold text-[#684A3B] uppercase block mb-1">
                Frontend & Systems
              </span>
              <p className="text-xs text-[#302720]/80 leading-relaxed font-mono">
                React, Next.js, TypeScript, Tailwind CSS, RAG, Data Structures & Algorithms
              </p>
            </div>
          </div>

          {/* Core Affiliation */}
          <div className="p-4 rounded-2xl bg-white/70 border border-[#A58B78]/25 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#684A3B]">Affiliation</span>
              <p className="text-sm font-bold text-[#302720]">Africa to Silicon Valley (A2SV)</p>
              <p className="text-xs text-[#302720]/75">Data Structures, Algorithms & Software Engineering Academy</p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 bg-[#684A3B] text-[#FAF8F4] rounded-lg">
              A2SVian
            </span>
          </div>

          {/* Document download options */}
          <div className="pt-4 border-t border-[#A58B78]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-[#302720]/70 font-mono">
              Direct inquiries: <span className="font-semibold">{profile.email}</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`mailto:${profile.email}?subject=Request for Marya Tawfik's Résumé`}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#684A3B] hover:bg-[#302720] text-[#FAF8F4] text-xs font-semibold rounded-xl transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request Updated PDF Copy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
