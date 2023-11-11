"use client";

import { Button } from "@/components/ui/button";
import FileUploadButton from "@/components/ui/file-upload";
import useAttendeeManagement from "@/hooks/useAttendeeManagement";
import { Upload } from "lucide-react";
import AddAttendeeModal from "./add-attendee-modal";
import AttendeeTable from "./addendees-table";

const AttendeeManagement = () => {
  const {
    openModal,
    setOpenModal,
    editedAttendee,
    setEditedAttendee,
    attendees,
    setAttendees,
    handleNewFile,
    handleAddOneAttendee,
    handleDeleteAttendee,
    handleEditAttendee,
  } = useAttendeeManagement();

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
          <AddAttendeeModal
            onAddAttendee={handleAddOneAttendee}
            attendee={editedAttendee}
            open={openModal}
            setOpen={setOpenModal}
          />
        </div>
        <Button
          disabled={!attendees.length}
          onClick={() => setAttendees([])}
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
      {attendees.length > 0 && (
        <AttendeeTable
          attendees={attendees}
          onDeleteAttendee={handleDeleteAttendee}
          onEditAttendee={handleEditAttendee}
        />
      )}
    </>
  );
};

export default AttendeeManagement;
