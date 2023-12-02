"use client";
import FileUploadButton from "@/components/ui/file-upload";
import { insertMultipleAttendees } from "@/data/actions/attendees";
import { CSVAttendee } from "@/data/models/csvAttendee";
import { AttendeeSource, NewAttendee } from "@/data/schema";
import { parseFileToAttendees } from "@/lib/csvParser";
import { toastSaveAttendees } from "@/lib/toaster";
import { Upload } from "lucide-react";
import ConfirmationRemoveAllAttendee from "./confirmation-remove-all-attendee";
import CreateEditAttendeeModal from "./create-edit-attendee-modal";

interface AttendeeManagementProps {
  showID: number;
  disableDeleAll: boolean;
}

const AttendeeUpload = async ({ showID, disableDeleAll }: AttendeeManagementProps) => {
  const handleNewFile = (file: File) => {
    parseFileToAttendees(file, async (data: CSVAttendee[]) => {
      const formattedData: NewAttendee[] = data.map((attendee) => ({
        email: attendee.email ?? "",
        firstName: attendee.firstName ?? "",
        lastName: attendee.lastName ?? "",
        linkedShow: showID,
        source: AttendeeSource.import,
      }));

      await insertMultipleAttendees(formattedData);
      toastSaveAttendees(formattedData.length);
    });
  };

  return (
    <>
      <div className="mb-2 flex flex-col justify-between sm:flex-row">
        <div className="mb-6 flex flex-col gap-2 sm:mb-0 sm:flex-row sm:gap-4">
          <FileUploadButton accept=".csv" onFilechange={handleNewFile}>
            <>
              <Upload size={16} className="mr-2" />
              Upload CSV
            </>
          </FileUploadButton>
          <CreateEditAttendeeModal />
        </div>
        <ConfirmationRemoveAllAttendee showID={showID} disabled={disableDeleAll} />
      </div>
    </>
  );
};

export default AttendeeUpload;
