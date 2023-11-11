"use client";

import Muted from "@/components/typography/muted";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CSVAttendee } from "@/dto/models/csvAttendee";
import AddAttendeeForm from "./add-attendee-form";

interface AddAttendeeModalProps {
  onAddAttendee: (data: CSVAttendee) => void;
  attendee?: CSVAttendee;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddAttendeeModal = ({ onAddAttendee, open, setOpen, attendee }: AddAttendeeModalProps) => {
  const handleAddOneAttendee = (attendee: CSVAttendee) => {
    onAddAttendee(attendee);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Ajouter manuellement
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">Création d&apos;un nouveau participant</DialogTitle>
          <DialogDescription className="text-left" asChild>
            <Muted className="mb-4">Ajoutez un participant à la main</Muted>
          </DialogDescription>
        </DialogHeader>
        <AddAttendeeForm onAddAttendee={handleAddOneAttendee} attendee={attendee} />
      </DialogContent>
    </Dialog>
  );
};

export default AddAttendeeModal;
