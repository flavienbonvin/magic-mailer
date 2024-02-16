"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PAGES } from "@/constants";
import { Attendee } from "@/data/schema";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ConfirmationStepEmailProps {
  showID: number;
  attendees: Attendee[];
  image1Name?: string;
  image2Name?: string;
}

const ConfirmationStepEmail = ({
  showID,
  attendees,
  image1Name,
  image2Name,
}: ConfirmationStepEmailProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    const formattedAttendees = attendees?.map((attendee) => ({
      email: attendee.email,
      name: attendee.lastName,
      firstName: attendee.firstName,
    }));

    setLoading(true);
    await fetch(PAGES.API_SEND_EMAIL, {
      method: "POST",
      body: JSON.stringify({ showID, attendees: formattedAttendees, image1Name, image2Name }),
    });
    router.push(PAGES.STEP2(showID));
    setOpen(false);
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
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button onClick={handleContinue} disabled={loading}>
            {loading ? "Envoi en cours" : "Continuer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationStepEmail;
