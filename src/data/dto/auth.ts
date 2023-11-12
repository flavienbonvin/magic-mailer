"use server";

import { EDGE_CONFIG, PAGES } from "@/constants";
import { get } from "@vercel/edge-config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createCookie, getCookie } from "../helpers/cookie";

async function edgeConfigRequest(body: string) {
  try {
    const fetchURL = `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`;
    await fetch(fetchURL, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_EDGE}`,
        "Content-Type": "application/json",
      },
      body,
    });

    await new Promise((resolve) => setTimeout(resolve, 3000));
    revalidatePath(PAGES.ADMIN);
  } catch (error) {}
}

async function getAllowedEmails() {
  const allowed = await get(EDGE_CONFIG.ALLOWED_EMAILS);
  if (!allowed || !Array.isArray(allowed)) return [];
  return allowed;
}

async function getAdmins() {
  const admins = await get(EDGE_CONFIG.ALLOWED_ADMIN_EMAILS);
  if (!admins || !Array.isArray(admins)) return [];
  return admins;
}

async function isEmailAllowed(email: string) {
  const allowed = await getAllowedEmails();
  return allowed.some((e) => e === email);
}

export async function login(email: string) {
  const isAllowed = await isEmailAllowed(email);
  if (!isAllowed) return;

  createCookie(email);
  redirect(PAGES.DASHBOARD);
}

export async function isLoggedUserAdmin() {
  const email = getCookie()?.value;
  if (!email) return false;

  const isAllowed = await isEmailAllowed(email);
  if (!isAllowed) return false;

  const adminsEmail = await getAdmins();
  return adminsEmail.some((e) => e === email);
}

export async function getAdminpageData() {
  const isAdmin = await isLoggedUserAdmin();
  if (!isAdmin) redirect(PAGES.DASHBOARD);

  const allowedEmails = await getAllowedEmails();
  const adminEmails = await getAdmins();

  const data = allowedEmails.map((email) => {
    const isAdmin = adminEmails.some((e) => e === email);
    return {
      id: crypto.randomUUID(),
      email: email?.toString() ?? "",
      isAdmin: !!isAdmin,
    };
  });

  return data;
}

export async function addAccessToEmail(email: string, isAdmin: boolean) {
  const allowedEmail = await getAllowedEmails();
  const adminEmails = await getAdmins();

  const body = {
    items: [
      { operation: "update", key: EDGE_CONFIG.ALLOWED_EMAILS, value: [...allowedEmail, email] },
    ],
  };

  if (isAdmin) {
    body.items.push({
      operation: "update",
      key: EDGE_CONFIG.ALLOWED_ADMIN_EMAILS,
      value: [...adminEmails, email],
    });
  }

  await edgeConfigRequest(JSON.stringify(body));
}

export async function removeAccessToEmail(email: string) {
  const allowedEmail = await getAllowedEmails();
  const adminEmails = await getAdmins();

  const body = {
    items: [
      {
        operation: "update",
        key: EDGE_CONFIG.ALLOWED_EMAILS,
        value: allowedEmail.filter((e) => e !== email),
      },
      {
        operation: "update",
        key: EDGE_CONFIG.ALLOWED_ADMIN_EMAILS,
        value: adminEmails.filter((e) => e !== email),
      },
    ],
  };

  await edgeConfigRequest(JSON.stringify(body));
}

export async function toggleAddminAccessToAddress(email: string) {
  const adminEmails = await getAdmins();

  const body = {
    items: [
      {
        operation: "update",
        key: EDGE_CONFIG.ALLOWED_ADMIN_EMAILS,
        value: adminEmails.some((e) => e === email)
          ? adminEmails.filter((e) => e !== email)
          : [...adminEmails, email],
      },
    ],
  };

  await edgeConfigRequest(JSON.stringify(body));
}
