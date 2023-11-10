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
import AddAttendeeForm from "./add-attendee-form";

const AddAttendeeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Ajouter manuellement
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">Création d&apos;un nouveau participant</DialogTitle>
          <DialogDescription className="text-left">
            <Muted className="mb-4">Ajoutez un participant à la main</Muted>
          </DialogDescription>
        </DialogHeader>
        <AddAttendeeForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddAttendeeModal;
