"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { env } from "../../env";

export type UserRole = "ACTIVE" | "BANNED";

export const updateUserStatus = async (id: string, status: UserRole) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/admin/users/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify({
      status,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to update user status (${res.status})`,
    );
  }

  revalidateTag("users", "max");

  return data;
};
