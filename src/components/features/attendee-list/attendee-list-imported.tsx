import { getImportedAttendees } from "@/data/actions/attendees";
import { Attendee } from "@/data/schema";
import AttendeeListWrapper from "./attendee-list-wrapper";

const AttendeeListImported = async () => {
  const attendees = (await getImportedAttendees()) as Attendee[];
  return <AttendeeListWrapper attendees={attendees} />;
};

export default AttendeeListImported;
