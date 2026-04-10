import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-[#F8F9F7] py-24 px-8 md:px-20 min-h-screen">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1.2fr_2fr] gap-16 lg:gap-32">
        {/* Sticky Left Branding */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black/30">
              Legal / 01
            </span>
          </div>
          <h1 className="font-serif text-7xl md:text-8xl text-[#1A1A1A] leading-[0.85] mb-8">
            Privacy <br /> <span className="italic text-[#2E7D32]">Policy</span>
          </h1>
          <p className="text-[11px] font-black uppercase tracking-widest text-black/20 border-t border-black/5 pt-8">
            Published: April 10, 2026
          </p>
        </div>

        {/* Content Right */}
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-[13px] font-black uppercase tracking-widest text-[#2E7D32]">
              Introduction
            </h2>
            <p className="text-xl text-slate-800 font-medium leading-relaxed">
              At Mentorable, we treat your data with the same transparency we
              treat our 28k verified mentors. This policy outlines our
              commitment to your digital sanctuary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="text-4xl font-serif italic text-black/10">
                01
              </span>
              <h3 className="font-bold text-lg uppercase tracking-tight">
                Data Collection
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                We collect identity data, technical patterns, and session
                history to improve the Bento-grid experience of our portal.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-4xl font-serif italic text-black/10">
                02
              </span>
              <h3 className="font-bold text-lg uppercase tracking-tight">
                Security
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                All payment info is encrypted via secure gateway. We track every
                gig for 100% customer protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
