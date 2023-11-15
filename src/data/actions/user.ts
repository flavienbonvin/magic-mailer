"use server";

import { PAGES } from "@/constants";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { NewUser, users } from "../schema";

export const getAllUsers = async () => {
  return await db.select().from(users);
};

export const getUser = async (email?: string) => {
  if (!email) return null;
  return await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1)
    .then((res) => (res ? res[0] : null));
};

export const getAllowedEmails = async () => {
  return await db.select({ email: users.email }).from(users);
};

export const toggleAdmin = async (id: string, isAdmin: boolean) => {
  await db.update(users).set({ isAdmin: !isAdmin }).where(eq(users.id, id));
  revalidatePath(PAGES.ADMIN);
};

export const insertUser = async (data: NewUser) => {
  await db.insert(users).values(data);
  revalidatePath(PAGES.ADMIN);
};

export const deleteUser = async (userId: string) => {
  await db.delete(users).where(eq(users.id, userId));
  revalidatePath(PAGES.ADMIN);
};
