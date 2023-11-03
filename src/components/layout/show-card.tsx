import { PAGES } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Muted from "../typography/muted";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface ShowCardProps {
  showTitle: string;
  showDate: Date;
  finished?: boolean;
}

const ShowStatus = ({ finished }: { finished: boolean }) => {
  return (
    <div className="flex gap-1 place-items-center">
      <p className={cn("h-2 w-2 rounded-full", finished ? "bg-lime-500" : "bg-amber-500")} />
      <Muted>{finished ? "Terminé" : "En cours"}</Muted>
    </div>
  );
};

const ShowCard = ({ showTitle, showDate, finished = false }: ShowCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{showTitle}</CardTitle>
        <CardDescription>{showDate.toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowStatus finished={finished} />
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline" asChild>
          {finished ? (
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
