import React from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const mentors = [
  {
    name: "BENYAMIN ROLOCOV",
    role: "Python Developer",
    gigs: 8,
    rating: "5.0",
    reviews: 29,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    icon: <ArrowUpRight size={14} />,
  },
  {
    name: "ALEXANDRA CHABON",
    role: "Graphic Designer",
    gigs: 32,
    rating: "4.9",
    reviews: 34,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    icon: <ArrowDownLeft size={14} />,
  },
  {
    name: "REZCHNAG SHIBANA",
    role: "Strategist & Manager",
    gigs: 78,
    rating: "4.8",
    reviews: 57,
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    icon: <ArrowUpRight size={14} />,
  },
  {
    name: "ZHANG CHIANO",
    role: "SEO Specialist",
    gigs: 2,
    rating: "3.8",
    reviews: 34,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    icon: <ArrowUpRight size={14} />,
  },
];

export default function MentorsGrid() {
  return (
    <section className="bg-[#F8F9F7] py-24 px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-black/5 pb-8">
          <h2 className="font-serif text-6xl text-[#1A1A1A]">Mentors</h2>

          <nav className="flex items-center gap-8 mt-8 md:mt-0">
            {[
              "All",
              "Science & Engineering",
              "Graphic Design",
              "Sustainability",
            ].map((cat, i) => (
              <div key={cat} className="flex items-center gap-4">
                {i !== 0 && <div className="w-8 h-[1px] bg-black/10" />}
                <button
                  className={`text-[11px] font-black uppercase tracking-widest ${i === 0 ? "text-black" : "text-black/30"}`}
                >
                  {cat}
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image Card */}
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-6 bg-white shadow-sm border border-black/5">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Float Icon Badge */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                  {mentor.icon}
                </div>
              </div>

              {/* Identity Info */}
              <div className="mb-6">
                <h3 className="text-[14px] font-black tracking-wider text-[#1A1A1A] mb-1">
                  {mentor.name}
                </h3>
                <div className="flex items-center gap-3 text-[11px] font-bold text-black/40">
                  <span>{mentor.role}</span>
                  <div className="w-4 h-[1px] bg-black/10" />
                  <span>{mentor.gigs} Gigs</span>
                </div>
              </div>

              {/* Rating Section */}
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-bold tracking-tighter text-[#1A1A1A]">
                    {mentor.rating}
                  </span>
                  <span className="text-[10px] font-black text-[#2E7D32] tracking-widest uppercase">
                    / {mentor.reviews} Reviews
                  </span>
                </div>

                <p className="text-[11px] leading-relaxed text-black/40 font-medium max-w-[180px]">
                  Learn From Industry Professionals Offering Their Services.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
