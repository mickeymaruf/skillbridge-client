import {
  Users,
  UserCheck,
  UserX,
  UserCog,
  CalendarCheck,
  Folder,
  Star,
  Ban,
} from "lucide-react";

export const STAT_CONFIG: Record<
  string,
  { category: string; label: string; icon: React.ElementType; href?: string }
> = {
  userCount: {
    category: "Users",
    label: "Total Users",
    icon: Users,
    href: "/admin/users",
  },
  tutorCount: {
    category: "Users",
    label: "Tutors",
    icon: UserCheck,
    href: "/admin/users",
  },
  studentCount: {
    category: "Users",
    label: "Students",
    icon: Users,
    href: "/admin/users",
  },
  adminCount: {
    category: "Users",
    label: "Admins",
    icon: UserCog,
    href: "/admin/users",
  },

  bannerUserCount: {
    category: "Flagged Users",
    label: "Banned Users",
    icon: Ban,
    href: "/admin/users",
  },
  unverifiedUserCount: {
    category: "Flagged Users",
    label: "Unverified Users",
    icon: UserX,
    href: "/admin/users",
  },

  bookingCount: {
    category: "Others",
    label: "Bookings",
    icon: CalendarCheck,
    href: "/admin/bookings",
  },
  categoryCount: {
    category: "Others",
    label: "Categories",
    icon: Folder,
    href: "/admin/categories",
  },
  reviewCount: {
    category: "Others",
    label: "Reviews",
    icon: Star,
  },
};
