import { z } from "zod";

export const CSVAttendeeParser = z
  .object({
    id: z.string().uuid(),
    "EMAIL CLIENT": z.string().email().optional(),
    "PRENOM CLIENT": z.string().optional(),
    "NOM CLIENT": z.string().optional(),
  })
  .transform((attendee) => ({
    id: attendee.id,
    email: attendee["EMAIL CLIENT"],
    firstName: attendee["PRENOM CLIENT"],
    lastName: attendee["NOM CLIENT"],
  }));

export type CSVAttendee = z.infer<typeof CSVAttendeeParser>;
