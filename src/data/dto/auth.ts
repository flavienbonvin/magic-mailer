"use server";

import { PAGES } from "@/constants";
import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";
import { createCookie } from "../helpers/cookie";

const isEmailAllowed = async (email: string) => {
  const allowed = await get("allowedEmails");
  if (!allowed || !Array.isArray(allowed)) return undefined;

  return allowed.some((e) => e === email);
};

export async function login(email: string) {
  const isAllowed = await isEmailAllowed(email);
  if (!isAllowed) return;
  createCookie(email);
  redirect(PAGES.DASHBOARD);
}
