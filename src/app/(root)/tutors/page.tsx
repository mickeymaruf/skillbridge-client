import { TutorFilter } from "./_components/tutor-filter";
import { TutorCard } from "@/components/tutor-card";
import { categoryService } from "@/services/category.service";
import { tutorService } from "@/services/tutor.service";

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const queryParams = await searchParams;

  const { data: tutors } = await tutorService.getAllTutors(queryParams);
  const { data: categories } = await categoryService.getCategories();

  return (
    <div className="container mx-auto px-10 space-y-6">
      <TutorFilter categories={categories.data} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>

      {tutors.length === 0 && (
        <p className="text-center text-muted-foreground">
          No tutors match your filters.
        </p>
      )}
    </div>
  );
}
