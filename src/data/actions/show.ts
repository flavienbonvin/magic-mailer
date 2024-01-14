"use server";

import { PAGES } from "@/constants";
import { endOfToday, startOfToday } from "date-fns";
import { and, eq, gte, lte, or } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { NewShow, ShowStatus, shows } from "../schema";

export const getAllShows = async () => {
  return await db.select().from(shows);
};

export const getAllIncomingOrInProgressShow = async () => {
  return db.query.shows.findMany({
    where: or(eq(shows.status, ShowStatus.incoming), eq(shows.status, ShowStatus.emailSent)),
    orderBy: shows.date,
  });
};

export const getAllFinishedShow = async () => {
  return db.query.shows.findMany({
    where: eq(shows.status, ShowStatus.finished),
    orderBy: shows.date,
  });
};

export const getShowById = async (id: number) => {
  return await db.query.shows.findFirst({
    where: eq(shows.id, id),
  });
};

export const getTodayShow = async () => {
  return await db.query.shows.findFirst({
    where: and(
      gte(shows.date, startOfToday()),
      lte(shows.date, endOfToday()),
      eq(shows.status, ShowStatus.incoming),
    ),
  });
};

export const insertShow = async (show: NewShow) => {
  await db.insert(shows).values(show);
  revalidatePath(PAGES.DASHBOARD);
};

export const updateShowStatus = async (id: number, status: ShowStatus) => {
  await db.update(shows).set({ status }).where(eq(shows.id, id));
  revalidatePath(PAGES.DASHBOARD);
};

export const updateShow = async (id: number, show: NewShow) => {
  await db.update(shows).set(show).where(eq(shows.id, id));
  revalidatePath(PAGES.DASHBOARD);
};

export const updateShowImageStatus = async (id: number, imageID: 1 | 2, value: boolean) => {
  if (imageID === 1) {
    await db.update(shows).set({ image1Uploaded: value }).where(eq(shows.id, id));
  } else if (imageID === 2) {
    await db.update(shows).set({ image2Uploaded: value }).where(eq(shows.id, id));
  }
};

export const deleteShow = async (id: number) => {
  await db.delete(shows).where(eq(shows.id, id));
  revalidatePath(PAGES.DASHBOARD);
};
