import React from "react";
import {
  Users,
  Calendar,
  GraduationCap,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-[#131612] text-white py-24 px-6 md:px-20 overflow-hidden font-sans relative">
      {/* Ambient Green Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4ade80]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4ade80]/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Headline */}
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-4 tracking-tight">
          How It Works
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mb-16 text-sm md:text-base leading-relaxed">
          Connect with verified tutors in minutes. Browse their profiles, book
          sessions, and start learning from experts at your own pace.
        </p>

        {/* Toggle Pill */}
        <div className="flex bg-[#1c1f1b] p-1.5 rounded-full border border-white/5 mb-16 shadow-2xl">
          <button className="bg-[#4ade80] text-black px-6 py-2.5 rounded-full flex items-center gap-2 text-[10px] font-black tracking-widest">
            <div className="w-4 h-4 bg-black/10 rounded-full flex items-center justify-center">
              <Users size={10} strokeWidth={3} />
            </div>
            TUTORS
          </button>
          <button className="text-slate-500 px-6 py-2.5 flex items-center gap-2 text-[10px] font-black tracking-widest hover:text-white transition-colors">
            <GraduationCap size={12} />
            SESSIONS
          </button>
        </div>

        {/* Step Cards Stack */}
        <div className="w-full space-y-5">
          {/* STEP 01: Find a Tutor */}
          <div className="relative group">
            <span className="absolute left-[-2%] top-1/2 -translate-y-1/2 text-[140px] font-serif italic text-white/[0.02] pointer-events-none select-none">
              01
            </span>
            <div className="bg-[#1a1d19] rounded-[48px] border border-white/5 p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 transition-all hover:bg-[#1d211c]">
              <div className="w-full md:w-1/2 space-y-3">
                {/* Tutor List UI */}
                <div className="bg-[#1a1d19] p-3 rounded-full flex items-center justify-between border-2 border-[#4ade80] relative shadow-[0_0_30px_rgba(74,222,128,0.05)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FBBC05] flex items-center justify-center font-bold text-black text-xs border-2 border-[#4ade80]">
                      JD
                    </div>
                    <div>
                      <p className="text-[11px] font-black leading-tight">
                        John Doe
                      </p>
                      <p className="text-[9px] text-[#4ade80] font-bold">
                        Mathematics Expert
                      </p>
                    </div>
                  </div>
                  <div className="text-[9px] font-black px-5 py-2.5 bg-[#4ade80] text-black rounded-full shadow-[0_4px_15px_rgba(74,222,128,0.3)] tracking-widest uppercase">
                    Select
                  </div>
                  <div className="absolute -right-2 top-1/3 bg-[#4ade80] p-1.5 rounded-lg text-black rotate-12 shadow-lg">
                    <Users size={12} strokeWidth={4} />
                  </div>
                </div>
                <div className="bg-[#242823] p-3 rounded-full flex items-center justify-between border border-white/5 opacity-40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center font-bold text-white text-xs">
                      SA
                    </div>
                    <span className="text-[11px] font-bold">Sarah Adams</span>
                  </div>
                  <div className="text-[9px] font-black px-4 py-2 bg-black/20 rounded-full text-slate-500 tracking-tighter uppercase">
                    View
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-5">
                <div className="w-10 h-10 bg-[#4ade80]/10 border border-[#4ade80]/40 rounded-[14px] flex items-center justify-center text-[#4ade80] font-black text-xs">
                  1
                </div>
                <h3 className="text-4xl font-serif">
                  Find a <span className="text-[#4ade80] italic">Tutor</span>
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed max-w-xs">
                  Browse through our curated list of tutors by category and
                  rating.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 02: Book a Session */}
          <div className="relative group">
            <span className="absolute left-[-2%] top-1/2 -translate-y-1/2 text-[140px] font-serif italic text-white/[0.02] pointer-events-none select-none">
              02
            </span>
            <div className="bg-[#1a1d19] rounded-[48px] border border-white/5 p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 flex items-center justify-center relative h-48">
                <div className="z-10 w-32 h-32 rounded-[38px] bg-[#1a1d19] border-[3px] border-[#4ade80] flex items-center justify-center shadow-[0_0_50px_rgba(74,222,128,0.15)]">
                  <div className="w-16 h-16 bg-[#4ade80]/10 rounded-2xl flex items-center justify-center text-[#4ade80]">
                    <Calendar size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute w-24 h-24 rounded-[28px] bg-slate-800/20 translate-x-16 rotate-[12deg] border border-white/5 backdrop-blur-sm flex items-end justify-center pb-2 text-[8px] font-bold text-slate-500">
                  AVAILABLE
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-5">
                <div className="w-10 h-10 bg-[#242823] border border-white/10 rounded-[14px] flex items-center justify-center text-slate-400 font-black text-xs">
                  2
                </div>
                <h3 className="text-4xl font-serif">
                  Book a <span className="text-[#4ade80] italic">Session</span>
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed max-w-sm">
                  Choose an available time slot and book a session in a few
                  clicks.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 03: Start Learning */}
          <div className="relative group">
            <span className="absolute left-[-2%] top-1/2 -translate-y-1/2 text-[140px] font-serif italic text-white/[0.02] pointer-events-none select-none">
              03
            </span>
            <div className="bg-[#1a1d19] rounded-[48px] border border-white/5 p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="bg-[#121411] p-6 rounded-[32px] border border-white/5 flex flex-col items-center gap-4 shadow-inner w-64 relative">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#34A853] flex items-center justify-center font-bold text-white text-xl">
                      JD
                    </div>
                    <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-[#4ade80] rounded-full border-2 border-[#121411] flex items-center justify-center animate-pulse" />
                  </div>
                  <p className="text-[10px] font-black tracking-widest text-slate-400">
                    SESSION LIVE NOW
                  </p>
                  <div className="w-full bg-[#1a1d19] rounded-2xl p-3 border border-white/5 flex items-center gap-3">
                    <div className="bg-[#4ade80]/20 p-2 rounded-lg text-[#4ade80]">
                      <GraduationCap size={16} />
                    </div>
                    <p className="text-[11px] text-white font-medium">
                      Personalized Guidance
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-5">
                <div className="w-10 h-10 bg-[#242823] border border-white/10 rounded-[14px] flex items-center justify-center text-slate-400 font-black text-xs">
                  3
                </div>
                <h3 className="text-4xl font-serif">
                  Start <span className="text-[#4ade80] italic">Learning</span>
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed max-w-sm">
                  Attend your session online and get personalized guidance from
                  experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
