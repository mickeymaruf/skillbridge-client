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
};
