"use server";

import { AUTH_COOKIE, AUTH_COOKIE_MAX_AGE, PAGES } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAllowedEmails } from "./user";

export async function login(email: string) {
  const emails = await getAllowedEmails();
  if (!emails.some((e) => e.email === email)) {
    return;
  }

  cookies().set(AUTH_COOKIE, email, {
    maxAge: AUTH_COOKIE_MAX_AGE,
  });

  redirect(PAGES.DASHBOARD);
}
