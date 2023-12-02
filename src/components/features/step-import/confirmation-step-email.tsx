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

interface ConfirmationStepEmailProps {
  showID: number;
}

const ConfirmationStepEmail = ({ showID }: ConfirmationStepEmailProps) => {
  const router = useRouter();

  const handleContinue = async () => {
    console.log("Continue");
    // todo send mail
    await fetch(PAGES.API_SEND_EMAIL, {
      method: "POST",
      body: JSON.stringify({ showID }),
    });
    router.push(PAGES.STEP2(showID));
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
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue}>Continuer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationStepEmail;
