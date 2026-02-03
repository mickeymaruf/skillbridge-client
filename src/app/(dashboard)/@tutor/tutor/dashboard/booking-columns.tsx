"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { markBookingCompleted } from "@/actions/booking";
import { Booking } from "@/types";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { BookingStatus } from "@/constants/user";
import { toast } from "sonner";

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

  {
    header: "Booked At",
    accessorFn: (row) => new Date(row.createdAt).toLocaleDateString(),
  },

  {
    id: "actions",
    header: "Change status",
    cell: ({ row }) => {
      const booking = row.original;

      return (
        <NativeSelect
          size="sm"
          defaultValue={booking.status}
          disabled={
            booking.status === BookingStatus.COMPLETED ||
            booking.status === BookingStatus.CANCELLED
          }
          onChange={async (e) => {
            if (e.target.value === BookingStatus.COMPLETED) {
              const { success, message } = await markBookingCompleted(
                booking.id,
              );
              if (!success) {
                toast.error(message || "Failed to mark booking as completed");
              }
            }
          }}
        >
          <NativeSelectOption value="">Select</NativeSelectOption>
          <NativeSelectOption value={BookingStatus.COMPLETED}>
            {BookingStatus.COMPLETED}
          </NativeSelectOption>
        </NativeSelect>
      );
    },
  },
];
