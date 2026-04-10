export default function TermsOfService() {
  return (
    <section className="bg-[#0D0F0D] py-24 px-8 md:px-20 min-h-screen text-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[1.2fr_2fr] gap-16 lg:gap-32">
        <div>
          <h1 className="font-serif text-7xl md:text-8xl leading-[0.85] mb-8">
            Terms of <br />{" "}
            <span className="italic text-[#4ade80]">Service</span>
          </h1>
          <p className="text-[11px] font-black uppercase tracking-widest text-white/20">
            Rules of Engagement — 2026
          </p>
        </div>

        <div className="space-y-12 divide-y divide-white/10">
          <div className="pt-0 pb-12">
            <h3 className="text-[#4ade80] text-[10px] font-black uppercase tracking-widest mb-6">
              01 / Eligibility
            </h3>
            <p className="text-2xl font-serif text-slate-300 leading-snug">
              Mentors must maintain a minimum 4.0 rating to remain featured on
              the grid. Users must engage with radical transparency.
            </p>
          </div>
          <div className="py-12">
            <h3 className="text-[#4ade80] text-[10px] font-black uppercase tracking-widest mb-6">
              02 / Payments
            </h3>
            <p className="text-2xl font-serif text-slate-300 leading-snug">
              Payments are held in a secure glassmorphism vault until the
              session is confirmed. Disputes are resolved via our 24/7 support
              portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
