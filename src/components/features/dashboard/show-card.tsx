import { getAttendeesCountForShow } from "@/data/actions/attendees";
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

const ShowCard = async ({ show }: ShowCardProps) => {
  const showAttendees = await getAttendeesCountForShow(show.id);

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
            <DeleteShowModal show={show} showAttendees={showAttendees} />
          </div>
        )}
        {show.status === ShowStatus.finished && (
          <CardDescription className="flex items-center gap-2">
            {showAttendees} {showAttendees === 1 ? "attendee" : "attendees"}
            <DeleteShowModal show={show} showAttendees={showAttendees} />
          </CardDescription>
        )}
      </CardFooter>
    </Card>
  );
};

export default ShowCard;
