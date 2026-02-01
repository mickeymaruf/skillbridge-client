"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export type UserRole = "ACTIVE" | "BANNED";

export const updateTutorProfile = async (data: {
  name: string;
  bio?: string | null;
  hourlyRate: number;
}) => {
  const cookieStore = await cookies();

  const res = await fetch(`http://localhost:5000/api/tutors/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(
      `Failed updating user status (${res.status}): ${error.error}`,
    );
  }

  revalidateTag("users", "max");

  return res.json();
};
