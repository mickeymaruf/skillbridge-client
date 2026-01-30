import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { TutorProfile } from "@/types";
import Link from "next/link";

export function TutorCard({ tutor }: { tutor: TutorProfile }) {
  return (
    <Card className="flex h-full flex-col transition hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        {/* Avatar */}
        <Avatar className="h-12 w-12">
          <AvatarImage src={tutor.user.image ?? undefined} />
          <AvatarFallback>
            {tutor.user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        {/* Name + featured */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold leading-none">{tutor.user.name}</h3>

            {tutor.isFeatured && <Badge variant="secondary">Featured</Badge>}
          </div>

          {/* Rating */}
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {tutor.rating > 0 ? tutor.rating.toFixed(1) : "New"}
          </div>
        </div>
      </CardHeader>

      {/* Categories */}
      <CardContent className="flex flex-wrap gap-2">
        {tutor.categories.map(({ category }) => (
          <Badge key={category.id} variant="outline" className="rounded-full">
            {category.name}
          </Badge>
        ))}
      </CardContent>

      {/* Footer */}
      <CardFooter className="mt-auto flex items-center justify-between">
        <div className="text-sm">
          <span className="font-semibold">${tutor.hourlyRate}</span>
          <span className="text-muted-foreground"> / hour</span>
        </div>

        <Button size="sm" className="rounded-full">
          <Link href={`/tutors/${tutor.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
