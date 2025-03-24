import { NextResponse } from "next/server";

export function middleware(req) {
  // Get the authentication token from cookies
  const token = req.cookies.get("token")?.value;

  // Redirect unauthenticated users trying to access protected routes
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  
  return NextResponse.next();
}

// 🔥 Define which routes should be protected
export const config = {
  matcher: ["/dashboard/:path*"], // Protect all dashboard pages
};
