import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, PAGES } from "./constants";
import { hasValidCookie } from "./data/helpers/cookie";

export function middleware(request: NextRequest) {
  // Public page
  if (request.nextUrl.pathname === PAGES.EXPERIENCE) {
    return NextResponse.next();
  }

  const validCookie = hasValidCookie();
  if (request.nextUrl.pathname === PAGES.LOGOUT) {
    const response = NextResponse.redirect(new URL(PAGES.LOGIN, request.url));
    response.cookies.delete(AUTH_COOKIE);
    return response;
  }

  if (request.nextUrl.pathname === PAGES.LOGIN && validCookie) {
    return NextResponse.redirect(new URL(PAGES.DASHBOARD, request.url));
  }

  if (request.nextUrl.pathname !== PAGES.LOGIN && !validCookie) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
