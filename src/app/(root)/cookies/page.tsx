export default function CookiesPolicy() {
  return (
    <section className="bg-white py-24 px-8 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-3 bg-[#f0f4f1] px-6 py-2 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#2E7D32]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">
            Cookie Settings
          </span>
        </div>
        <h1 className="font-serif text-7xl text-[#1A1A1A] mb-8">
          Our Use of <span className="italic">Cookies</span>
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
          We use cookies to remember your language preferences, currency (USD),
          and to ensure our glassmorphism blurs render perfectly on your
          browser.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {["Essential", "Performance", "Marketing"].map((item, idx) => (
          <div
            key={item}
            className="p-10 rounded-[40px] border border-black/5 bg-[#F8F9F7] hover:border-[#2E7D32] transition-colors group"
          >
            <span className="text-[10px] font-black text-[#2E7D32] mb-4 block">
              0{idx + 1}
            </span>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">
              {item}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-8">
              Necessary for the portal to function, specifically for payment
              tracking and login persistence.
            </p>
            <div className="w-full h-[1px] bg-black/5 group-hover:bg-[#2E7D32]/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
