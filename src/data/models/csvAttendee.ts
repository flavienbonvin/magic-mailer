import { z } from "zod";

export const CSVAttendeeParser = z
  .object({
    "EMAIL CLIENT": z.string().email().optional(),
    "PRENOM CLIENT": z.string().optional(),
    "NOM CLIENT": z.string().optional(),
  })
  .transform((attendee) => ({
    email: attendee["EMAIL CLIENT"],
    firstName: attendee["PRENOM CLIENT"],
    lastName: attendee["NOM CLIENT"],
  }));

export type CSVAttendee = z.infer<typeof CSVAttendeeParser>;
