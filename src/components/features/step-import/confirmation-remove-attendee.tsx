"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteAttendee } from "@/data/actions/attendees";
import { toastDeletedAttendee } from "@/lib/toaster";
import { Trash } from "lucide-react";

interface ConfirmationRemoveAttendeeProps {
  attendeeId: number;
}

const ConfirmationRemoveAttendee = ({ attendeeId }: ConfirmationRemoveAttendeeProps) => {
  const onConfirm = async () => {
    await deleteAttendee(attendeeId);
    toastDeletedAttendee();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="ghost" className="hover:text-red-600">
          <Trash size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmez la suppression du participant</AlertDialogTitle>
          <AlertDialogDescription>
            Voulez-vous vraiment supprimer le participant ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Continuer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationRemoveAttendee;
