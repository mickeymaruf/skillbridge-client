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

    if (!res.ok) {
      throw new Error(`Failed to fetch users (${res.status})`);
    }

    const data = await res.json();
    return { data };
  },
};
