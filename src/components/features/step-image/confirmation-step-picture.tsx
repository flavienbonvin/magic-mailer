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
import { useRouter } from "next/navigation";

const ConfirmationStepPicture = () => {
  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue");
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
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue}>Continuer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationStepPicture;
