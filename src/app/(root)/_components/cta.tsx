import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <div className="bg-[#111111]  relative pt-32 pb-48 px-6 text-center overflow-hidden">
      {/* Subtle background wave pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 Q 25 40 50 50 T 100 50"
            fill="none"
            stroke="white"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-[#4ade80] mb-8">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
          </svg>
        </div>

        <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] tracking-tight mb-8">
          Now, are you ready to find <br />
          your{" "}
          <span className="text-[#4ade80] italic inline-flex items-center gap-2">
            mentor
            <ArrowUpRight size={40} className="md:size-16" />
          </span>
          ?
        </h2>

        <p className="text-slate-400 text-lg md:text-xl font-medium mb-12">
          Learn From Industry Professionals Offering Their Services
        </p>

        {/* Nav Pills under Headline */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-14">
          {[
            "Creative Writing",
            "Music & Songs",
            "Public Speaking",
            "Sustainability",
          ].map((cat, i) => (
            <div key={cat} className="flex items-center gap-4 md:gap-8">
              {i !== 0 && <div className="w-10 h-[1px] bg-slate-800" />}
              <span
                className={`text-[11px] font-black uppercase tracking-[0.2em] ${cat === "Music & Songs" ? "text-white" : "text-slate-500"}`}
              >
                {cat}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button & Avatar Stack */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <button className="bg-[#4ade80] hover:bg-[#3dbd6d] text-black px-8 py-4 rounded-full flex items-center gap-3 text-[11px] font-black tracking-widest transition-all active:scale-95">
            VIEW ALL MENTORS
            <div className="bg-white/30 p-1 rounded-full">
              <ArrowUpRight size={14} strokeWidth={3} />
            </div>
          </button>

          <div className="flex items-center -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-[3px] border-[#111111] bg-slate-700 shadow-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
