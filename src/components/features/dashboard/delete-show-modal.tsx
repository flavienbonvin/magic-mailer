"use client";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { moveAllAttendeesToAnotherShow } from "@/data/actions/attendees";
import { deleteShow, getManagementShow } from "@/data/actions/show";
import { Show, ShowStatus } from "@/data/schema";
import { Dialog } from "@radix-ui/react-dialog";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CreateShowModalProps {
  show: Show;
  showAttendees: number;
}

const DisabledDeleteButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>
            <Button size="icon" variant="ghost" disabled>
              <Trash size={16} />
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent className="text-center">
          Supprimer les participants avant
          <br /> de pouvoir supprimer la représentation
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const DeleteShowModal = ({ show, showAttendees }: CreateShowModalProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    if (!show.id) return;
    if (show.status === ShowStatus.finished) {
      const managementShow = await getManagementShow();
      if (!managementShow) {
        toast.error("Impossible de trouver le spectacle de management");
        return;
      }
      await moveAllAttendeesToAnotherShow(show.id, managementShow.id);
    }

    await deleteShow(show.id);
    setLoading(false);
    setOpen(false);
  };

  if (!!showAttendees && show.status !== ShowStatus.finished) {
    return <DisabledDeleteButton />;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Trash size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Suppréssion de la représentation</DialogTitle>
        <DialogDescription>
          {`Êtes-vous sûr de vouloir supprimer la représentation ${show.name} ?`}
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button onClick={handleDelete} disabled={loading}>
            {loading ? "Suppression en cours" : "Supprimer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteShowModal;
