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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { deleteShow } from "@/data/actions/show";
import { Show } from "@/data/schema";
import { Trash } from "lucide-react";

interface CreateShowModalProps {
  show: Show;
  showAttendees: number;
}

const DisabledDeleteButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button size="icon" variant="ghost" disabled>
            <Trash size={16} />
          </Button>
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
  const handleDelete = async () => {
    if (!show.id) return;
    await deleteShow(show.id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {!!showAttendees ? (
          <DisabledDeleteButton />
        ) : (
          <Button size="icon" variant="ghost">
            <Trash size={16} />
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Suppréssion de la représentation</AlertDialogTitle>
          <AlertDialogDescription>
            {`Êtes-vous sûr de vouloir supprimer la représentation ${show.name} ?`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Supprimer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteShowModal;
