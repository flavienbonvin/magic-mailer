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
import CreateShowForm from "./create-show-form";

const CreateShowModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="place-self-end">
          <Plus size={16} className="mr-2" />
          Créer une représentation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">Création d'une nouvelle repésentation</DialogTitle>
          <DialogDescription className="text-left">
            <Muted className="mb-4">
              Informez les données relatives à la représentation et à sa date
            </Muted>
            <CreateShowForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateShowModal;
