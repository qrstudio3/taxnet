import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Environment flag: checks MAINTENANCE_MODE or NEXT_PUBLIC_MAINTENANCE_MODE
  const isMaintenance =
    process.env.MAINTENANCE_MODE === "true" ||
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true" ||
    process.env.MAINTENANCE_MODE === "1";

  // Secret bypass key (default fallback is 'taxnet-admin' if not set in Vercel)
  const bypassSecret = process.env.MAINTENANCE_BYPASS_SECRET || "taxnet-admin";

  // 1. Check for manual bypass activation: ?bypass=SECRET
  const bypassQuery = searchParams.get("bypass");
  if (bypassQuery) {
    if (
      bypassQuery.toLowerCase() === "exit" ||
      bypassQuery.toLowerCase() === "clear" ||
      bypassQuery.toLowerCase() === "off"
    ) {
      const response = NextResponse.redirect(new URL("/maintenance", request.url));
      response.cookies.delete("taxnet_bypass_maintenance");
      return response;
    }

    if (bypassQuery === bypassSecret) {
      // Valid secret provided: set 24-hour bypass cookie and redirect to clean URL
      const cleanUrl = new URL(request.url);
      cleanUrl.searchParams.delete("bypass");
      const response = NextResponse.redirect(cleanUrl);
      response.cookies.set("taxnet_bypass_maintenance", "true", {
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
        httpOnly: true,
        sameSite: "lax",
      });
      return response;
    }
  }

  // 2. Check if user already holds a valid bypass cookie
  const hasBypassCookie = request.cookies.get("taxnet_bypass_maintenance")?.value === "true";
  if (hasBypassCookie) {
    // If user has bypass cookie and visits /maintenance, allow them to view or exit
    return NextResponse.next();
  }

  // 3. If Maintenance Mode is Active
  if (isMaintenance) {
    // Allow the /maintenance page itself so it can render
    if (pathname === "/maintenance") {
      return NextResponse.next();
    }

    // For API calls during maintenance, respond with 503 JSON
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        {
          error: "System maintenance in progress. Please try again shortly.",
          status: 503,
        },
        {
          status: 503,
          headers: {
            "Retry-After": "3600",
            "Cache-Control": "no-store, max-age=0",
          },
        }
      );
    }

    // For regular pages, rewrite to /maintenance with HTTP 503 Service Unavailable
    // Rewriting preserves the original URL for SEO and allows instant reload when maintenance ends
    const rewriteResponse = NextResponse.rewrite(new URL("/maintenance", request.url), {
      status: 503,
      headers: {
        "Retry-After": "3600",
        "Cache-Control": "no-store, max-age=0",
      },
    });
    return rewriteResponse;
  }

  // 4. If Maintenance Mode is Inactive (site is live)
  // If someone manually types /maintenance while the site is healthy, redirect them home
  if (pathname === "/maintenance") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Keep backwards-compatible export for any Next tooling
export const middleware = proxy;

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static JS/CSS files)
     * - _next/image (Next.js image optimization files)
     * - favicon.ico, logo, icons, fonts, media
     */
    "/((?!_next/static|_next/image|favicon.ico|logo/|icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|css|js|woff|woff2|ttf)).*)",
  ],
};

