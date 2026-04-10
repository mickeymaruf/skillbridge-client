export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0D0F0D] py-24 px-10 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2E7D32]/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[#4ade80] font-black tracking-[0.3em] text-[10px] uppercase">
            Get in touch
          </span>
          <h1 className="font-serif text-7xl text-white mt-6 mb-8">
            Let's start a <span className="italic">conversation.</span>
          </h1>
          <div className="space-y-6">
            <p className="text-slate-400 font-medium tracking-tight">
              Email: hello@mentorable.com
            </p>
            <p className="text-slate-400 font-medium tracking-tight">
              Location: London / New York / Remote
            </p>
          </div>
        </div>

        {/* Glassmorphism Form */}
        <div className="relative p-10 rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-[#4ade80] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-[#4ade80] transition-colors"
              />
            </div>
            <button className="w-full bg-[#2E7D32] hover:bg-[#4ade80] text-white py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all">
              Send Message —
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
