"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  review: {
    rating: number;
    review: string;
  };
};

export function ViewReviewDialog({ review }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary">
          View Review
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Review</DialogTitle>
        </DialogHeader>

        {/* Rating */}
        <div className="flex gap-1 py-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-5 w-5",
                i < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground",
              )}
            />
          ))}
        </div>

        {/* Review text */}
        <p className="text-sm text-muted-foreground whitespace-pre-line">
          {review.review}
        </p>
      </DialogContent>
    </Dialog>
  );
}
