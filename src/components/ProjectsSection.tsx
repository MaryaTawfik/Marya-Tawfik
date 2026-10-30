import React, { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Layers, Mic, Search, BookOpen, Database, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolioData";
import { ProjectDetailModal } from "./ProjectDetailModal";

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "backend") return p.category.includes("Backend") || p.id === "srahub";
    if (filter === "ai-rag") return p.category.includes("AI") || p.category.includes("Privacy");
    return true;
  });

  // Tasteful custom architectural preview for each project
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case "safelink":
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#FAF8F4] to-[#E9DFD2] p-4 flex flex-col justify-between border-b border-[#A58B78]/20 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#684A3B]">
              <span className="flex items-center gap-1.5 font-semibold">
                <Mic className="w-3.5 h-3.5" /> Voice-Preserving Ingress
              </span>
              <span className="flex items-center gap-1 text-[#302720]/70">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Zero Identifiers
              </span>
            </div>

            {/* Architecture schematic flow */}
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 bg-white/80 rounded-lg border border-[#A58B78]/25 text-center shadow-xs">
                <span className="block text-[10px] text-[#A58B78] font-mono">STEP 1</span>
                <span className="text-xs font-bold text-[#302720]">Voice Query</span>
              </div>
              <div className="p-2 bg-[#684A3B] text-[#FAF8F4] rounded-lg border border-[#684A3B] text-center shadow-xs">
                <span className="block text-[10px] text-[#E9DFD2] font-mono">STEP 2</span>
                <span className="text-xs font-bold">Anonymous Triage</span>
              </div>
              <div className="p-2 bg-white/80 rounded-lg border border-[#A58B78]/25 text-center shadow-xs">
                <span className="block text-[10px] text-[#A58B78] font-mono">STEP 3</span>
                <span className="text-xs font-bold text-[#302720]">Advisor Bridge</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#302720]/60 flex items-center justify-between">
              <span>Ephemeral Session Protocol</span>
              <span>Encrypted Transit</span>
            </div>
          </div>
        );

      case "srahub":
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#FAF8F4] to-[#E9DFD2] p-4 flex flex-col justify-between border-b border-[#A58B78]/20 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#684A3B]">
              <span className="flex items-center gap-1.5 font-semibold">
                <Database className="w-3.5 h-3.5" /> High-Throughput REST APIs
              </span>
              <span className="text-[10px] text-[#302720]/70">Sub-50ms Indexing</span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="p-2.5 bg-white/85 rounded-lg border border-[#A58B78]/25 shadow-xs">
                <span className="text-[10px] font-mono text-[#684A3B] uppercase block">Employer RBAC</span>
                <span className="text-xs font-semibold text-[#302720]">Role Specification & Query Filter</span>
              </div>
              <div className="p-2.5 bg-white/85 rounded-lg border border-[#A58B78]/25 shadow-xs">
                <span className="text-[10px] font-mono text-[#684A3B] uppercase block">Candidate Matching</span>
                <span className="text-xs font-semibold text-[#302720]">Relational Index & Status Machine</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#302720]/60 flex items-center justify-between">
              <span>PostgreSQL Schema Engine</span>
              <span>ACID Guarantees</span>
            </div>
          </div>
        );

      case "smart-campus":
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#FAF8F4] to-[#E9DFD2] p-4 flex flex-col justify-between border-b border-[#A58B78]/20 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#684A3B]">
              <span className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> RAG & Vector Retrieval
              </span>
              <span className="text-[10px] text-[#302720]/70">Verifiable Grounding</span>
            </div>

            <div className="flex items-center justify-between gap-1.5 my-auto bg-white/70 p-2.5 rounded-xl border border-[#A58B78]/20 text-center">
              <div className="text-center px-1">
                <span className="block text-[9px] font-mono text-[#A58B78]">PDF INGEST</span>
                <span className="text-xs font-bold text-[#302720]">Chunking</span>
              </div>
              <span className="text-xs text-[#A58B78]">→</span>
              <div className="text-center px-1 bg-[#684A3B] text-[#FAF8F4] py-1 px-2 rounded-md">
                <span className="block text-[9px] font-mono text-[#E9DFD2]">EMBEDDINGS</span>
                <span className="text-xs font-bold">Vector Search</span>
              </div>
              <span className="text-xs text-[#A58B78]">→</span>
              <div className="text-center px-1">
                <span className="block text-[9px] font-mono text-[#A58B78]">SYNTHESIS</span>
                <span className="text-xs font-bold text-[#302720]">Citations</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#302720]/60 flex items-center justify-between">
              <span>Academic Corpus Indexing</span>
              <span>Hallucination Reduction</span>
            </div>
          </div>
        );

      case "library-management":
      default:
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#FAF8F4] to-[#E9DFD2] p-4 flex flex-col justify-between border-b border-[#A58B78]/20 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#684A3B]">
              <span className="flex items-center gap-1.5 font-semibold">
                <BookOpen className="w-3.5 h-3.5" /> Transactional State Machine
              </span>
              <span className="text-[10px] text-[#302720]/70">Inventory Consistency</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 bg-white/80 rounded-lg border border-[#A58B78]/25 text-center">
                <span className="block text-[9px] font-mono text-[#684A3B]">CATALOG</span>
                <span className="text-xs font-bold text-[#302720]">ISBN Index</span>
              </div>
              <div className="p-2 bg-white/80 rounded-lg border border-[#A58B78]/25 text-center">
                <span className="block text-[9px] font-mono text-[#684A3B]">BORROWING</span>
                <span className="text-xs font-bold text-[#302720]">Atomic Lock</span>
              </div>
              <div className="p-2 bg-white/80 rounded-lg border border-[#A58B78]/25 text-center">
                <span className="block text-[9px] font-mono text-[#684A3B]">AUDITING</span>
                <span className="text-xs font-bold text-[#302720]">Ledger Logs</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#302720]/60 flex items-center justify-between">
              <span>Concurrency Safe</span>
              <span>Full-Stack Architecture</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#FAF8F4] relative border-t border-[#A58B78]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#684A3B] uppercase">
              02. Featured Engineering Projects
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#302720] tracking-tight">
              Architected for Reliability & Real Impact
            </h2>
            <p className="mt-3 text-base text-[#302720]/80">
              A curated selection of backend-driven systems, privacy-first architectures, and full-stack solutions.
            </p>
          </div>

          {/* Interactive filter tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#E9DFD2]/60 rounded-xl border border-[#A58B78]/20 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === "all"
                  ? "bg-[#684A3B] text-[#FAF8F4] shadow-sm"
                  : "text-[#302720] hover:text-[#684A3B]"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("backend")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === "backend"
                  ? "bg-[#684A3B] text-[#FAF8F4] shadow-sm"
                  : "text-[#302720] hover:text-[#684A3B]"
              }`}
            >
              Backend & Systems
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai-rag")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filter === "ai-rag"
                  ? "bg-[#684A3B] text-[#FAF8F4] shadow-sm"
                  : "text-[#302720] hover:text-[#684A3B]"
              }`}
            >
              AI · RAG · Privacy
            </button>
          </div>
        </div>

        {/* Projects Grid with Asymmetric Bottom-Left Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl overflow-hidden shadow-bl-card hover:shadow-bl-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Visual Architecture Representation */}
                {renderProjectVisual(project.id)}

                <div className="p-6 sm:p-7">
                  {/* Category as Clean Unboxed Text with Separators */}
                  <div className="text-xs font-mono text-[#684A3B] font-medium tracking-tight mb-2 flex items-center gap-2">
                    <span>{project.category}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-[#302720] group-hover:text-[#684A3B] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-[#A58B78] group-hover:text-[#684A3B] transition-colors p-1"
                      aria-label={`Open architecture details for ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm sm:text-base text-[#302720]/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technical Highlights list */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-[#A58B78]/20">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A58B78] block">
                      Engineering Focus
                    </span>
                    <div className="space-y-1.5">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#302720]/85">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#684A3B] mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clean Technologies list */}
                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-[#302720]">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#E9DFD2]/60 rounded-md border border-[#A58B78]/20 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[11px] text-[#A58B78]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-[#A58B78]/15 mt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-[#684A3B] hover:text-[#302720] inline-flex items-center gap-1.5 transition-colors py-2"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#E9DFD2]/60 hover:bg-[#684A3B] hover:text-[#FAF8F4] text-[#302720] transition-colors border border-[#A58B78]/25"
                      aria-label={`${project.title} GitHub Repository`}
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#E9DFD2]/60 hover:bg-[#684A3B] hover:text-[#FAF8F4] text-[#302720] transition-colors border border-[#A58B78]/25"
                      aria-label={`${project.title} Live Demo`}
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-[#A58B78] px-2 py-1 rounded bg-[#E9DFD2]/30">
                      Repo Demo
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Architecture Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
