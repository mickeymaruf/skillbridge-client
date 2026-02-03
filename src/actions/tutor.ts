"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { env } from "../../env";

export type UserRole = "ACTIVE" | "BANNED";

export const updateTutorProfile = async (payload: {
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
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to update tutor profile (${res.status})`,
    );
  }

  revalidateTag("get-my-tutor-profile", "max");

  return data;
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

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to set tutor categories (${res.status})`,
    );
  }

  revalidateTag("get-my-tutor-profile", "max");

  return data;
};

export const createAvailability = async (payload: {
  startTime: string;
  endTime: string;
}): Promise<{ success: boolean; message?: string; data?: any }> => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/tutors/availability`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (res.ok) {
    revalidateTag("get-my-tutor-profile", "max");
  }

  return data;
};
