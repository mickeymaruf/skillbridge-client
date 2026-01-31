import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserRole } from "@/constants/user";
import { authService } from "@/services/auth.service";
import React from "react";

export default async function DashboardLayout({
  children,
  student,
  tutor,
  admin,
}: {
  children: React.ReactNode;
  student: React.ReactNode;
  tutor: React.ReactNode;
  admin: React.ReactNode;
}) {
  const { data: session } = await authService.getSession();
  const user = session.user;

  const renderContent = (role: string) => {
    switch (role) {
      case UserRole.STUDENT:
        return student;
      case UserRole.TUTOR:
        return tutor;
      case UserRole.ADMIN:
        return admin;

      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent(user.role)}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
