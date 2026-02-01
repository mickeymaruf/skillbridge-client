import { ApiResponse, TutorProfile, TutorProfileResponse } from "@/types";
import { cookies } from "next/headers";

export const tutorService = {
  getAllTutors: async (searchParams: {
    [key: string]: string | string[] | undefined;
  }): Promise<ApiResponse<TutorProfile[]>> => {
    const url = new URL(`http://localhost:5000/api/tutors`);

    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value.toString());
    });

    const res = await fetch(url.toString());

    if (!res.ok) {
      throw new Error(`Failed to fetch all tutors (${res.status})`);
    }

    return await res.json();
  },
  getTutorDetails: async (id: string): Promise<TutorProfileResponse> => {
    const res = await fetch(`http://localhost:5000/api/tutors/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch tutor details (${res.status})`);
    }

    return await res.json();
  },
  getMyTutorProfile: async (): Promise<TutorProfileResponse> => {
    const cookieStore = await cookies();

    const res = await fetch(`http://localhost:5000/api/tutors/profile/me`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed to fetch tutor details (${res.status}): ${error.error}`,
      );
    }

    return await res.json();
  },
  createTutorProfile: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`http://localhost:5000/api/tutors/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed  create tutor profile (${res.status}): ${error.error}`,
      );
    }

    const data = await res.json();
    return { data };
  },
};
