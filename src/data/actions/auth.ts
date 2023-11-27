"use server";

import { PAGES } from "@/constants";
import { redirect } from "next/navigation";
import { createCookie } from "../../lib/cookie";
import { getAllowedEmails } from "./user";

export async function login(email: string) {
  const emails = await getAllowedEmails();
  if (!emails.some((e) => e.email === email)) {
    return;
  }

  createCookie(email);
  redirect(PAGES.DASHBOARD);
}
