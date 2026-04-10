import { TutorFilter } from "./_components/tutor-filter";
import { TutorCard } from "@/components/tutor-card";
import { categoryService } from "@/services/category.service";
import { tutorService } from "@/services/tutor.service";

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const queryParams = await searchParams;
  const { data: tutors } = await tutorService.getAllTutors(queryParams);
  const { data: categories } = await categoryService.getCategories();

  return (
    <main className="min-h-screen bg-[#F8F9F7] py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-32">
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
