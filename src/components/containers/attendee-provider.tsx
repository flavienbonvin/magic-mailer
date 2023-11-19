import { CSVAttendee } from "@/data/models/csvAttendee";
import { parseFileToAttendees } from "@/lib/csvParser";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface AttendeeContextProps {
  attendees: CSVAttendee[];
  openModal: boolean;
  editedAttendee?: CSVAttendee;
  addAttendee: (attendee: CSVAttendee | CSVAttendee[]) => void;
  updateAttendee: (attendee: CSVAttendee) => void;
  addNewFile: (file: File) => void;
  resetAttendees: () => void;
  setOpenModal: (open: boolean) => void;
  handleEditAttendee: (attendeeID: string) => void;
  handleDeleteAttendee: (attendeeID: string) => void;
  isEmailAlreadyUsed: (email: string) => boolean;
}

const AttendeeContext = createContext<AttendeeContextProps>({
  attendees: [],
  openModal: false,
  editedAttendee: undefined,
  addAttendee: () => {},
  updateAttendee: () => {},
  addNewFile: () => {},
  resetAttendees: () => {},
  setOpenModal: () => {},
  handleEditAttendee: () => {},
  handleDeleteAttendee: () => {},
  isEmailAlreadyUsed: () => false,
});

export const AttendeeProvider = ({ children }: PropsWithChildren) => {
  const [attendees, setAttendees] = useState<CSVAttendee[]>([]);
  const [editedAttendee, setEditedAttendee] = useState<CSVAttendee | undefined>(undefined);
  const [openModal, setOpenModal] = useState(false);

  const resetAttendees = () => {
    setAttendees([]);
  };

  const isEmailAlreadyUsed = (email: string) => {
    return attendees.some((attendee) => attendee.email === email);
  };

  const addAttendee = (attendee: CSVAttendee | CSVAttendee[]) => {
    if (Array.isArray(attendee)) {
      setAttendees((a) => [...a, ...attendee]);
      return;
    }
    setAttendees((a) => [...a, attendee]);
  };

  const updateAttendee = (attendee: CSVAttendee) => {
    const index = attendees.findIndex(({ id }) => id === attendee.id);
    if (index === -1) {
      return;
    }

    attendees[index] = attendee;
    setAttendees([...attendees]);
    setEditedAttendee(undefined);
  };

  const addNewFile = (file: File) => {
    parseFileToAttendees(file, (data: CSVAttendee[]) => {
      setAttendees((a) => [...a, ...data]);
    });
  };

  const handleDeleteAttendee = (attendeeID: string) => {
    setAttendees((a) => a.filter(({ id }) => id !== attendeeID));
  };

  const handleEditAttendee = (attendeeID: string) => {
    setEditedAttendee(attendees.find(({ id }) => id === attendeeID));
    setOpenModal(true);
  };

  return (
    <AttendeeContext.Provider
      value={{
        attendees,
        openModal,
        editedAttendee,
        addAttendee,
        updateAttendee,
        addNewFile,
        resetAttendees,
        setOpenModal,
        handleEditAttendee,
        handleDeleteAttendee,
        isEmailAlreadyUsed,
      }}
    >
      {children}
    </AttendeeContext.Provider>
  );
};

export const useAttendeeContext = () => useContext(AttendeeContext);
