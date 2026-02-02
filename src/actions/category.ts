"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { env } from "../../env";

export const getCategories = async () => {
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
};

export const createCategory = async (payload: {
  name: string;
  slug: string;
}) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to create category (${res.status})`);
  }

  revalidateTag("categories", "max");

  const data = await res.json();
  return { data };
};

export const deleteCategory = async (id: string) => {
  const cookieStore = await cookies();

  const res = await fetch(`${env.API_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete category (${res.status})`);
  }

  revalidateTag("categories", "max");

  const data = await res.json();
  return { data };
};
