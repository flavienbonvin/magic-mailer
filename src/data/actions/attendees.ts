"use server";

import { PAGES } from "@/constants";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../db";
import { AttendeeSource, NewAttendee, attendees } from "../schema";

export const insertAttendee = async (data: NewAttendee) => {
  await db.insert(attendees).values(data);
  revalidatePath(PAGES.SIMPLE_STEP1);
};

export const insertExperienceAttendee = async (data: NewAttendee) => {
  await db.insert(attendees).values(data);
  redirect(PAGES.EXPERIENCE_SUCCESS);
};

export const insertMultipleAttendees = async (data: NewAttendee[]) => {
  await db.insert(attendees).values(data);
  revalidatePath(PAGES.SIMPLE_STEP1);
};

export const updateAttendee = async (id: number, data: NewAttendee) => {
  await db.update(attendees).set(data).where(eq(attendees.id, id));
  revalidatePath(PAGES.SIMPLE_STEP1);
};

export const deleteAllAttendeesForShow = async (showId: number) => {
  await db.delete(attendees).where(eq(attendees.linkedShow, showId));
  revalidatePath(PAGES.SIMPLE_STEP1);
};

export const deleteAttendee = async (id: number) => {
  await db.delete(attendees).where(eq(attendees.id, id));
  revalidatePath(PAGES.SIMPLE_STEP1);
};

export const isEmailAlreadyRegistered = async (email: string, showID: number) => {
  const result = await db
    .select({})
    .from(attendees)
    .where(and(eq(attendees.email, email), eq(attendees.linkedShow, showID)));
  return result.length > 0;
};

export const getAttendeesForShow = (showId: number) => {
  return db
    .select({
      id: attendees.id,
      email: attendees.email,
      firstName: attendees.firstName,
      lastName: attendees.lastName,
    })
    .from(attendees)
    .where(eq(attendees.linkedShow, showId));
};

export const getAttdeneesBySource = (source: AttendeeSource) => {
  return db
    .select({
      id: attendees.id,
      email: attendees.email,
      firstName: attendees.firstName,
      lastName: attendees.lastName,
      source: attendees.source,
    })
    .from(attendees)
    .where(eq(attendees.source, source));
};

export const getAllAttendees = () => {
  return db
    .select({
      id: attendees.id,
      email: attendees.email,
      firstName: attendees.firstName,
      lastName: attendees.lastName,
      source: attendees.source,
    })
    .from(attendees);
};
