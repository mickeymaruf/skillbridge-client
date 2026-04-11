import { TutorFilter } from "./_components/tutor-filter";
import { TutorCard } from "@/components/tutor-card";
import { categoryService } from "@/services/category.service";
import { tutorService } from "@/services/tutor.service";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const queryParams = await searchParams;

  const { data: tutors } = await tutorService.getAllTutors(queryParams);
  const { data: categories } = await categoryService.getCategories();

  const { data: recommendedMentors } =
    await tutorService.getRecommendedMentors();

  return (
    <main className="min-h-screen bg-[#F8F9F7] py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-32">
        {recommendedMentors.length > 0 && (
          <section className="mb-20">
            <div className="flex flex-col mb-8">
              <h2 className="font-serif text-3xl text-black">Picked for you</h2>
              <p className="text-[11px] font-black uppercase tracking-widest text-black/40 mt-1">
                Based on your recent activity
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedMentors.map((tutor: any) => (
                <Link
                  key={tutor.id}
                  href={`/tutors/${tutor.id}`}
                  className="group relative block p-6 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Glass Background Layer */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] -z-10 group-hover:bg-white/60 transition-colors" />

                  {/* Header: Avatar & Identity */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F5F2] to-[#E9EBE6] border border-black/[0.05]">
                      {tutor.userImage ? (
                        <Image
                          src={tutor.userImage}
                          alt={tutor.userName}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        /* Minimalist Placeholder SVG */
                        <div className="absolute inset-0 flex items-center justify-center p-3 opacity-20">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
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
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm font-black uppercase tracking-tight text-black">
                        {tutor.userName}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#2E7D32]">
                          Recommended
                        </span>
                        <div className="w-1 h-1 rounded-full bg-black/10" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-black/30">
                          Mentor
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio Block */}
                  <p className="font-serif text-[15px] italic text-black/60 line-clamp-2 mb-8 leading-relaxed h-11">
                    "{tutor.bio}"
                  </p>

                  {/* Footer: Price & Action */}
                  <div className="flex items-center justify-between pt-5 border-t border-black/5">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-black/30">
                        Rate
                      </span>
                      <span className="text-sm font-black text-[#1A1A1A]">
                        ${tutor.hourlyRate}
                        <span className="text-[10px] text-black/40">/hr</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full transition-all group-hover:bg-[#2E7D32]">
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        Profile
                      </span>
                      <ArrowUpRight size={12} strokeWidth={3} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <hr className="mt-16 border-black/5" />
          </section>
        )}

        <div className="mb-16">
          <TutorFilter categories={categories.data} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>

        {tutors.length === 0 && (
          <div className="py-40 text-center">
            <h2 className="font-serif text-4xl text-black/20 italic">
              No mentors found
            </h2>
            <p className="text-[11px] font-black uppercase tracking-widest mt-4">
              Try adjusting your category or price filters
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
