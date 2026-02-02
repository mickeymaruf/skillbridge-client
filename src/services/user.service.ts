import { cookies } from "next/headers";
import { env } from "../../env";

export const userService = {
  getUsers: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/admin/users`, {
      next: { tags: ["users"] },
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Failed to fetch users (${res.status})`);
    }

    return { data };
  },
};
