import { TutorCard } from "@/components/tutor-card";
import { tutorService } from "@/services/tutor.service";

export default async function Tutors() {
  const { data: tutors } = await tutorService.getAllTutors({
    isFeatured: "true",
  });

  if (!tutors || tutors.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto px-10 text-center py-20 text-gray-500">
        No featured tutors available at the moment.
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tutors.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
}
