import { PAGES } from "@/constants";
import Show from "@/dto/models/show";
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

interface ShowCardProps {
  show: Show;
}

const ShowStatus = ({ finished }: { finished: boolean }) => {
  return (
    <div className="flex gap-1 place-items-center">
      <p className={cn("h-2 w-2 rounded-full", finished ? "bg-lime-500" : "bg-amber-500")} />
      <Muted>{finished ? "Terminé" : "En cours"}</Muted>
    </div>
  );
};

const ShowCard = ({ show }: ShowCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{show.name}</CardTitle>
        <CardDescription>{show.date.toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowStatus finished={show.finished} />
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline" asChild>
          {show.finished ? (
            <Link href={PAGES.SUMMARY}>Résumé</Link>
          ) : (
            <Link href={PAGES.STEP1}>Commencer</Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShowCard;
