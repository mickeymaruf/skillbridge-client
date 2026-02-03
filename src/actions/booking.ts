"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { env } from "../../env";

// export type BookingStatus = "CONFIRMED" | "COMPLETED" | "CANCELLED";

export const markBookingCompleted = async (
  bookingId: string,
): Promise<{ success: boolean; message?: string }> => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/bookings/${bookingId}/complete`, {
    method: "PATCH",
    headers: { Cookie: cookieStore.toString() },
  });

  const data = await res.json();
  if (res.ok) {
    revalidateTag("bookings", "max");
  }
  return data;
};

export const markBookingCancelled = async (bookingId: string) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/bookings/${bookingId}/cancel`, {
    method: "PATCH",
    headers: { Cookie: cookieStore.toString() },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to mark booking ${bookingId} cancelled`,
    );
  }

  revalidateTag("bookings", "max");

  return data;
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

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to create booking for slot ${slotId}`,
    );
  }

  revalidateTag("tutor-profile", "max");

  return data;
};

export const writeReview = async (payload: {
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
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to write review for booking ${payload.bookingId}`,
    );
  }

  revalidateTag("bookings", "max");

  return data;
};
