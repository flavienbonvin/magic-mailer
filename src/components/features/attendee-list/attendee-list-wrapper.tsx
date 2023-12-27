import EmptyState from "@/components/containers/empty-state";
import { getAllAttendees, getAttdeneesBySource } from "@/data/actions/attendees";
import { Attendee, AttendeeSource } from "@/data/schema";
import AttendeeListTable from "./attendee-list-table";
import DownloadCsv from "./download-csv";

interface AttendeeListWrapperProps {
  source?: AttendeeSource;
  allAttendees?: boolean;
}

const AttendeeListWrapper = async ({ source, allAttendees }: AttendeeListWrapperProps) => {
  const attendees =
    allAttendees || !source
      ? ((await getAllAttendees()) as Attendee[])
      : ((await getAttdeneesBySource(source)) as Attendee[]);

  return (
    <>
      {attendees && attendees.length === 0 && <EmptyState message="Aucun spectateur à voir" />}
      {attendees && attendees.length > 0 && (
        <div className="flex flex-col items-end gap-2">
          <DownloadCsv attendees={attendees} source={source} />
          <AttendeeListTable attendees={attendees} allAttendees={allAttendees} />
        </div>
      )}
    </>
  );
};

export default AttendeeListWrapper;
