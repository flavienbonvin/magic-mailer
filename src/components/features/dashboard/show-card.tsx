import { PAGES } from "@/constants";
import { Show, ShowStatus } from "@/data/schema";
import Link from "next/link";
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
import { ShowStatusLine } from "./show-status-line";

interface ShowCardProps {
  show: Show;
}

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
