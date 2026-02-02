"use client";

import { Button } from "@/components/ui/button";
import { updateUserStatus, UserRole } from "@/actions/user";
import { UserStatus } from "@/constants/user";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  userId: string;
  status: string;
};

export function UserStatusButton({ userId, status }: Props) {
  const [loading, setLoading] = useState(false);

  const isBanned = status === UserStatus.BANNED;

  const handleClick = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to ${isBanned ? "unban" : "ban"} this user?`,
    );
    if (!confirmed) return;

    try {
      setLoading(true);
      await updateUserStatus(
        userId,
        (isBanned ? UserStatus.ACTIVE : UserStatus.BANNED) as UserRole,
      );
      toast.success(isBanned ? "User unbanned" : "User banned");
    } catch (err) {
      toast.error("Action failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      variant={isBanned ? "secondary" : "destructive"}
      onClick={handleClick}
      disabled={loading}
      className="gap-2"
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isBanned ? (
        "Unban"
      ) : (
        "Ban"
      )}
    </Button>
  );
}
