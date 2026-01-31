// app/(dashboard)/@admin/admin/bookings/columns.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

// types/booking.ts
export type Booking = {
  id: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  createdAt: string;

  student: {
    id: string;
    name: string;
    email: string;
  };

  tutorProfile: {
    hourlyRate: number;
    user: {
      name: string;
      email: string;
    };
  };

  slot: {
    startTime: string;
    endTime: string;
  };
};

export const columns: ColumnDef<Booking>[] = [
  {
    header: "Student",
    cell: ({ row }) => row.original.student.name,
  },
  {
    header: "Tutor",
    cell: ({ row }) => row.original.tutorProfile.user.name,
  },
  {
    header: "Slot",
    cell: ({ row }) => {
      const { startTime, endTime } = row.original.slot;
      return (
        <span>
          {new Date(startTime).toLocaleString()} –{" "}
          {new Date(endTime).toLocaleTimeString()}
        </span>
      );
    },
  },
  {
    header: "Price",
    cell: ({ row }) => `$${row.original.tutorProfile.hourlyRate}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge variant="outline">{row.original.status}</Badge>,
  },
  {
    header: "Created",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
];
