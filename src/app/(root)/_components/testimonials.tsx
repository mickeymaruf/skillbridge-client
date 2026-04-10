import React from "react";
import { Star } from "lucide-react";

export default function AccurateStorySection() {
  return (
    <section className="bg-[#111311] text-white py-32 px-4 overflow-visible flex flex-col items-center">
      {/* Editorial Header */}
      <div className="max-w-4xl text-center mb-24 relative z-10">
        <h2 className="font-serif text-[32px] md:text-[42px] leading-[1.3] tracking-tight text-[#e0e0e0]">
          Over the next 5 years{" "}
          <span className="text-[#4ade80] inline-flex items-center gap-2 font-black uppercase tracking-tighter text-[26px] md:text-[34px]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="translate-y-1"
            >
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
            </svg>
            Mentorable
          </span>{" "}
          found itself surrounded by presentations all over again and the
          question never stopped...
        </h2>
      </div>

      {/* Main Anchor Container */}
      <div className="relative w-full max-w-[420px] aspect-[4/5.2]">
        {/* The Central Mentor Image */}
        <div className="w-full h-full rounded-[48px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative z-10">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
            alt="Speaker"
            className="w-full h-full object-cover"
          />
          {/* Watermark 4.9 */}
          <div className="absolute top-12 left-12 flex items-baseline gap-2 pointer-events-none">
            <span className="text-7xl font-black tracking-tighter text-white/90 drop-shadow-lg">
              4.9
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
              RATING
            </span>
          </div>
        </div>

        {/* SCATTERED TESTIMONIALS 
            Spacing maintained exactly as per design
        */}

        {/* LEFT CLUSTER */}
        <TestimonialCard
          className="top-[5%] -left-[65%] bg-[#1a1d1a]/95" // High & Far Left
          name="ALEXANDRA CHABON"
        />

        <TestimonialCard
          className="top-[42%] -left-[30%] bg-[#141714]/90" // Tucked Mid-Left
          name="ALEXANDRA CHABON"
        />

        <TestimonialCard
          className="bottom-[10%] -left-[60%] bg-[#111411]/95" // Low & Far Left
          name="ALEXANDRA CHABON"
        />

        {/* RIGHT CLUSTER */}
        <TestimonialCard
          className="top-[10%] -right-[55%] bg-[#d1ead8] text-black border-none" // High Sage Card
          name="ALEXANDRA CHABON"
          isLight={true}
        />

        <TestimonialCard
          className="top-[38%] -right-[75%] bg-[#0d0f0d]/95" // Far Mid-Right
          name="ALEXANDRA CHABON"
        />

        <TestimonialCard
          className="bottom-[15%] -right-[35%] bg-[#161916]/95" // Low-Right Close
          name="ALEXANDRA CHABON"
        />
      </div>
    </section>
  );
}

function TestimonialCard({ className, name, isLight = false }) {
  return (
    <div
      className={`absolute w-[280px] p-5 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 backdrop-blur-md border border-white/5 transition-all hover:scale-105 duration-500 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-300 to-orange-500 overflow-hidden border-2 border-white/10" />
        <div className="flex flex-col">
          <span
            className={`text-[10px] font-black tracking-[0.15em] ${isLight ? "text-black" : "text-white"}`}
          >
            {name}
          </span>
          <div className="flex items-center gap-1.5 opacity-60">
            <span
              className={`text-[9px] font-bold ${isLight ? "text-black" : "text-slate-400"}`}
            >
              Junior Designer — 4.9
            </span>
            <Star size={8} className="fill-current text-yellow-500" />
          </div>
        </div>
      </div>
      <p
        className={`text-[12px] leading-[1.6] font-medium ${isLight ? "text-black/80" : "text-slate-300"}`}
      >
        <span
          className={
            isLight ? "text-[#1e5d3c] font-bold" : "text-[#4ade80] font-bold"
          }
        >
          "Mentorable
        </span>{" "}
        Connected Me With Sophie Tan, And It Was A Game-Changer For My Career."
      </p>
    </div>
  );
}
