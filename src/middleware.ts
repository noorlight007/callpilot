// www -> apex, strip trailing slash (fixes /free-trial/ vs /free-trial split),
// All 301. Tracking params (utm_*, gclid, fbclid) are deliberately kept so campaign
// attribution survives; canonical tags handle duplicate-URL SEO.
import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "callpilot.pro";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  let changed = false;

  if ((req.headers.get("host") ?? "").startsWith("www.")) {
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    url.port = "";
    changed = true;
  }
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    changed = true;
  }
  return changed ? NextResponse.redirect(url, 301) : NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon.ico|.*\\.(?:png|jpg|jpeg|webp|svg|pdf|ico|css|js|txt|xml)$).*)"],
};

