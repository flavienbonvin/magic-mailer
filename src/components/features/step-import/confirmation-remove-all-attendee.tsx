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
import { deleteAllAttendeesForShow } from "@/data/actions/attendees";

interface ConfirmationRemoveAttendeeProps {
  showID: number;
  disabled: boolean;
}

const ConfirmationRemoveAllAttendee = ({ disabled, showID }: ConfirmationRemoveAttendeeProps) => {
  const onConfirm = async () => {
    await deleteAllAttendeesForShow(showID);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="outline" disabled={disabled}>
          Supprimer toutes les données
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmez la suppression de tous les participant</AlertDialogTitle>
          <AlertDialogDescription>
            Voulez-vous vraiment supprimer tous participant ?
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

export default ConfirmationRemoveAllAttendee;
