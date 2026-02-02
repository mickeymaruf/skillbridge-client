import { cookies } from "next/headers";
import { env } from "../../env";

export const bookingService = {
  getAllBookings: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/admin/get-all-bookings`, {
      next: { tags: ["bookings"] },
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch bookings (${res.status})`,
      );
    }

    return { data };
  },
  getMyBookings: async (payload: {
    confirmed?: boolean;
    cancelled?: boolean;
    completed?: boolean;
  }) => {
    const cookieStore = await cookies();
    const url = new URL(`${env.API_URL}/bookings`);

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

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch tutor bookings (${res.status})`,
      );
    }

    return { data };
  },
};
