import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavUser } from "./nav-user";
import { UserRole } from "@/constants/user";
import { authClient } from "@/lib/auth-client";

type Routes = {
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
  }[];
};

const routes: Record<string, Routes[]> = {
  student: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Bookings",
          url: "/dashboard/bookings",
        },
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
      ],
    },
  ],
  tutor: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/tutor/dashboard",
        },
        {
          title: "Availability",
          url: "/tutor/availability",
        },
        {
          title: "Profile",
          url: "/tutor/profile",
        },
      ],
    },
  ],
  admin: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/admin",
        },
        {
          title: "Users",
          url: "/admin/users",
        },
        {
          title: "Bookings",
          url: "/admin/bookings",
        },
        {
          title: "Categories",
          url: "/admin/categories",
        },
      ],
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: {
  user: any & React.ComponentProps<typeof Sidebar>;
}) {
  let navMenu: Routes[] = [];

  switch (user.role) {
    case UserRole.STUDENT:
      navMenu = routes.student;
      break;
    case UserRole.TUTOR:
      navMenu = routes.tutor;
      break;
    case UserRole.ADMIN:
      navMenu = routes.admin;
      break;

    default:
      navMenu = [];
      break;
  }

  if (user.role)
    return (
      <Sidebar {...props}>
        <SidebarHeader className="border-sidebar-border h-16 border-b">
          <NavUser
            user={{
              name: user.name,
              email: user.email,
              avatar: user.avatar,
            }}
          />
        </SidebarHeader>
        <SidebarContent>
          {/* We create a SidebarGroup for each parent. */}
          {navMenu.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item: any) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    );
}
