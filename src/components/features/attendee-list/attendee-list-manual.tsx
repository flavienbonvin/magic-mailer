import { getManualAttendees } from "@/data/actions/attendees";
import { Attendee } from "@/data/schema";
import AttendeeListWrapper from "./attendee-list-wrapper";

const AttendeeListManual = async () => {
  const attendees = (await getManualAttendees()) as Attendee[];
  return <AttendeeListWrapper attendees={attendees} />;
};

export default AttendeeListManual;
