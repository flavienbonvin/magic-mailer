import { db } from "./db";
import { ShowStatus, attendees, shows, users } from "./schema";

const seedDatabase = async () => {
  console.log("Seeding database");

  await db.insert(users).values({
    email: process.env.ADMIN_EMAIL!,
  });

  const show = await db
    .insert(shows)
    .values({
      name: "The Mandalorian",
      date: new Date(),
      status: ShowStatus.incoming,
    })
    .returning({ id: shows.id });

  await db.insert(attendees).values({
    firstName: "John",
    lastName: "Doe",
    email: process.env.ADMIN_EMAIL!,
    linkedShow: show[0].id,
  });

  console.log("Database seeded");
};

seedDatabase();
