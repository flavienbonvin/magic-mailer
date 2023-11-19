"use client";

import Muted from "@/components/typography/muted";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Show } from "@/data/schema";
import { Pen, Plus } from "lucide-react";
import { useState } from "react";
import CreateEditShowForm from "./create-edit-show-form";

interface CreateShowModalProps {
  show?: Show;
}

const CreateEditShowModal = ({ show }: CreateShowModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {show ? (
          <Button size="icon" variant="ghost">
            <Pen size={16} />
          </Button>
        ) : (
          <Button className="place-self-end">
            <Plus size={16} className="mr-2" />
            Créer une représentation
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">
            Création d&apos;une nouvelle repésentation
          </DialogTitle>
          <DialogDescription className="text-left" asChild>
            <Muted className="mb-4">
              Informez les données relatives à la représentation et à sa date
            </Muted>
          </DialogDescription>
        </DialogHeader>
        <CreateEditShowForm setOpen={setOpen} show={show} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEditShowModal;
