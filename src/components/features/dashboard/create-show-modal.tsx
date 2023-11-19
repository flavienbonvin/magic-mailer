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
import { Plus } from "lucide-react";
import { useState } from "react";
import CreateShowForm from "./create-show-form";

const CreateShowModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="place-self-end">
          <Plus size={16} className="mr-2" />
          Créer une représentation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">
            Création d&apos;une nouvelle repésentation
          </DialogTitle>
          <DialogDescription className="text-left">
            <Muted className="mb-4">
              Informez les données relatives à la représentation et à sa date
            </Muted>
          </DialogDescription>
        </DialogHeader>
        <CreateShowForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateShowModal;
