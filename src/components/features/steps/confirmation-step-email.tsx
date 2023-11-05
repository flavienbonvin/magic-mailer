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

const ConfirmationStepEmail = () => {
  const router = useRouter();

  const handleContinue = () => {
    console.log("Continue");
    router.push(PAGES.STEP2);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Envoyer les emails</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmez l&apos;envoi des emails</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action ne peut pas être annulée. Voulez-vous vraiment envoyer les emails ?
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

export default ConfirmationStepEmail;
