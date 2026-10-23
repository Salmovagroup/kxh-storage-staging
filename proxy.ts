// STAGING-ONLY GUARD (Salmova). Inactive unless STAGING_BASIC_AUTH is set.
// Do NOT merge into master; it does nothing on live because the env var is not set there.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const creds = process.env.STAGING_BASIC_AUTH; // format "user:password"
  if (!creds) return NextResponse.next();

  const header = request.headers.get("authorization") || "";
  const [scheme, encoded] = header.split(" ");
  if (scheme === "Basic" && encoded && atob(encoded) === creds) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  return new NextResponse("Staging site - authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="KXH Staging"',
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png).*)"],
};
