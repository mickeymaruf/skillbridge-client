import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { tutorService } from "@/services/tutor.service";
import { CreateTutorProfileButton } from "./create-tutor-profile-button";

export default async function TutorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await tutorService.getMyTutorProfile();

  if (!data) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <h2 className="text-xl font-semibold">Create your tutor profile</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          You don’t have a tutor profile yet. Create one to start accepting
          students and receiving bookings.
        </p>

        <form
          action={async () => {
            "use server";
            await tutorService.createTutorProfile();
            redirect("/tutor/profile");
          }}
        >
          <CreateTutorProfileButton />
        </form>
      </div>
    );
  }

  return children;
}
