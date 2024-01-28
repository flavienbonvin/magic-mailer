"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ConfirmationStepEmailProps {
  showID: number;
}

const ConfirmationStepEmail = ({ showID }: ConfirmationStepEmailProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    setLoading(true)
    await fetch(PAGES.API_SEND_EMAIL, {
      method: "POST",
      body: JSON.stringify({ showID }),
    });
    router.push(PAGES.STEP2(showID));
    setOpen(false)
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Envoyer les emails</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmez l&apos;envoi des emails</DialogTitle>
          <DialogDescription>
            Cette action ne peut pas être annulée. Voulez-vous vraiment envoyer les emails ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant='outline'>Annuler</Button>
          <Button onClick={handleContinue} disabled={loading}>{loading ? "Envoi en cours" : "Continuer"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
};

export default ConfirmationStepEmail;
