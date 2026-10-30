import React, { useState } from "react";
import { Mail, Copy, Check, Send, Linkedin, Github, ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Direct mailto link preparation so no messages are silently discarded
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F4] relative border-t border-[#A58B78]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Invitation & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#684A3B] uppercase">
                07. Get in Touch
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#302720] tracking-tight">
                Have a Problem Worth Solving?
              </h2>
              <p className="mt-4 text-base text-[#302720]/85 leading-relaxed">
                I'm always interested in meaningful engineering challenges, opportunities to learn, and collaborations that turn ideas into useful software.
              </p>
            </div>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-2xl p-5 shadow-bl-card">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A58B78] block mb-2">
                Direct Email Channel
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-[#684A3B] hover:underline truncate"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#E9DFD2]/70 hover:bg-[#684A3B] hover:text-[#FAF8F4] text-[#302720] transition-colors shrink-0 border border-[#A58B78]/25 shadow-xs"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] font-mono text-emerald-700 mt-2 flex items-center gap-1 animate-fadeIn">
                  <Check className="w-3 h-3" /> Copied to clipboard!
                </p>
              )}
            </div>

            {/* Professional Profiles */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A58B78] block">
                Professional Networks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#E9DFD2]/40 hover:bg-[#E9DFD2] border border-[#A58B78]/25 transition-all shadow-bl-subtle flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-5 h-5 text-[#684A3B]" />
                    <span className="text-sm font-semibold text-[#302720]">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A58B78] group-hover:text-[#684A3B] transition-colors" />
                </a>

                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#E9DFD2]/40 hover:bg-[#E9DFD2] border border-[#A58B78]/25 transition-all shadow-bl-subtle flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-5 h-5 text-[#684A3B]" />
                    <span className="text-sm font-semibold text-[#302720]">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A58B78] group-hover:text-[#684A3B] transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability status */}
            <div className="p-4 rounded-2xl bg-white/70 border border-[#A58B78]/20 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <div className="text-xs text-[#302720]/80">
                <strong className="text-[#302720] font-semibold block">Actively Seeking Opportunities</strong>
                <span>Open for Software Engineering internships, full-time backend positions, and technical collaborations.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl p-6 sm:p-9 shadow-bl-card">
              <div className="flex items-center justify-between pb-4 border-b border-[#A58B78]/20">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#684A3B]" />
                  <h3 className="text-lg font-bold text-[#302720]">Send a Message</h3>
                </div>
                <span className="text-xs font-mono text-[#A58B78]">
                  Verified Ingress
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#302720]">Message Prepared!</h4>
                  <p className="text-sm text-[#302720]/80 max-w-md mx-auto">
                    Your email client has been opened with your message ready to send directly to Marya.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-mono font-semibold text-[#684A3B] underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-semibold text-[#302720] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Chen"
                        className="w-full px-4 py-2.5 bg-white text-sm text-[#302720] rounded-xl border border-[#A58B78]/30 focus:border-[#684A3B] focus:ring-1 focus:ring-[#684A3B] transition-colors"
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-semibold text-[#302720] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 bg-white text-sm text-[#302720] rounded-xl border border-[#A58B78]/30 focus:border-[#684A3B] focus:ring-1 focus:ring-[#684A3B] transition-colors"
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-semibold text-[#302720] mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Software Engineering Internship / Project Discussion"
                      className="w-full px-4 py-2.5 bg-white text-sm text-[#302720] rounded-xl border border-[#A58B78]/30 focus:border-[#684A3B] focus:ring-1 focus:ring-[#684A3B] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-semibold text-[#302720] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share details about the role, project, or problem you would like to collaborate on..."
                      className="w-full px-4 py-2.5 bg-white text-sm text-[#302720] rounded-xl border border-[#A58B78]/30 focus:border-[#684A3B] focus:ring-1 focus:ring-[#684A3B] transition-colors resize-none"
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-600 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#684A3B] hover:bg-[#302720] text-[#FAF8F4] font-semibold text-sm rounded-xl shadow-bl-card hover:shadow-bl-hover transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Message to Marya</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-[11px] text-[#302720]/60 font-mono">
                    Direct communication directly routes to {profile.email}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
