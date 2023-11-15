import { boolean, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: uuid("id").defaultRandom(),
  email: text("email").notNull(),
  isAdmin: boolean("is_admin").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const shows = pgTable("show", {
  id: uuid("id").defaultRandom(),
  name: text("name").notNull(),
  date: timestamp("date").notNull(),
  status: integer("status").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Show = typeof shows.$inferSelect;
export type NewShow = typeof shows.$inferInsert;
export enum ShowStatus {
  incoming = 0,
  emailSent = 1,
  finished = 9,
}
