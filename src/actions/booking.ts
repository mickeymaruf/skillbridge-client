"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

// export type BookingStatus = "CONFIRMED" | "COMPLETED" | "CANCELLED";

export const markBookingCompleted = async (bookingId: string) => {
  const cookieStore = await cookies();

  const res = await fetch(
    `http://localhost:5000/api/bookings/${bookingId}/complete`,
    {
      method: "PATCH",
      headers: { Cookie: cookieStore.toString() },
    },
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }

  revalidateTag("bookings", "max");

  return res.json();
};
