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
import { Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { tutorService } from "@/services/tutor.service";
import { BookSessionDialog } from "./book-session-dialog";
import Link from "next/link";

export default async function TutorDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: tutor } = await tutorService.getTutorDetails(id);

  const reviewsCount = tutor.reviews.length;

  return (
    <div className="container max-w-5xl mx-auto py-10 space-y-6">
      <Button variant="secondary" asChild>
        <Link href="/tutors">
          <ArrowLeft />
        </Link>
      </Button>

      {/* HEADER */}
      <Card>
        <CardHeader className="flex flex-col gap-6 md:flex-row md:items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src={tutor.user.image ?? undefined} />
            <AvatarFallback className="text-xl">
              {tutor.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">{tutor.user.name}</h1>
              {tutor.isFeatured && <Badge variant="secondary">Featured</Badge>}
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {tutor.rating} ({reviewsCount} reviews)
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tutor.categories.map(({ category }) => (
                <Badge
                  key={category.id}
                  variant="outline"
                  className="rounded-full"
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* ABOUT + RATE */}
      <Card>
        <CardContent className="grid md:grid-cols-3 gap-6 py-6">
          <div className="md:col-span-2 space-y-2">
            <h3 className="font-semibold">About the Tutor</h3>
            <p className="text-muted-foreground">
              {tutor.bio ?? "This tutor hasn’t added a bio yet."}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Hourly Rate</h3>
            <p className="text-3xl font-bold">
              ${tutor.hourlyRate}
              <span className="text-sm font-normal text-muted-foreground">
                {" "}
                / hour
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* AVAILABILITY */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Available Sessions</h3>
        </CardHeader>
        <CardContent className="space-y-3">
          {tutor.availability.length === 0 && (
            <p className="text-muted-foreground">No sessions available yet.</p>
          )}

          {tutor.availability.map((slot) => (
            <div
              key={slot.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center gap-4 text-sm">
                <Calendar className="h-4 w-4" />
                {formatDate(slot.startTime)}
                <Clock className="h-4 w-4 ml-2" />
                {formatTime(slot.startTime)} – {formatTime(slot.endTime)}
              </div>

              <Badge variant={slot.isBooked ? "destructive" : "secondary"}>
                {slot.isBooked ? "Booked" : "Available"}
              </Badge>

              <CardFooter className="justify-end">
                <BookSessionDialog
                  tutor={{ name: tutor.user.name }}
                  slot={slot}
                />
              </CardFooter>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* REVIEWS */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Student Reviews</h3>
        </CardHeader>

        <CardContent className="space-y-4">
          {tutor.reviews.length === 0 && (
            <p className="text-muted-foreground">No reviews yet.</p>
          )}

          {tutor.reviews.map((review) => (
            <div key={review.id} className="space-y-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={review.student.image ?? undefined} />
                  <AvatarFallback>{review.student.name[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <p className="text-sm font-medium">{review.student.name}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{review.review}</p>

              <Separator />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const formatTime = (date: string) =>
  new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const formatDate = (date: string) => new Date(date).toLocaleDateString();
