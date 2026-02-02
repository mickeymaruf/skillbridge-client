"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { writeReview } from "@/actions/booking";
import { toast } from "sonner";

export function LeaveReviewDialog({ bookingId }: { bookingId: string }) {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!rating || !review.trim()) return;

    try {
      setLoading(true);
      await writeReview({
        bookingId,
        rating,
        review,
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to submit review",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Leave Review
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
        </DialogHeader>

        {/* Rating */}
        <div className="flex gap-1 py-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              onClick={() => setRating(i + 1)}
              className={cn(
                "h-6 w-6 cursor-pointer",
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground",
              )}
            />
          ))}
        </div>

        {/* Review */}
        <Textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={!rating || !review || loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
