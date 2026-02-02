import {
  ApiResponse,
  AvailabilitySlot,
  TutorProfile,
  TutorProfileResponse,
} from "@/types";
import { cookies } from "next/headers";
import { env } from "../../env";

export const tutorService = {
  getAllTutors: async (searchParams: {
    [key: string]: string | string[] | undefined;
  }): Promise<ApiResponse<TutorProfile[]>> => {
    const url = new URL(`${env.API_URL}/tutors`);

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
    const res = await fetch(`${env.API_URL}/tutors/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch tutor details (${res.status})`);
    }

    return await res.json();
  },
  getMyTutorProfile: async (): Promise<TutorProfileResponse> => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/profile/me`, {
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
  getTutorAvailability: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/profile/availability`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed to fetch tutor availability (${res.status}): ${error.error}`,
      );
    }

    const data = await res.json();
    return { data };
  },
  getTutorBookings: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/profile/bookings`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: { tags: ["bookings"] },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed to fetch tutor bookings (${res.status}): ${error.error}`,
      );
    }

    const data = await res.json();
    return { data };
  },
  getTutorStats: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/profile/stats`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: { tags: ["tutorstats"] },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        `Failed to fetch tutor stats (${res.status}): ${error.error}`,
      );
    }

    const data = await res.json();
    return { data };
  },
  createTutorProfile: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/profile`, {
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
