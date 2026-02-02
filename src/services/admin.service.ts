import { cookies } from "next/headers";
import { env } from "../../env";

export const adminService = {
  getStats: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/admin/analytics`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch analytics (${res.status})`,
      );
    }

    return { data };
  },
};
