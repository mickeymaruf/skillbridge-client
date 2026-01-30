export const categoryService = {
  getCategories: async () => {
    const res = await fetch(`http://localhost:5000/api/categories`, {
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
