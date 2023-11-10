"use client";

import FileUploadButton from "@/components/ui/file-upload";
import { CSVAttendee } from "@/dto/models/csvAttendee";
import { parseFileToAttendees } from "@/lib/csvParser";
import { Upload } from "lucide-react";
import { useState } from "react";
import AddAttendeeModal from "./add-attendee-modal";
import AttendeeTable from "./addendees-table";

const AttendeeManagement = () => {
  const [attendees, setAttendees] = useState<CSVAttendee[]>([]);
  const handleNewFile = (file: File) => {
    parseFileToAttendees(file, (data: CSVAttendee[]) => {
      setAttendees(data);
    });
  };

  return (
    <>
      <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-end">
        <FileUploadButton accept=".csv" onFilechange={handleNewFile}>
          <>
            <Upload size={16} className="mr-2" />
            Upload CSV
          </>
        </FileUploadButton>
        <AddAttendeeModal />
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
