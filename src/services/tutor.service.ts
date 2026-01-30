import { ApiResponse, TutorProfile, TutorProfileResponse } from "@/types";

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
};
