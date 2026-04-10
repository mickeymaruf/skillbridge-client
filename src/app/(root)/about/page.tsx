export default function AboutPage() {
  return (
    <main className="bg-[#F8F9F7] py-24 px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Editorial Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <h1 className="font-serif text-7xl md:text-8xl text-[#1A1A1A] leading-[0.9]">
            We bridge the <span className="text-[#2E7D32] italic">gap</span>{" "}
            between potential and mastery.
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Mentorable was born from a simple question: Why is world-class
            mentorship so hard to access? We built a sanctuary for growth where
            industry titans meet the next generation.
          </p>
        </div>

        {/* The Portal Section (Matching the Image Mask style) */}
        <div className="relative h-[600px] rounded-[60px] overflow-hidden mb-32 border border-black/5">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000"
            className="w-full h-full object-cover grayscale-[0.3]"
            alt="Team"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-16 left-16">
            <h2 className="text-white font-serif text-5xl mb-4">Our Mission</h2>
            <div className="w-24 h-[1px] bg-[#4ade80] mb-6" />
            <p className="text-white/80 max-w-md text-sm uppercase tracking-widest font-bold">
              Empowering 290k+ Gigs globally through secure, verified, and
              high-impact mentorship.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
