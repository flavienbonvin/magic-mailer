import { CSVAttendee } from "@/dto/models/csvAttendee";
import { parseFileToAttendees } from "@/lib/csvParser";
import { useState } from "react";

const useAttendeeManagement = () => {
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

  return {
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
  };
};

export default useAttendeeManagement;
