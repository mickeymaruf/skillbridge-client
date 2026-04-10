import { TutorFilter } from "./_components/tutor-filter";
import { TutorCard } from "@/components/tutor-card";
import { categoryService } from "@/services/category.service";
import { tutorService } from "@/services/tutor.service";
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
              {recommendedMentors.map((tutor) => (
                <Link
                  key={tutor.id}
                  href={`/tutors/${tutor.id}`}
                  className="group block bg-white border border-black/5 p-6 hover:border-black/20 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                      {tutor.userImage ? (
                        <Image
                          src={tutor.userImage}
                          alt={tutor.userName}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-black text-white text-xs">
                          {tutor.userName.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-black">
                        {tutor.userName}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-black/40">
                        Recommended Mentor
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-black/60 line-clamp-2 mb-6 h-10">
                    {tutor.bio}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <span className="text-sm font-semibold">
                      ${tutor.hourlyRate}/hr
                    </span>
                    <span className="text-[10px] font-bold uppercase text-black group-hover:underline">
                      View Profile
                    </span>
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
