import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, PAGES } from "./constants";
import { getUser } from "./data/actions/user";
import { getCookie, hasValidCookie } from "./data/helpers/cookie";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public page
  if (pathname === PAGES.EXPERIENCE) {
    return NextResponse.next();
  }

  const validCookie = hasValidCookie();
  if (pathname === PAGES.LOGOUT) {
    const response = NextResponse.redirect(new URL(PAGES.LOGIN, request.url));
    response.cookies.delete(AUTH_COOKIE);
    return response;
  }

  if (pathname === PAGES.LOGIN && validCookie) {
    return NextResponse.redirect(new URL(PAGES.DASHBOARD, request.url));
  }

  if (pathname !== PAGES.LOGIN && !validCookie) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, request.url));
  }

  const cookie = getCookie();
  const user = await getUser(cookie?.value);
  if (pathname === PAGES.ADMIN && validCookie && !user?.isAdmin) {
    return NextResponse.redirect(new URL(PAGES.DASHBOARD, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
