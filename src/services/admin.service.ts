import { cookies } from "next/headers";

export const adminService = {
  getStats: async () => {
    const cookieStore = await cookies();

    const res = await fetch("http://localhost:5000/api/admin/analytics", {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch analytics (${res.status})`);
    }

    const data = await res.json();
    return { data };
  },
};
