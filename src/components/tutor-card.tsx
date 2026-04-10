import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TutorProfile } from "@/types";
import Link from "next/link";

const MinimalistAvatar = () => (
  <div className="absolute inset-0 flex items-center justify-center p-[33%]">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-full h-full text-black/10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
        fill="currentColor"
      />
      <path
        d="M18 18.5C18 15.4624 15.3137 13 12 13C8.68629 13 6 15.4624 6 18.5V19H18V18.5Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export function TutorCard({ tutor }: { tutor: TutorProfile }) {
  const profileImage = tutor.user.image;

  return (
    <div className="group relative flex flex-col w-full max-w-[340px] mx-auto p-3 rounded-[40px] transition-all duration-500 hover:bg-black/[0.02]">
      {/* Main Image Container */}
      <div className="relative aspect-[3/4] w-full rounded-[40px] overflow-hidden bg-gradient-to-br from-[#F5F5F2] to-[#E9EBE6] border border-black/[0.05] shadow-sm">
        {profileImage ? (
          <img
            src={profileImage}
            alt={tutor.user.name ?? "Tutor"}
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <MinimalistAvatar />
        )}

        {/* Glass Overlay: Top Action */}
        <div className="absolute top-4 right-4 z-10">
          <div className="w-11 h-11 bg-white/70 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-black shadow-sm transition-all duration-300 group-hover:bg-[#2E7D32] group-hover:text-white group-hover:rotate-45">
            <ArrowUpRight size={20} strokeWidth={2} />
          </div>
        </div>

        {/* Glass Overlay: Bottom Identity Pill */}
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/40 backdrop-blur-lg border border-white/40 rounded-[28px] shadow-xl">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-[13px] font-black tracking-tight text-black uppercase truncate">
              {tutor.user.name || "Anonymous"}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-black/60 uppercase tracking-tighter truncate">
                {tutor.categories?.[0]?.category.name || "Mentor"}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#2E7D32]" />
              <span className="text-[10px] font-black text-[#2E7D32]">
                ${tutor.hourlyRate}/hr
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section below image */}
      <div className="pt-6 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black tracking-tighter text-[#1A1A1A]">
              {tutor.rating > 0 ? tutor.rating.toFixed(1) : "—"}
            </span>
            <div className="flex flex-col">
              {tutor.rating > 0 && (
                <Star
                  size={10}
                  fill="#2E7D32"
                  className="text-[#2E7D32] mb-1"
                />
              )}
              <span className="text-[9px] font-black text-black/30 tracking-widest uppercase leading-none">
                Rating
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="block text-[18px] font-black text-[#1A1A1A] leading-none">
              {tutor?._count?.availability || 0}
            </span>
            <span className="text-[9px] font-black text-black/30 tracking-widest uppercase">
              Slots
            </span>
          </div>
        </div>

        <p className="text-[12px] leading-snug text-black/40 font-medium line-clamp-2 mb-5">
          High-performance mentorship tailored for creative industry standards.
        </p>

        <Link href={`/tutors/${tutor.id}`} className="block">
          <button className="w-full py-4 rounded-2xl border border-black/[0.08] text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-black hover:text-white">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
