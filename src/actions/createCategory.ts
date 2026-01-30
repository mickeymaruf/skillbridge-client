"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createCategory = async (payload: {
  name: string;
  slug: string;
}) => {
  const cookieStore = await cookies();

  const res = await fetch(`http://localhost:5000/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieStore.toString(),
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch categories (${res.status})`);
  }

  revalidateTag("categories", "max");

  const data = await res.json();
  return { data };
};
