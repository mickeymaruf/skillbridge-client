"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types";
import { UserStatusButton } from "./user-status-button";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    enableColumnFilter: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableColumnFilter: true,
  },
  {
    accessorKey: "emailVerified",
    header: "Verified",
    enableColumnFilter: true,
    cell: ({ row }) => (row.original.emailVerified ? "Yes" : "No"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <UserStatusButton userId={row.original.id} status={row.original.status} />
    ),
  },
];
