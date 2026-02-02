import { cookies } from "next/headers";
import { env } from "../../env";

export const authService = {
  getSession: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.AUTH_URL}/get-session`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
      next: { tags: ["session"] },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch session (${res.status})`);
    }

    const data = await res.json();
    return { data };
  },
};
