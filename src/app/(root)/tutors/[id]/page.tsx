import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, Clock, ArrowLeft, ArrowUpRight } from "lucide-react";
import { tutorService } from "@/services/tutor.service";
import { BookSessionDialog } from "./book-session-dialog";
import Link from "next/link";

export default async function TutorDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch both in parallel for better performance
  const [tutorRes, relatedRes] = await Promise.all([
    tutorService.getTutorDetails(id),
    tutorService.getRelatedTutors(id),
  ]);

  const tutor = tutorRes.data;
  const relatedTutors = relatedRes.data;

  const reviewsCount = tutor.reviews.length;

  return (
    <div className="bg-[#F8F9F7] min-h-screen">
      <div className="container max-w-5xl mx-auto py-16 px-6 space-y-10">
        <Button
          variant="ghost"
          className="text-[10px] font-black uppercase tracking-[0.2em] p-0 hover:bg-transparent"
          asChild
        >
          <Link href="/tutors" className="flex items-center gap-2">
            <ArrowLeft size={14} /> Back to Mentors
          </Link>
        </Button>

        {/* HEADER */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end justify-between border-b border-black/5 pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <Avatar className="h-32 w-32 rounded-[40px] border-4 border-white shadow-xl">
              <AvatarImage
                src={tutor.user.image ?? undefined}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-serif bg-[#2E7D32] text-white">
                {tutor.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h1 className="font-serif text-5xl text-[#1A1A1A]">
                    {tutor.user.name}
                  </h1>
                  {tutor.isFeatured && (
                    <Badge className="bg-[#2E7D32] text-white text-[10px] font-black uppercase rounded-full px-3">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-[11px] font-black uppercase tracking-widest text-black/40">
                  <Star className="h-3 w-3 fill-[#2E7D32] text-[#2E7D32]" />
                  {tutor.rating.toFixed(1)}{" "}
                  <span className="mx-1 opacity-20">—</span> {reviewsCount}{" "}
                  reviews
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {tutor.categories.map(({ category }) => (
                  <Badge
                    key={category.id}
                    variant="outline"
                    className="rounded-full border-black/10 text-[10px] font-black uppercase px-4 py-1"
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-black/5 shadow-sm text-center md:text-right min-w-[200px]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-1">
              Hourly Rate
            </p>
            <p className="text-5xl font-serif text-[#1A1A1A]">
              ${tutor.hourlyRate}
            </p>
            <p className="text-[10px] font-black uppercase text-[#2E7D32] mt-1">
              per session
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-[2fr_1.2fr] gap-12">
          <div className="space-y-12">
            {/* ABOUT */}
            <section className="space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2E7D32]">
                About the Tutor
              </h3>
              <p className="font-serif text-2xl leading-relaxed text-[#1A1A1A]/80 italic">
                {tutor.bio ?? "This tutor hasn’t added a bio yet."}
              </p>
            </section>

            {/* REVIEWS */}
            <section className="space-y-8">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2E7D32]">
                Student Reviews
              </h3>
              <div className="space-y-8">
                {tutor.reviews.length === 0 && (
                  <p className="text-sm text-black/30 italic uppercase font-bold tracking-widest">
                    No reviews yet.
                  </p>
                )}

                {tutor.reviews.map((review) => (
                  <div key={review.id} className="group space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage src={review.student.image ?? undefined} />
                        <AvatarFallback className="font-bold text-xs">
                          {review.student.name[0]}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="text-[11px] font-black uppercase tracking-widest">
                          {review.student.name}
                        </p>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < review.rating ? "fill-[#2E7D32] text-[#2E7D32]" : "text-black/10"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-14 italic">
                      "{review.review}"
                    </p>
                    <Separator className="bg-black/5" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* AVAILABILITY */}
          <aside className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2E7D32]">
              Available Sessions
            </h3>
            <div className="space-y-4">
              {tutor.availability.length === 0 && (
                <p className="text-sm text-black/30 font-bold uppercase tracking-widest">
                  No sessions available.
                </p>
              )}

              {tutor.availability.map((slot) => (
                <div
                  key={slot.id}
                  className="group relative bg-white p-6 rounded-[32px] border border-black/5 hover:border-[#2E7D32]/30 transition-all shadow-sm"
                >
                  <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40">
                        <Calendar size={12} className="text-[#2E7D32]" />
                        {formatDate(slot.startTime)}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40">
                        <Clock size={12} className="text-[#2E7D32]" />
                        {formatTime(slot.startTime)} –{" "}
                        {formatTime(slot.endTime)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-black/5">
                      <Badge
                        variant="ghost"
                        className={`p-0 text-[10px] font-black uppercase ${slot.isBooked ? "text-red-400" : "text-[#2E7D32]"}`}
                      >
                        {slot.isBooked ? "Reserved" : "Open Slot"}
                      </Badge>

                      <BookSessionDialog
                        tutor={{ name: tutor.user.name }}
                        slot={slot}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* RELATED TUTORS SECTION */}
        <div className="border-t border-black/5 pt-20 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
            <h2 className="font-serif text-6xl text-[#1A1A1A]">
              Related <span className="italic text-[#2E7D32]">Mentors</span>
            </h2>
            <Link
              href="/tutors"
              className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-[#2E7D32] transition-colors"
            >
              View all experts —
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTutors?.map((related) => (
              <div
                key={related.id}
                className="group relative flex flex-col w-full p-3 rounded-[40px] transition-all duration-500 hover:bg-black/[0.02]"
              >
                {/* Main Image Container */}
                <div className="relative aspect-[3/4] w-full rounded-[40px] overflow-hidden bg-gradient-to-br from-[#F5F5F2] to-[#E9EBE6] border border-black/[0.05] shadow-sm">
                  {related.user.image ? (
                    <img
                      src={related.user.image}
                      alt={related.user.name}
                      className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    /* Using your MinimalistAvatar SVG logic here */
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
                  )}

                  {/* Glass Overlay: Top Action */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 bg-white/70 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-black shadow-sm transition-all duration-300 group-hover:bg-[#2E7D32] group-hover:text-white group-hover:rotate-45">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Glass Overlay: Bottom Identity Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/40 backdrop-blur-lg border border-white/40 rounded-[28px] shadow-xl">
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[12px] font-black tracking-tight text-black uppercase truncate">
                        {related.user.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold text-black/60 uppercase tracking-tighter truncate">
                          {related.categories?.[0]?.category.name || "Mentor"}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#2E7D32]" />
                        <span className="text-[9px] font-black text-[#2E7D32]">
                          ${related.hourlyRate}/hr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hidden link covering the card for UX */}
                <Link
                  href={`/tutors/${related.id}`}
                  className="absolute inset-0 z-20"
                >
                  <span className="sr-only">View {related.user.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const formatTime = (date: string) =>
  new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
