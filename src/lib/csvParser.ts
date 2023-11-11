import { CSVAttendee, CSVAttendeeParser } from "@/dto/models/csvAttendee";
import Papa from "papaparse";

export const parseFileToAttendees = (file: File, callback: (data: CSVAttendee[]) => void) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      // One temp UUID created for all attendees to have remove duplicates in the set
      const tempUUID = crypto.randomUUID();
      const attendees = new Set<string>();

      results.data.forEach((item) => {
        const attendee = CSVAttendeeParser.parse({ id: tempUUID, ...(item ?? {}) });
        attendees.add(JSON.stringify(attendee));
      });

      // Each attendee gets a new different UUID
      const finalAttendees = Array.from(attendees).map((item) => {
        return {
          ...JSON.parse(item),
          id: crypto.randomUUID(),
        };
      });

      callback(finalAttendees);
    },
  });
};
