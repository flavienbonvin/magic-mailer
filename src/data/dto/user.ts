"use server";

import { db } from "../db";
import { NewUser, users } from "../schema";

export const getAllUsers = async () => {
  return await db.select().from(users);
};

export const insertUser = async (data: NewUser) => {
  await db.insert(users).values(data);
};
