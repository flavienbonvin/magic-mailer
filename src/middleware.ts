import { NextRequest, NextResponse } from "next/server";
import { PAGES } from "./constants";
import { hasValidCookie } from "./data/helpers/cookie";

export function middleware(request: NextRequest) {
  const validCookie = hasValidCookie();

  if (request.nextUrl.pathname === "/" && validCookie) {
    return NextResponse.redirect(new URL(PAGES.DASHBOARD, request.url));
  } else if (request.nextUrl.pathname !== "/" && !validCookie) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
