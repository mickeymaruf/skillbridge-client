import {
  Users,
  UserCheck,
  UserX,
  UserCog,
  CalendarCheck,
  Image,
  Folder,
  Star,
} from "lucide-react";

export const STAT_CONFIG: Record<
  string,
  { category: string; label: string; icon: React.ElementType }
> = {
  userCount: { category: "Users", label: "Total Users", icon: Users },
  tutorCount: { category: "Users", label: "Tutors", icon: UserCheck },
  studentCount: { category: "Users", label: "Students", icon: Users },
  adminCount: { category: "Users", label: "Admins", icon: UserCog },

  bannerUserCount: { category: "Users", label: "Banner Users", icon: Image },
  unverifiedUserCount: {
    category: "Users",
    label: "Unverified Users",
    icon: UserX,
  },

  bookingCount: { category: "Others", label: "Bookings", icon: CalendarCheck },
  categoryCount: { category: "Others", label: "Categories", icon: Folder },
  reviewCount: { category: "Others", label: "Reviews", icon: Star },
};
