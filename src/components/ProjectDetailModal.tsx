import React from "react";
import { X, ExternalLink, Github, Terminal, CheckCircle2, Shield, Layers, Code, AlertCircle } from "lucide-react";
import { ProjectItem } from "../data/portfolioData";

interface ModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F4] border border-[#A58B78]/40 rounded-3xl p-6 sm:p-8 shadow-bl-elevated my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-[#A58B78]/20">
          <div>
            <div className="text-xs font-mono font-medium text-[#684A3B]">
              {project.category}
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#302720] mt-1">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#302720] hover:bg-[#E9DFD2] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tagline & Overview */}
        <div className="mt-5 space-y-4">
          <p className="text-base text-[#302720]/90 leading-relaxed font-medium">
            {project.description}
          </p>

          {/* Role & Contribution */}
          <div className="bg-[#E9DFD2]/50 border border-[#A58B78]/30 rounded-2xl p-4">
            <span className="text-xs font-mono font-bold uppercase text-[#684A3B] tracking-wider block mb-1">
              My Engineering Role
            </span>
            <p className="text-sm font-semibold text-[#302720]">{project.role}</p>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-[#A58B78] tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#684A3B]" />
                <span>Architecture & System Invariants</span>
              </h4>
              <p className="text-sm text-[#302720]/80 leading-relaxed bg-white/60 p-4 rounded-xl border border-[#A58B78]/20">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Technical Highlights */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase text-[#A58B78] tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#684A3B]" />
              <span>Key Technical Highlights</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#302720]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#684A3B] mt-2 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used (Clean unboxed tags) */}
          <div className="pt-2">
            <h4 className="text-xs font-mono font-bold uppercase text-[#A58B78] tracking-wider mb-2">
              Technologies & Standards
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#302720]">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-[#E9DFD2]/60 rounded-md border border-[#A58B78]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Status Note & Link Handlers */}
          <div className="pt-5 border-t border-[#A58B78]/20 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#302720]/70 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>Status: {project.statusText}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#684A3B] text-[#FAF8F4] text-xs font-semibold rounded-xl hover:bg-[#302720] transition-colors shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="text-xs text-[#A58B78] italic">
                  Repository URL pending deployment
                </span>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#E9DFD2] text-[#302720] text-xs font-semibold rounded-xl hover:bg-[#A58B78]/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="text-xs text-[#A58B78] font-mono">
                  [Demo in Staging]
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
