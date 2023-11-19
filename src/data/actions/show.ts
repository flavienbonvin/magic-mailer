"use server";

import { PAGES } from "@/constants";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { NewShow, ShowStatus, shows } from "../schema";

export const getAllShows = async () => {
  return await db.select().from(shows);
};

export const getAllIncomingShow = async () => {
  return await db
    .select()
    .from(shows)
    .where(eq(shows.status, ShowStatus.incoming))
    .orderBy(shows.date);
};

export const getAllFinishedShow = async () => {
  return await db
    .select()
    .from(shows)
    .where(eq(shows.status, ShowStatus.finished))
    .orderBy(shows.date);
};

export const insertShow = async (show: NewShow) => {
  await db.insert(shows).values(show);
  revalidatePath(PAGES.DASHBOARD);
};

export const updateShow = async (id: number, show: NewShow) => {
  await db.update(shows).set(show).where(eq(shows.id, id));
  revalidatePath(PAGES.DASHBOARD);
};

export const deleteShow = async (id: number) => {
  await db.delete(shows).where(eq(shows.id, id));
  revalidatePath(PAGES.DASHBOARD);
};
