"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { env } from "../../env";

export type UserRole = "ACTIVE" | "BANNED";

export const updateTutorProfile = async (data: {
  name: string;
  bio?: string | null;
  hourlyRate: number;
}) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/tutors/profile`, {
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

  revalidateTag("get-my-tutor-profile", "max");

  return res.json();
};

export const setTutorCategories = async (categoryIds: string[]) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/tutors/profile/set-categories`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify({ categoryIds }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(
      `Failed setting tutor categories (${res.status}): ${error.error}`,
    );
  }

  revalidateTag("get-my-tutor-profile", "max");

  return res.json();
};

export const createAvailability = async (data: {
  startTime: string;
  endTime: string;
}) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/tutors/availability`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }

  revalidateTag("get-my-tutor-profile", "max");

  return res.json();
};
