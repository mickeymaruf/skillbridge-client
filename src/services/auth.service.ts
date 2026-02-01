import { cookies } from "next/headers";

const AUTH_URL = process.env.AUTH_URL;

export const authService = {
  getSession: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${AUTH_URL}/get-session`, {
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
