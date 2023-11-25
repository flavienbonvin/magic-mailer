import { getExperienceAttendees } from "@/data/actions/attendees";
import { Attendee } from "@/data/schema";
import AttendeeListWrapper from "./attendee-list-wrapper";

const AttendeeListExperience = async () => {
  const attendees = (await getExperienceAttendees()) as Attendee[];
  return <AttendeeListWrapper attendees={attendees} />;
};

export default AttendeeListExperience;
