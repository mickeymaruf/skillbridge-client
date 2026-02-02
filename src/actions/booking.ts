"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { env } from "../../env";

// export type BookingStatus = "CONFIRMED" | "COMPLETED" | "CANCELLED";

export const markBookingCompleted = async (bookingId: string) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/bookings/${bookingId}/complete`, {
    method: "PATCH",
    headers: { Cookie: cookieStore.toString() },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }

  revalidateTag("bookings", "max");

  return res.json();
};

export const markBookingCancelled = async (bookingId: string) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/bookings/${bookingId}/cancel`, {
    method: "PATCH",
    headers: { Cookie: cookieStore.toString() },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }

  revalidateTag("bookings", "max");

  return res.json();
};

export const createBooking = async (slotId: string) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify({ slotId }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }

  revalidateTag("tutor-profile", "max");

  return res.json();
};

export const writeReview = async (data: {
  bookingId: string;
  rating: number;
  review: string;
}) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/reviews`, {
    method: "POST",
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

  revalidateTag("bookings", "max");

  return res.json();
};
