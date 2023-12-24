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
import { PAGES } from "@/constants";
import { ShowStatus } from "@/data/schema";
import { useRouter } from "next/navigation";

interface ConfirmationStepPictureProps {
  showID: number;
}

const ConfirmationStepPicture = ({ showID }: ConfirmationStepPictureProps) => {
  const router = useRouter();

  const handleContinue = async () => {
    await fetch(PAGES.API_UPDATE_SHOW, {
      method: "POST",
      body: JSON.stringify({ showID, status: ShowStatus.finished }),
    });
    router.push(PAGES.SUMMARY);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Envoyer la photo</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmez l&apos;envoi de la photo</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action ne peut pas être annulée. Voulez-vous vraiment envoyer la photo ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue}>Continuer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationStepPicture;
