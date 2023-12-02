import Muted from "@/components/typography/muted";
import { ShowStatus } from "@/data/schema";
import { cn } from "@/lib/utils";

export const ShowStatusLine = ({ status }: { status: ShowStatus }) => {
  const incoming = status === ShowStatus.incoming;
  const emailSent = status === ShowStatus.emailSent;
  const finished = status === ShowStatus.finished;

  return (
    <div className="flex place-items-center gap-1">
      <p
        className={cn(
          "h-2 w-2 rounded-full",
          finished && "bg-lime-500",
          emailSent && "bg-blue-500",
          incoming && "bg-amber-500",
        )}
      />
      {incoming && <Muted>À venir</Muted>}
      {emailSent && <Muted>Emails envoyés</Muted>}
      {finished && <Muted>Terminé</Muted>}
    </div>
  );
};
