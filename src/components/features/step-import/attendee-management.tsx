"use client";

import { useAttendeeContext } from "@/components/containers/attendee-provider";
import { Button } from "@/components/ui/button";
import FileUploadButton from "@/components/ui/file-upload";
import { Upload } from "lucide-react";
import AttendeeTable from "./addendees-table";
import CreateEditAttendeeModal from "./create-edit-attendee-modal";

const AttendeeManagement = () => {
  const { attendees, addNewFile, resetAttendees } = useAttendeeContext();

  return (
    <>
      <div className="mb-2 flex flex-col justify-between sm:flex-row">
        <div className="mb-6 flex flex-col gap-2 sm:mb-0 sm:flex-row sm:gap-4">
          <FileUploadButton accept=".csv" onFilechange={addNewFile}>
            <>
              <Upload size={16} className="mr-2" />
              Upload CSV
            </>
          </FileUploadButton>
          <CreateEditAttendeeModal />
        </div>
        <Button
          disabled={!attendees.length}
          onClick={() => resetAttendees()}
          size="sm"
          variant="outline"
        >
          Supprimer toutes les données
        </Button>
      </div>
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
