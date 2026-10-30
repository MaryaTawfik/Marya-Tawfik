import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["home", "about", "projects", "skills", "mentoring", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    // { name: "Experience", href: "#experience", id: "experience" },
    // { name: "Problem Solving", href: "#problem-solving", id: "problem-solving" },
    { name: "Mentoring", href: "#mentoring", id: "mentoring" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3.5 shadow-bl-subtle" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Marya Tawfik Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#684A3B] text-[#FAF8F4] flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm transition-transform group-hover:scale-105">
              MT
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[#302720] group-hover:text-[#684A3B] transition-colors">
                Marya Tawfik
              </span>
              <span className="text-[10px] uppercase font-medium tracking-wider text-[#A58B78] -mt-0.5">
                Backend · Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? "text-[#684A3B] font-semibold" : "text-[#302720]/80 hover:text-[#302720]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#684A3B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Resume Button & Let's Connect */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#684A3B] bg-[#E9DFD2]/60 hover:bg-[#E9DFD2] border border-[#A58B78]/30 rounded-xl transition-all shadow-sm"
              title="View Résumé Information"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Résumé</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#684A3B] hover:bg-[#302720] text-[#FAF8F4] text-xs font-semibold rounded-xl shadow-bl-subtle hover:shadow-bl-card transition-all"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="px-3 py-1.5 bg-[#684A3B] text-[#FAF8F4] text-xs font-semibold rounded-lg shadow-sm"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#302720] hover:text-[#684A3B] focus:outline-none rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-surface border-b border-[#A58B78]/20 px-6 py-5 shadow-bl-card animate-fadeIn">
          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1 transition-colors ${
                  activeSection === link.id
                    ? "text-[#684A3B] font-semibold"
                    : "text-[#302720]/80 hover:text-[#684A3B]"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-[#A58B78]/20 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal?.();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#684A3B] bg-[#E9DFD2] rounded-xl"
              >
                <FileText className="w-4 h-4" />
                <span>View Résumé Details</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold bg-[#684A3B] text-[#FAF8F4] rounded-xl shadow-bl-subtle"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
