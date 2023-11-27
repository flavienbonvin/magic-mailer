"use server";

import { PAGES } from "@/constants";
import { redirect } from "next/navigation";
import { createCookie } from "../helpers/cookie";
import { getAllowedEmails } from "./user";

export async function login(email: string) {
  console.log("a", new Date().getTime());

  const emails = await getAllowedEmails();
  if (!emails.some((e) => e.email === email)) {
    return;
  }

  console.log("b", new Date().getTime());
  createCookie(email);
  console.log("c", new Date().getTime());
  redirect(PAGES.DASHBOARD);
}
