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
import { deleteShow } from "@/data/actions/show";
import { Show } from "@/data/schema";
import { Trash } from "lucide-react";

interface CreateShowModalProps {
  show: Show;
}

const DeleteShowModal = ({ show }: CreateShowModalProps) => {
  const handleDelete = async () => {
    if (!show.id) return;
    await deleteShow(show.id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Trash size={16} />
        </Button>
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
