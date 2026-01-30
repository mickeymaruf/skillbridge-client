import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userRole } from "./constants/userRole";
import { authService } from "./services/auth.service";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const { data: session } = await authService.getSession();
  const role = session?.user?.role;

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (
    role === userRole.STUDENT &&
    (pathname.startsWith("/tutor") || pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    role === userRole.TUTOR &&
    (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL("/tutor/dashboard", request.url));
  }

  if (
    role === userRole.ADMIN &&
    (pathname.startsWith("/dashboard") || pathname.startsWith("/tutor"))
  ) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/tutor/:path*", "/admin/:path*"],
};
