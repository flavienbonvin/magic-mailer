import { Show, ShowStatus } from "@/data/schema";
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
import { ShowCardButton } from "./show-card-button";
import { ShowStatusLine } from "./show-status-line";

interface ShowCardProps {
  show: Show;
}

const ShowCard = ({ show }: ShowCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{show.name}</CardTitle>
        <CardDescription>{show.date.toDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ShowStatusLine status={show.status} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <ShowCardButton show={show} />
        {show.status !== ShowStatus.finished && (
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
