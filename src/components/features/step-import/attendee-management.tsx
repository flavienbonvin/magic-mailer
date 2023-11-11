"use client";

import { Button } from "@/components/ui/button";
import FileUploadButton from "@/components/ui/file-upload";
import { CSVAttendee } from "@/dto/models/csvAttendee";
import { parseFileToAttendees } from "@/lib/csvParser";
import { Upload } from "lucide-react";
import { useState } from "react";
import AddAttendeeModal from "./add-attendee-modal";
import AttendeeTable from "./addendees-table";

const AttendeeManagement = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editedAttendee, setEditedAttendee] = useState<CSVAttendee | undefined>(undefined);
  const [attendees, setAttendees] = useState<CSVAttendee[]>([]);

  const handleNewFile = (file: File) => {
    parseFileToAttendees(file, (data: CSVAttendee[]) => {
      setAttendees((a) => [...a, ...data]);
    });
  };

  const handleAddOneAttendee = (attendee: CSVAttendee) => {
    const index = attendees.findIndex(({ id }) => id === attendee.id);
    if (index !== -1) {
      attendees[index] = attendee;
      setAttendees([...attendees]);
      setEditedAttendee(undefined);
    } else {
      setAttendees((a) => [...a, attendee]);
    }
  };

  const handleDeleteAttendee = (attendeeID: string) => {
    setAttendees((a) => a.filter(({ id }) => id !== attendeeID));
  };

  const handleEditAttendee = (attendeeID: string) => {
    setEditedAttendee(attendees.find(({ id }) => id === attendeeID));
    setOpenModal(true);
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
