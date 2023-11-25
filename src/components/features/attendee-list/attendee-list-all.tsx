import { getAllAttendees } from "@/data/actions/attendees";
import { Attendee } from "@/data/schema";
import AttendeeListWrapper from "./attendee-list-wrapper";

const AttendeeListAll = async () => {
  const attendees = (await getAllAttendees()) as Attendee[];
  return <AttendeeListWrapper attendees={attendees} allAttendees />;
};

export default AttendeeListAll;
