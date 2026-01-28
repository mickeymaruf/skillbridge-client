import { TutorCard } from "@/components/tutor-card";
import { Tutor } from "@/types";

export default async function Tutors() {
  const res = await fetch("http://localhost:5000/api/tutors");
  const { data } = await res.json();

  return (
    <div className="w-full max-w-6xl mx-auto px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((tutor: Tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
}
