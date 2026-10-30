import React, { useState } from "react";
import { PORTFOLIO } from "../data/portfolio";

export const Contact: React.FC = () => {
  const { meta, socials, contact } = PORTFOLIO;

  // Chat interaction state
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showReply, setShowReply] = useState<boolean>(false);

  // Copy email state
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
    setIsTyping(true);
    setShowReply(false);

    // 0.9s typing indicator
    setTimeout(() => {
      setIsTyping(false);
      setShowReply(true);
    }, 900);
  };

  const handleResetChat = () => {
    setSelectedOptionId(null);
    setIsTyping(false);
    setShowReply(false);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(meta.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // Fallback: select text
      const textArea = document.createElement("textarea");
      textArea.value = meta.email;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {}
      document.body.removeChild(textArea);
    }
  };

  const currentOption = contact.chat.options.find((o) => o.id === selectedOptionId);

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--fg)]">
            Let's <span className="marker-hl">talk</span>
          </h2>
          <p className="mt-2 text-base text-[var(--muted)] font-mono-code">
            Interested in working together or discussing backend engineering? Say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Interactive Chat Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[var(--panel)] border-2 border-[var(--fg)] rounded-[22px] shadow-hard-large overflow-hidden flex flex-col justify-between min-h-[440px]">
              {/* Header: 'M' Avatar, 'Marya', 'Usually replies within a day' */}
              <div className="px-5 py-4 bg-[var(--panel2)] border-b-2 border-[var(--fg)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--a1)] border-2 border-[var(--fg)] flex items-center justify-center font-display font-extrabold text-base text-[var(--on-a1)] shadow-hard-sm">
                  M
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[var(--fg)] leading-tight">
                    Marya
                  </h4>
                  <span className="font-mono-code text-xs text-[var(--muted)] block">
                    Usually replies within a day
                  </span>
                </div>
              </div>

              {/* Chat Conversation Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1">
                {/* Initial bot message */}
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="p-3.5 bg-[var(--bg)] border-2 border-[var(--fg)] rounded-[18px] rounded-tl-sm text-sm font-mono-code text-[var(--fg)] shadow-hard-sm">
                    {contact.chat.initialMessage}
                  </div>
                </div>

                {/* Visitor reply bubble (a1 fill) */}
                {selectedOptionId && currentOption && (
                  <div className="flex justify-end">
                    <div className="p-3.5 bg-[var(--a1)] border-2 border-[var(--fg)] text-[var(--on-a1)] rounded-[18px] rounded-tr-sm text-sm font-mono-code font-bold shadow-hard-sm">
                      {currentOption.label}
                    </div>
                  </div>
                )}

                {/* 0.9s Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 p-3 bg-[var(--bg)] border-2 border-[var(--fg)] rounded-[18px] rounded-tl-sm w-16 shadow-hard-sm">
                    <span className="w-2 h-2 rounded-full bg-[var(--fg)] animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-[var(--fg)] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-[var(--fg)] animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}

                {/* Marya's Response Bubble + Email + Start over button */}
                {showReply && currentOption && (
                  <div className="space-y-4 pt-1">
                    <div className="flex items-start gap-2 max-w-[88%]">
                      <div className="p-3.5 bg-[var(--bg)] border-2 border-[var(--fg)] rounded-[18px] rounded-tl-sm text-sm font-mono-code text-[var(--fg)] shadow-hard-sm leading-relaxed">
                        {currentOption.reply}
                      </div>
                    </div>

                    <div className="p-3 bg-[var(--panel2)] border-2 border-[var(--fg)] rounded-[14px] text-xs font-mono-code text-[var(--fg)] flex items-center justify-between shadow-hard-sm">
                      <span>Reach me at: <strong>{meta.email}</strong></span>
                      <a
                        href={`mailto:${meta.email}`}
                        className="px-2.5 py-1 rounded-full bg-[var(--a1)] text-[var(--on-a1)] border border-[var(--fg)] font-bold text-[11px] hover:underline"
                      >
                        Send Email ↗
                      </a>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleResetChat}
                        className="px-4 py-2 rounded-full bg-[var(--panel)] border-2 border-[var(--fg)] font-mono-code text-xs font-bold text-[var(--fg)] btn-lift shadow-hard-sm cursor-pointer"
                      >
                        ↺ Start over
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Choice Buttons at bottom if not replied */}
              {!selectedOptionId && (
                <div className="p-4 sm:p-5 bg-[var(--panel2)] border-t-2 border-[var(--fg)]">
                  <span className="font-mono-code text-[11px] font-bold text-[var(--muted)] uppercase tracking-wider block mb-2.5">
                    Choose a reply:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {contact.chat.options.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt.id)}
                        className="px-4 py-2 rounded-full bg-[var(--panel)] border-2 border-[var(--fg)] text-[var(--fg)] font-mono-code font-bold text-xs sm:text-sm shadow-hard-sm btn-lift cursor-pointer hover:bg-[var(--a1)] transition-colors"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Display Email, Copy Button & Social Profiles */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-8">
            <div>
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--dim)] block mb-1">
                Direct Inquiries
              </span>
              <a
                href={`mailto:${meta.email}`}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[var(--fg)] hover:text-[var(--atext)] transition-colors break-all underline decoration-2 underline-offset-8"
              >
                {meta.email}
              </a>
            </div>

            {/* Copy Email Button */}
            <div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-6 py-3 rounded-full bg-[var(--a1)] text-[var(--on-a1)] font-display font-bold text-sm sm:text-base border-2 border-[var(--fg)] shadow-hard-card btn-lift flex items-center gap-2 cursor-pointer"
              >
                <span>{copied ? "✓ Copied to clipboard!" : "Copy email"}</span>
              </button>
            </div>

            {/* Links: GitHub, LinkedIn, Codeforces, LeetCode */}
            <div className="w-full pt-4 border-t-2 border-[var(--fg)]">
              <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--dim)] block mb-3">
                Elsewhere on the web
              </span>
              <div className="grid grid-cols-2 gap-3 font-mono-code text-sm font-bold">
                <a
                  href="https://github.com/MaryaTawfik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[14px] bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm text-[var(--fg)] hover:bg-[var(--a1)] transition-colors flex items-center justify-between"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://linkedin.com/in/marya-tawfik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[14px] bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm text-[var(--fg)] hover:bg-[var(--a1)] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://codeforces.com/profile/MaryaTawfik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[14px] bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm text-[var(--fg)] hover:bg-[var(--a1)] transition-colors flex items-center justify-between"
                >
                  <span>Codeforces</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://leetcode.com/u/MaryaTawfik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-[14px] bg-[var(--panel)] border-2 border-[var(--fg)] shadow-hard-sm text-[var(--fg)] hover:bg-[var(--a1)] transition-colors flex items-center justify-between"
                >
                  <span>LeetCode</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
