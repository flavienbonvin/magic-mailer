"use server";

import { AUTH_COOKIE, AUTH_COOKIE_MAX_AGE } from "@/constants";
import { cookies } from "next/headers";

const getCookiesOptions = (email: string) => ({
  name: AUTH_COOKIE,
  maxAge: AUTH_COOKIE_MAX_AGE,
  value: email,
  httpOnly: true,
  path: "/",
});

export const hasValidCookie = () => {
  const cookieStore = cookies();
  return cookieStore.has(AUTH_COOKIE);
};

export const getCookie = () => {
  const cookieStore = cookies();
  return cookieStore.get(AUTH_COOKIE);
};

export const createCookie = (email: string) => {
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE, email, getCookiesOptions(email));
};
