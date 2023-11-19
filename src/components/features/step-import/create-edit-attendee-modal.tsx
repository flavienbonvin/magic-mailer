"use client";

import { useAttendeeContext } from "@/components/containers/attendee-provider";
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
import CreateEditAttendeeForm from "./create-edit-attendee-form";

const CreateEditAttendeeModal = () => {
  const { openModal, setOpenModal } = useAttendeeContext();

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
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
        <CreateEditAttendeeForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEditAttendeeModal;
