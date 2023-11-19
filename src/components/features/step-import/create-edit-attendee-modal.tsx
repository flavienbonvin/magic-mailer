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
import { Attendee } from "@/data/schema";
import { Pen } from "lucide-react";
import { useState } from "react";
import CreateEditAttendeeForm from "./create-edit-attendee-form";

interface CreateEditAttendeeModalProps {
  attendee?: Attendee;
}

const CreateEditAttendeeModal = ({ attendee }: CreateEditAttendeeModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {attendee ? (
          <Button size="icon" variant="ghost">
            <Pen size={16} />
          </Button>
        ) : (
          <Button size="sm" variant="outline">
            Ajouter manuellement
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">Création d&apos;un nouveau participant</DialogTitle>
          <DialogDescription className="text-left" asChild>
            <Muted className="mb-4">Ajoutez un participant à la main</Muted>
          </DialogDescription>
        </DialogHeader>
        <CreateEditAttendeeForm attendee={attendee} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEditAttendeeModal;
