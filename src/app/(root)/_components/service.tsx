import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  PenTool,
  Code,
  Share2,
  Atom,
  Compass,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "DESIGN",
      icon: <ShieldCheck />,
      author: "Mina Gallagher",
      lessons: 32,
    },
    {
      id: "02",
      title: "WRITING",
      icon: <Compass />,
      author: "Mina Gallagher",
      lessons: 32,
    },
    {
      id: "03",
      title: "DEVELOPMENT",
      icon: <Code />,
      author: "Mina Gallagher",
      lessons: 32,
    },
    {
      id: "04",
      title: "SOCIAL MEDIA",
      icon: <Share2 />,
      author: "Mina Gallagher",
      lessons: 32,
    },
    {
      id: "05",
      title: "WRITING",
      icon: <PenTool />,
      author: "Mina Gallagher",
      lessons: 32,
    },
    {
      id: "06",
      title: "DEVELOPMENT",
      icon: <Code />,
      author: "Mina Gallagher",
      lessons: 32,
    },
    {
      id: "07",
      title: "SCIENCE",
      icon: <Atom />,
      author: "Mina Gallagher",
      lessons: 32,
      featured: true,
    },
    {
      id: "08",
      title: "DESIGN",
      icon: <Compass />,
      author: "Mina Gallagher",
      lessons: 32,
    },
  ];

  return (
    <section className="bg-[#F3F4F1] py-24 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-[#1A1A1A]">
            All <span className="text-[#2E7D32] italic">services</span> — we can
            do
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-4 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-r border-black/[0.05] h-full" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-2 pointer-events-none">
            <div className="border-b border-black/[0.05] w-full" />
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className={`relative p-12 flex flex-col items-center group transition-all duration-500 ${
                service.featured ? "z-10" : ""
              }`}
            >
              {/* Featured Card Effect */}
              {service.featured && (
                <div className="absolute inset-2 rounded-3xl bg-[#2E7D32]/80 backdrop-blur-3xl shadow-2xl -rotate-1 scale-105" />
              )}

              <div className="relative z-20 flex flex-col items-center">
                <span
                  className={`text-[10px] font-black mb-8 ${service.featured ? "text-white/60" : "text-black/20"}`}
                >
                  ({service.id})
                </span>

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 rotate-45 border transition-colors ${
                    service.featured
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-[#E9EBE6] border-[#DDE0D8] text-[#2E7D32]"
                  }`}
                >
                  <div className="-rotate-45">{service.icon}</div>
                </div>

                <h3
                  className={`text-sm font-black tracking-[0.2em] mb-4 text-center ${
                    service.featured ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {service.title}
                </h3>

                <div
                  className={`flex items-center gap-2 text-[10px] font-bold ${
                    service.featured ? "text-white/60" : "text-black/30"
                  }`}
                >
                  <span>{service.author}</span>
                  <div
                    className={`w-6 h-[1px] ${service.featured ? "bg-white/20" : "bg-black/10"}`}
                  />
                  <span>{service.lessons} Lesson</span>
                </div>
              </div>

              {/* Hover/Featured Action Button */}
              <div
                className={`absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  service.featured
                    ? "bg-white text-[#2E7D32] scale-100 opacity-100"
                    : "bg-[#2E7D32] text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                }`}
              >
                <ArrowUpRight size={18} strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full border border-black/10 text-[10px] font-black tracking-widest uppercase text-black/60 hover:bg-black/5 transition-colors">
            View Last Courses
          </button>
          <button className="px-8 py-4 rounded-full bg-[#2E7D32] text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-3 hover:bg-[#25632a] transition-all group">
            View All Mentors
            <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowUpRight size={14} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
