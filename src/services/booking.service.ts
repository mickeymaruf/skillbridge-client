import { BookingStatus } from "@/constants/user";
import { cookies } from "next/headers";

export const bookingService = {
  getAllBookings: async () => {
    const cookieStore = await cookies();

    const res = await fetch(
      "http://localhost:5000/api/admin/get-all-bookings",
      {
        next: { tags: ["bookings"] },
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch bookings (${res.status})`);
    }

    const data = await res.json();
    return { data };
  },
  getMyBookings: async (payload: {
    confirmed?: boolean;
    cancelled?: boolean;
    completed?: boolean;
  }) => {
    const cookieStore = await cookies();
    const url = new URL(`http://localhost:5000/api/bookings`);

    Object.entries(payload).forEach(
      ([key, value]) =>
        value && url.searchParams.append("status", key.toUpperCase()),
    );

    const res = await fetch(url.toString(), {
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: { tags: ["bookings"] },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed to fetch tutor bookings (${res.status}): ${error.error}`,
      );
    }

    const data = await res.json();
    return { data };
  },
};
