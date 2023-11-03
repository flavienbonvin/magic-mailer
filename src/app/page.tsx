import ShowCard from "@/components/layout/show-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <Button className="w-fit place-self-end">
        <Plus size={16} className="mr-2" />
        Créer une repésentation
      </Button>
      <div className="grid grid-cols-3 h-fit gap-4">
        <ShowCard showTitle="Opéra de Lausanne 1" showDate={new Date()} finished />
        <ShowCard showTitle="Opéra de Lausanne 2" showDate={new Date()} />
      </div>
    </div>
  );
}
