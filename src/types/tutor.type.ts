export interface TutorProfile {
  id: string;
  userId: string;
  bio: string | null;
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  user: User;
  categories: TutorCategory[];
  availability: AvailabilitySlot[];
  reviews: Review[];
  _count?: {
    availability: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image: string | null;
  createdAt?: string;
  updatedAt?: string;
  role?: "TUTOR" | "STUDENT" | string;
  status: "ACTIVE" | "INACTIVE" | string;
}

export interface TutorCategory {
  id: string;
  tutorProfileId: string;
  categoryId: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface AvailabilitySlot {
  id: string;
  tutorProfileId: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  booking?: Booking;
}

export type Booking = {
  id: string;
  status: "CONFIRMED" | "COMPLETED" | "CANCELLED";
  createdAt: Date;

  student: {
    id: string;
    name: string;
    email: string;
  };

  tutorProfile: TutorProfile;

  slot: {
    startTime: Date;
    endTime: Date;
  };

  review?: {
    rating: number;
    review: string;
  };
};

export interface Review {
  id: string;
  bookingId: string;
  studentId: string;
  tutorProfileId: string;
  rating: number;
  review: string;
  createdAt: string;
  student: User;
}
export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export type TutorProfileResponse = ApiResponse<TutorProfile>;
