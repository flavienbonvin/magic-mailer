import { CSVAttendee, CSVAttendeeParser } from "@/data/models/csvAttendee";
import Papa from "papaparse";

export const parseFileToAttendees = (file: File, callback: (data: CSVAttendee[]) => void) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const attendees = new Set<string>();

      results.data.forEach((item: any) => {
        if (!item["EMAIL CLIENT"]) {
          return;
        }

        const attendee = CSVAttendeeParser.safeParse({ ...(item ?? {}) });
        attendees.add(JSON.stringify(attendee));
      });

      const finalAttendees = Array.from(attendees).map((item) => {
        return {
          ...JSON.parse(item),
        };
      });

      callback(finalAttendees);
    },
  });
};
