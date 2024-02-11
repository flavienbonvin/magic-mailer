import { db } from "./db";
import { AttendeeSource, ShowStatus, attendees, shows, users } from "./schema";

const seedDatabase = async () => {
  console.log("Seeding database");

  await db.insert(users).values({
    email: process.env.ADMIN_EMAIL!,
  });

  const show = await db
    .insert(shows)
    .values({
      name: "Management Show",
      date: new Date(),
      status: ShowStatus.incoming,
      visible: false,
      image1Name: crypto.randomUUID(),
      image2Name: crypto.randomUUID(),
    })
    .returning({ id: shows.id });

  await db.insert(attendees).values({
    firstName: "John",
    lastName: "Doe",
    email: process.env.ADMIN_EMAIL!,
    linkedShow: show[0].id,
    source: AttendeeSource.manual,
  });

  console.log("Database seeded");
};

seedDatabase();
