import { Hero7 } from "@/app/(root)/_components/hero7";
import Tutors from "./_components/tutors";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero7 />
      <Tutors />

      <section className="container mx-auto py-20 text-center space-y-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with verified tutors in minutes. Browse their profiles, book
          sessions, and start learning from experts at your own pace.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">1. Find a Tutor</h3>
            <p className="text-muted-foreground mt-2">
              Browse through our curated list of tutors by category and rating.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">2. Book a Session</h3>
            <p className="text-muted-foreground mt-2">
              Choose an available time slot and book a session in a few clicks.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">3. Start Learning</h3>
            <p className="text-muted-foreground mt-2">
              Attend your session online and get personalized guidance from
              experts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20 mx-20 rounded-2xl">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Start Learning Today</h2>
          <p className="max-w-2xl mx-auto">
            Browse tutors, book sessions, and take the next step in your
            learning journey.
          </p>
          <Link
            href="/tutors"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg mt-4"
          >
            Browse Tutors
          </Link>
        </div>
      </section>
    </div>
  );
}
