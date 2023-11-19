import { PAGES } from "@/constants";
import { Show, ShowStatus } from "@/data/schema";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Muted from "../../typography/muted";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import CreateEditShowModal from "./create-edit-show-modal";
import DeleteShowModal from "./delete-show-modal";

interface ShowCardProps {
  show: Show;
}

const ShowStatusLine = ({ finished }: { finished: boolean }) => {
  return (
    <div className="flex place-items-center gap-1">
      <p className={cn("h-2 w-2 rounded-full", finished ? "bg-lime-500" : "bg-amber-500")} />
      <Muted>{finished ? "Terminé" : "À venir"}</Muted>
    </div>
  );
};

const ShowCard = ({ show }: ShowCardProps) => {
  const finished = show.status === ShowStatus.finished;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{show.name}</CardTitle>
        <CardDescription>{show.date.toDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowStatusLine finished={show.status === ShowStatus.finished} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button size="sm" variant="outline" asChild>
          {finished ? (
            <Link href={PAGES.SUMMARY}>Résumé</Link>
          ) : (
            <Link href={PAGES.STEP1(show.id)}>Commencer</Link>
          )}
        </Button>
        {show.status === ShowStatus.incoming && (
          <div>
            <CreateEditShowModal show={show} />
            <DeleteShowModal show={show} />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ShowCard;
