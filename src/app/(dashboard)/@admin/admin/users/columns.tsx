"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { updateUserStatus, UserRole } from "@/actions/user";
import { UserStatus } from "@/constants/user";

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
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "emailVerified",
    header: "Verified",
    cell: ({ row }) => (row.original.emailVerified ? "Yes" : "No"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex gap-2">
          {user.status === UserStatus.BANNED ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={async () => {
                const confirmed = window.confirm(
                  "Are you sure you want to unban this user?",
                );
                if (!confirmed) return;
                await updateUserStatus(user.id, UserStatus.ACTIVE as UserRole);
              }}
            >
              Unban
            </Button>
          ) : (
            <Button
              size="sm"
              variant="destructive"
              onClick={async () => {
                const confirmed = window.confirm(
                  "Are you sure you want to ban this user?",
                );
                if (!confirmed) return;
                await updateUserStatus(user.id, UserStatus.BANNED as UserRole);
              }}
            >
              Ban
            </Button>
          )}
        </div>
      );
    },
  },
];
