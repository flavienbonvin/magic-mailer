import { CSVAttendee, CSVAttendeeParser } from "@/dto/models/csvAttendee";
import Papa from "papaparse";

export const parseFileToAttendees = (file: File, callback: (data: CSVAttendee[]) => void) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const attendees = new Set<CSVAttendee>();
      results.data.forEach((item) => {
        const attendee = CSVAttendeeParser.parse({ id: crypto.randomUUID(), ...(item ?? {}) });
        attendees.add(attendee);
      });

      callback(Array.from(attendees));
    },
  });
};
