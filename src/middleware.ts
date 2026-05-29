import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function getExpectedToken(password: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "ahlinyacuan-salt-12345");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // We protect all routes starting with /admin, except /admin/login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const adminSession = request.cookies.get("admin_session")?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    const expectedToken = await getExpectedToken(adminPassword);

    if (!adminSession || adminSession !== expectedToken) {
      // Redirect to login page
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Config to specify the matching paths
export const config = {
  matcher: ["/admin/:path*"],
};
