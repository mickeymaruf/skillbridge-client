import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UserRole } from "./src/constants/user";
import { authService } from "./src/services/auth.service";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const { data: session } = await authService.getSession();
  console.log(session);
  const role = session?.user?.role;

  // if (!session) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  if (
    role === UserRole.STUDENT &&
    (pathname.startsWith("/tutor") || pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    role === UserRole.TUTOR &&
    (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))
  ) {
    return NextResponse.redirect(new URL("/tutor/dashboard", request.url));
  }

  if (
    role === UserRole.ADMIN &&
    (pathname.startsWith("/dashboard") || pathname.startsWith("/tutor"))
  ) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/tutor/:path*", "/admin/:path*"],
};
