"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { AvailabilitySlot } from "@/types";
import { updateUserStatus, UserRole } from "@/actions/user";
import { UserStatus } from "@/constants/user";
import { Trash } from "lucide-react";

export const availabilityColumns: ColumnDef<AvailabilitySlot>[] = [
  {
    id: "slot",
    header: "Slot",
    cell: ({ row }) => (
      <span>
        {new Date(row.original.startTime).toLocaleString()} –{" "}
        {new Date(row.original.endTime).toLocaleTimeString()}
      </span>
    ),
  },
  {
    accessorKey: "isBooked",
    header: "Status",
    cell: ({ getValue }) => (getValue<boolean>() ? "Booked" : "Available"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const slot = row.original;
      return (
        <Button size="sm" variant="destructive" onClick={async () => {}}>
          <Trash />
        </Button>
      );
    },
  },
];
