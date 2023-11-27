import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, PAGES } from "./constants";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === PAGES.LOGOUT) {
    const response = NextResponse.redirect(new URL(PAGES.LOGIN, request.url));
    response.cookies.delete(AUTH_COOKIE);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
