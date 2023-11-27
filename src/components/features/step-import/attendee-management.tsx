import { getAttendeesForShow } from "@/data/actions/attendees";
import { Attendee } from "@/data/schema";
import AttendeeTable from "./addendees-table";
import AttendeeUpload from "./attendee-upload";

interface AttendeeManagementProps {
  showID: number;
}

const AttendeeManagement = async ({ showID }: AttendeeManagementProps) => {
  const attendees = (await getAttendeesForShow(+showID)) as Attendee[];

  return (
    <>
      <AttendeeUpload showID={showID} disableDeleAll={!attendees.length} />
      {attendees.length === 0 && (
        <div className="flex h-32 flex-col items-center justify-center">
          <p className="text-xl font-semibold text-muted-foreground">
            Aucun participant pour le moment
          </p>
        </div>
      )}
      {attendees.length > 0 && <AttendeeTable attendees={attendees} />}
    </>
  );
};

export default AttendeeManagement;
