"use server";

import { AUTH_COOKIE, AUTH_COOKIE_MAX_AGE } from "@/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const getCookiesOptions = (email: string) => ({
  name: AUTH_COOKIE,
  maxAge: AUTH_COOKIE_MAX_AGE,
  value: email,
  secure: true,
  path: "/",
});

export const hasValidCookie = () => {
  const cookieStore = cookies();
  return cookieStore.has(AUTH_COOKIE);
};

export const createCookie = (email: string) => {
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE, email, getCookiesOptions(email));
};

export const refreshCookie = (response: NextResponse) => {
  const cookieStore = cookies();
  const email = cookieStore.get(AUTH_COOKIE);
  if (!email) return;

  response.cookies.set(getCookiesOptions(email.value));
  return response;
};
