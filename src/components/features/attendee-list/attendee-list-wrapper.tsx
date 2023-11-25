import EmptyState from "@/components/containers/empty-state";
import { Attendee } from "@/data/schema";
import AttendeeListTable from "./attendee-list-table";

interface AttendeeListWrapperProps {
  attendees?: Attendee[];
  allAttendees?: boolean;
}

const AttendeeListWrapper = ({ attendees, allAttendees }: AttendeeListWrapperProps) => {
  return (
    <>
      {attendees && attendees.length === 0 && <EmptyState message="Aucun spectateur à voir" />}
      {attendees && attendees.length > 0 && (
        <AttendeeListTable attendees={attendees} allAttendees={allAttendees} />
      )}
    </>
  );
};

export default AttendeeListWrapper;
