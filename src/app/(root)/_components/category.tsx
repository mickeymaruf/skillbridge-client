import React from "react";
import { ArrowUpRight } from "lucide-react";

const courses = [
  {
    category: "PROFESSIONAL IDENTITY",
    instructor: "James C. Williams",
    stats: "49 Gigs",
    color: "text-[#2e7d32]",
    mask: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)", // Custom shape
    bg: "bg-[#f8faf8]",
    arrowColor: "text-[#2e7d32]",
    placeholderColor: "bg-[#e0e7e0]",
  },
  {
    category: "WORLD OF INVESTMENTS",
    instructor: "Mina Gallagher",
    stats: "32 Lesson",
    color: "text-[#a1887f]",
    mask: "path('M10 80 C 40 10, 65 10, 95 80 S 150 150, 10 180 Z')", // Organic blob
    bg: "bg-[#faf9f8]",
    arrowColor: "text-[#4ade80]",
    placeholderColor: "bg-[#f0ece9]",
  },
  {
    category: "ECO-FRIENDLY PRACTICES",
    instructor: "Emily Wu",
    stats: "2 hours",
    color: "text-[#78909c]",
    mask: "circle(50% at 50% 50%)", // Perfect circle
    bg: "bg-[#f8f9fa]",
    arrowColor: "text-[#4ade80]",
    placeholderColor: "bg-[#e9f0f2]",
  },
];

export default function CourseCategories() {
  return (
    <section className="bg-[#f2f4f1] py-24 px-8 md:px-20">
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1.5fr,1fr] gap-12 mb-20 items-end">
        <h2 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] leading-[1.05] tracking-tight">
          Courses across <br /> multiple categories
        </h2>
        <div className="space-y-4">
          {/* Avatar Stack Placeholder */}
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 shadow-sm"
              />
            ))}
          </div>
          <p className="text-slate-500 text-[13px] leading-relaxed max-w-xs">
            Explore a diverse network of professionals eager to share their
            expertise, provide advice, and support you every step of the way.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="group relative bg-[#fdfdfd] rounded-[40px] p-10 flex flex-col items-center text-center border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Top Meta Info */}
            <div className="mb-12">
              <span
                className={`text-[11px] font-black uppercase tracking-[0.2em] ${course.color}`}
              >
                {course.category}
              </span>
              <div className="text-[11px] font-bold text-slate-300 mt-1 uppercase tracking-wider">
                {course.instructor}{" "}
                <span className="mx-1 text-slate-200">—</span> {course.stats}
              </div>
            </div>

            {/* Masked Image Container */}
            <div className="relative w-56 h-56 flex items-center justify-center">
              {/* Background detail for Card 1 (Typography overlay effect) */}
              {idx === 0 && (
                <div className="absolute inset-0 text-[8px] font-black text-slate-100 uppercase break-all leading-none select-none">
                  ARTCENTERNEWGAMEPLAYPAIKARTCENTERNEWGAMEPLAYPAIKARTCENTERNEWGAMEPLAY
                </div>
              )}

              {/* The Masked Shape */}
              <div
                className={`w-48 h-48 ${course.placeholderColor} relative z-10`}
                style={{
                  clipPath:
                    idx === 1
                      ? "path('M24.5,12.7C40,1.2,65.1,1.2,80.5,12.7L100,27.2c15.4,11.5,21.9,31.4,16.2,49.8l-7.1,23.1 c-5.7,18.4-21.9,31.1-41.2,31.8L43,132.3c-19.3,0.7-36.9-10.4-44.1-28.4L10,80.5C3,62.5,9.5,42.6,24.5,31.1L24.5,12.7z')"
                      : course.mask,
                  WebkitClipPath:
                    idx === 1
                      ? "path('M24.5,12.7C40,1.2,65.1,1.2,80.5,12.7L100,27.2c15.4,11.5,21.9,31.4,16.2,49.8l-7.1,23.1 c-5.7,18.4-21.9,31.1-41.2,31.8L43,132.3c-19.3,0.7-36.9-10.4-44.1-28.4L10,80.5C3,62.5,9.5,42.6,24.5,31.1L24.5,12.7z')"
                      : course.mask,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-black/5 to-transparent" />
              </div>

              {/* Floating Arrow Pill (Appears on Hover) */}
              <div className="absolute z-20 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-110 transition-all duration-300">
                <div className="bg-white rounded-full p-4 shadow-2xl border border-slate-100">
                  <ArrowUpRight
                    size={24}
                    strokeWidth={3}
                    className={course.arrowColor}
                  />
                </div>
              </div>
            </div>

            {/* Corner Decorative Arrow (Static) */}
            <div className="absolute bottom-10 right-10 opacity-20 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={18} className="text-slate-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
