import { ApiResponse, TutorProfile, TutorProfileResponse } from "@/types";
import { cookies } from "next/headers";
import { env } from "../../env";
import { revalidateTag } from "next/cache";

export const tutorService = {
  getAllTutors: async (searchParams: {
    [key: string]: string | string[] | undefined;
  }): Promise<ApiResponse<TutorProfile[]>> => {
    const cookieStore = await cookies();
    const url = new URL(`${env.API_URL}/tutors`);

    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value.toString());
    });

    const res = await fetch(url.toString(), {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch all tutors (${res.status})`,
      );
    }

    return data;
  },
  getRelatedTutors: async (
    id: string,
  ): Promise<ApiResponse<TutorProfile[]>> => {
    const res = await fetch(`${env.API_URL}/tutors/${id}/related`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!res.ok) throw new Error("Failed to fetch related tutors");
    return res.json();
  },
  getRecommendedMentors: async (): Promise<ApiResponse<TutorProfile[]>> => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/recommendations/me`, {
      method: "GET",
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: { tags: ["recommendations"] },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch recommended mentors (${res.status})`,
      );
    }

    return data;
  },
  getTutorDetails: async (id: string): Promise<TutorProfileResponse> => {
    const cookieStore = await cookies();
    const res = await fetch(`${env.API_URL}/tutors/${id}`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: { tags: ["tutor-profile"] },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch tutor details (${res.status})`,
      );
    }

    return data;
  },
  getMyTutorProfile: async (): Promise<TutorProfileResponse> => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/profile/me`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: { tags: ["get-my-tutor-profile"] },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch tutor details (${res.status})`,
      );
    }

    return data;
  },
  getTutorAvailability: async () => {
    const cookieStore = await cookies();

    const res = await fetch(`${env.API_URL}/tutors/profile/availability`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch tutor availability (${res.status})`,
      );
    }

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

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch tutor bookings (${res.status})`,
      );
    }

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

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed to fetch tutor stats (${res.status})`,
      );
    }

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

    const data = await res.json();
    if (!res.ok) {
      throw new Error(
        data.message || `Failed create tutor profile (${res.status})`,
      );
    }
    revalidateTag("get-my-tutor-profile", "max");

    return { data };
  },
};
