"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { markBookingCompleted } from "@/actions/booking";
import { Booking } from "@/types";

export const bookingColumns: ColumnDef<Booking>[] = [
  {
    header: "Student",
    accessorFn: (row) => row.student?.name ?? "—",
  },

  {
    header: "Email",
    accessorFn: (row) => row.student?.email ?? "—",
  },

  {
    header: "Slot Time",
    accessorFn: (row) => row.slot,
    cell: ({ getValue }) => {
      const slot = getValue<any>();

      const start = new Date(slot.startTime).toLocaleString();
      const end = new Date(slot.endTime).toLocaleTimeString();

      return (
        <span>
          {start} – {end}
        </span>
      );
    },
  },

  {
    header: "Status",
    accessorFn: (row) => row.status,
    cell: ({ getValue }) => {
      const status = getValue<string>();

      return (
        <Badge variant={status === "CONFIRMED" ? "secondary" : "outline"}>
          {status}
        </Badge>
      );
    },
  },

  {
    header: "Booked At",
    accessorFn: (row) => new Date(row.createdAt).toLocaleDateString(),
  },

  {
    id: "completed",
    header: "Completed",
    cell: ({ row }) => {
      const booking = row.original;

      return booking.status === "COMPLETED" ? (
        <Check size={20} className="text-green-600" />
      ) : (
        <Button onClick={async () => await markBookingCompleted(booking.id)}>
          <Check />
        </Button>
      );
    },
  },
];
