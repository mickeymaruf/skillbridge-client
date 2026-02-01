"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { markBookingCancelled } from "@/actions/booking";
import { Booking } from "@/types";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { BookingStatus } from "@/constants/user";

export const columns: ColumnDef<Booking>[] = [
  {
    header: "Tutor",
    accessorFn: (row) => row.tutorProfile.user.name ?? "—",
  },

  // {
  //   header: "Email",
  //   accessorFn: (row) => row.tutorProfile.user.email ?? "—",
  // },

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
    header: "Booked At",
    accessorFn: (row) => new Date(row.createdAt).toLocaleDateString(),
  },

  {
    header: "Status",
    accessorFn: (row) => row.status,
    cell: ({ getValue }) => {
      const status = getValue<string>();

      return (
        <Badge
          className={
            status === BookingStatus.COMPLETED
              ? "bg-green-500"
              : status === BookingStatus.CANCELLED
                ? "bg-red-500"
                : "bg-gray-500"
          }
        >
          {status}
        </Badge>
      );
    },
  },

  // {
  //   id: "actions",
  //   header: "Change status",
  //   cell: ({ row }) => {
  //     const booking = row.original;

  //     return (
  //       <NativeSelect
  //         size="sm"
  //         defaultValue={booking.status}
  //         disabled={
  //           booking.status === BookingStatus.COMPLETED ||
  //           booking.status === BookingStatus.CANCELLED
  //         }
  //         onChange={async (e) =>
  //           e.target.value === BookingStatus.CANCELLED &&
  //           (await markBookingCancelled(booking.id))
  //         }
  //       >
  //         <NativeSelectOption value="">Select</NativeSelectOption>
  //         <NativeSelectOption value={BookingStatus.CANCELLED}>
  //           Cancel
  //         </NativeSelectOption>
  //       </NativeSelect>
  //     );
  //   },
  // },
];
