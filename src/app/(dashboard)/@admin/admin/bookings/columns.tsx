// app/(dashboard)/@admin/admin/bookings/columns.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Booking } from "@/types";

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
