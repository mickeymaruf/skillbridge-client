"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";
import { createBooking } from "@/actions/booking";

type BookSessionDialogProps = {
  tutor: { name: string };
  slot: {
    id: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  };
};

export function BookSessionDialog({ tutor, slot }: BookSessionDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);

      const { data } = await authClient.getSession();
      if (!data?.session) {
        toast.error("You must login before booking a session!");
        return;
      }

      await createBooking(slot.id);
      toast.success("Session booked successfully!");
      setOpen(false);
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full" disabled={slot.isBooked}>
          Book Session
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Booking</DialogTitle>
          <DialogDescription>
            Are you sure you want to book this session on{" "}
            <strong>{formatDate(slot.startTime)}</strong> from{" "}
            <strong>
              {formatTime(slot.startTime)} – {formatTime(slot.endTime)}
            </strong>{" "}
            with {tutor.name}?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const formatTime = (date: string) =>
  new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const formatDate = (date: string) => new Date(date).toLocaleDateString();
