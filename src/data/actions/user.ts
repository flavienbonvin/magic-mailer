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
  return db.query.users.findFirst({
    where: eq(users.email, email),
  });
};

export const getAllowedEmails = async () => {
  return await db.query.users.findMany({
    columns: {
      email: true,
    },
  });
};

export const toggleAdmin = async (id: number, isAdmin: boolean) => {
  await db.update(users).set({ isAdmin: !isAdmin }).where(eq(users.id, id));
  revalidatePath(PAGES.ADMIN);
};

export const insertUser = async (data: NewUser) => {
  await db.insert(users).values(data);
  revalidatePath(PAGES.ADMIN);
};

export const deleteUser = async (userId: number) => {
  await db.delete(users).where(eq(users.id, userId));
  revalidatePath(PAGES.ADMIN);
};
