import Muted from "@/components/typography/muted";
import { cn } from "@/lib/utils";

export const ShowStatusLine = ({ finished }: { finished: boolean }) => {
  return (
    <div className="flex place-items-center gap-1">
      <p className={cn("h-2 w-2 rounded-full", finished ? "bg-lime-500" : "bg-amber-500")} />
      <Muted>{finished ? "Terminé" : "À venir"}</Muted>
    </div>
  );
};
