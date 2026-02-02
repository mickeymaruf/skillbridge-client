import { env } from "../../env";

export const categoryService = {
  getCategories: async () => {
    const res = await fetch(`${env.API_URL}/categories`, {
      next: {
        tags: ["categories"],
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch categories (${res.status})`);
    }

    const data = await res.json();
    return { data };
  },
};
