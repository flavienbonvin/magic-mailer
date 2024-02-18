import { CSVAttendee, CSVAttendeeParser } from "@/data/models/csvAttendee";
import Papa from "papaparse";
import { toast } from "sonner";

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

        try {
          const attendee = CSVAttendeeParser.parse({ ...(item ?? {}) });
          attendees.add(JSON.stringify(attendee));
        } catch (e) {
          toast.error(`Error parsing CSV file, ${JSON.stringify(item)}`, { duration: 100000 });
        }
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
