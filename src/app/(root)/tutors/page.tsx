import { TutorFilter } from "./_components/tutor-filter";
import { Tutor } from "@/types";
import { TutorCard } from "@/components/tutor-card";
import { categoryService } from "@/services/category.service";

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const url = new URL(`http://localhost:5000/api/tutors`);

  const filters = await searchParams;
  Object.entries(filters).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value.toString());
  });

  const res = await fetch(url.toString());
  const { data } = await res.json();

  const { data: categories } = await categoryService.getCategories();

  return (
    <div className="container mx-auto px-10 space-y-6">
      <TutorFilter categories={categories.data} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((tutor: Tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>

      {data.length === 0 && (
        <p className="text-center text-muted-foreground">
          No tutors match your filters.
        </p>
      )}
    </div>
  );
}
