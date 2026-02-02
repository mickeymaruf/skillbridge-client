import { env } from "../../env";

export const categoryService = {
  getCategories: async () => {
    const res = await fetch(`${env.API_URL}/categories`, {
      next: {
        tags: ["categories"],
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch categories (${res.status})`,
      );
    }

    return { data };
  },
};
