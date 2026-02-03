"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { env } from "../../env";

export const getCategories = async () => {
  const res = await fetch(`${env.API_URL}/categories`, {
    next: { tags: ["categories"] },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to fetch categories (${res.status})`,
    );
  }

  return { data };
};

export const createCategory = async (payload: {
  name: string;
  slug: string;
}): Promise<{ success: boolean; message?: string; data?: any }> => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (res.ok) {
    revalidateTag("categories", "max");
  }
  return data;
};

export const deleteCategory = async (id: string) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/categories/${id}`, {
    method: "DELETE",
    headers: { Cookie: cookieStore.toString() },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || `Failed to delete category (${res.status})`,
    );
  }

  revalidateTag("categories", "max");

  return { data };
};
