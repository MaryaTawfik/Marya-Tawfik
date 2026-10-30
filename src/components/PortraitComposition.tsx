import React, { useState, useRef } from "react";
import { Upload, Sparkles, Terminal, CheckCircle2, RefreshCw } from "lucide-react";

interface PortraitProps {
  defaultSrc?: string;
  name: string;
}

export const PortraitComposition: React.FC<PortraitProps> = ({
  defaultSrc = "/portrait.jpg",
  name,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [imgError, setImgError] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if defaultSrc exists initially
  React.useEffect(() => {
    const testImg = new Image();
    testImg.src = defaultSrc;
    testImg.onload = () => {
      setImgSrc(defaultSrc);
      setImgError(false);
    };
    testImg.onerror = () => {
      // If /portrait.jpg is not yet placed in public directory, fall back to authentic graphic composition
      setImgError(true);
    };
  }, [defaultSrc]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImgSrc(objectUrl);
      setImgError(false);
    }
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto lg:max-w-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative angled background card */}
      <div
        className="absolute inset-0 bg-[#E9DFD2] rounded-3xl transform rotate-3 transition-transform duration-500 ease-out -z-10 shadow-bl-card opacity-85"
        style={{ transform: isHovered ? "rotate(4deg) scale(1.02)" : "rotate(2.5deg)" }}
        aria-hidden="true"
      />

      {/* Decorative subtle ambient warm glow */}
      <div
        className="absolute -top-6 -left-6 w-36 h-36 bg-[#A58B78]/15 rounded-full blur-2xl -z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Portrait Frame with bottom-left shadow & glass accents */}
      <div className="relative bg-[#FAF8F4] border border-[#A58B78]/30 rounded-3xl p-3 shadow-bl-hover overflow-hidden transition-all duration-300">
        {/* Soft corner accents */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF8F4] to-[#E9DFD2]/60 flex flex-col items-center justify-center border border-[#A58B78]/20">
          {imgSrc && !imgError ? (
            <img
              src={imgSrc}
              alt={`Portrait of ${name}`}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
            />
          ) : (
            /* Authentic Monogram & Engineering Silhouette (No random stock person) */
            <div className="w-full h-full flex flex-col items-center justify-between p-8 text-center bg-gradient-to-br from-[#FAF8F4] via-[#E9DFD2]/70 to-[#FAF8F4]">
              {/* Top status */}
              <div className="flex items-center gap-2 px-3 py-1 bg-white/70 backdrop-blur-md rounded-full border border-[#A58B78]/30 text-xs font-medium text-[#684A3B]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Marya's Dedicated Portrait Slot</span>
              </div>

              {/* Center Monogram Graphic */}
              <div className="flex flex-col items-center my-auto">
                <div className="relative w-32 h-32 rounded-3xl bg-[#684A3B] text-[#FAF8F4] flex items-center justify-center shadow-bl-card border-2 border-[#FAF8F4]">
                  <span className="text-4xl font-bold tracking-tight font-sans">MT</span>
                  <div className="absolute -bottom-2 -right-2 p-1.5 bg-[#FAF8F4] rounded-xl border border-[#A58B78]/30 text-[#684A3B] shadow-sm">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="mt-4 font-bold text-lg text-[#302720]">{name}</h3>
                <p className="text-xs text-[#684A3B] font-medium tracking-wide">
                  Full-Stack · Backend Focus · A2SVian
                </p>
              </div>

              {/* Bottom Photo Upload & Preview Trigger */}
              <div className="w-full pt-4 border-t border-[#A58B78]/20">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-white/80 hover:bg-[#684A3B] hover:text-[#FAF8F4] text-[#302720] border border-[#A58B78]/30 rounded-xl text-xs font-semibold transition-all shadow-sm group"
                >
                  <Upload className="w-3.5 h-3.5 text-[#684A3B] group-hover:text-[#FAF8F4] transition-colors" />
                  <span>Preview Your Actual Photo</span>
                </button>
                <p className="mt-1.5 text-[10px] text-[#302720]/60">
                  Select your portrait file to preview live in this frame
                </p>
              </div>
            </div>
          )}

          {/* Quick Change / Reset overlay if image is loaded */}
          {imgSrc && !imgError && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Change or preview another photo"
                className="p-2 bg-white/80 hover:bg-white text-[#302720] backdrop-blur-md rounded-xl border border-[#A58B78]/30 shadow-sm transition-all text-xs flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#684A3B]" />
              </button>
            </div>
          )}

          {/* Hidden file input for uploading Marya's actual photograph */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
            aria-label="Upload personal portrait photo"
          />
        </div>

        {/* Floating Glassmorphic Badges */}
        <div className="absolute -bottom-3 -left-3 bg-[#FAF8F4]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#A58B78]/30 shadow-bl-card flex items-center gap-2 text-xs font-medium text-[#302720]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span className="font-semibold text-[#684A3B]">Open to Opportunities</span>
        </div>

        <div className="absolute top-5 -left-4 bg-[#684A3B] text-[#FAF8F4] px-3 py-1.5 rounded-xl shadow-bl-subtle text-[11px] font-semibold tracking-wider flex items-center gap-1.5 border border-[#FAF8F4]/20">
          <Sparkles className="w-3 h-3 text-[#E9DFD2]" />
          <span>A2SVian</span>
        </div>
      </div>
    </div>
  );
};
