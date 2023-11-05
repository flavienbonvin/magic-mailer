import Muted from "@/components/typography/muted";
import Show from "@/dto/models/show";
import { addDays, subDays } from "date-fns";
import ShowCard from "./show-card";

const ShowList = () => {
  const shows: Show[] = [
    {
      name: "Casino Lausanne 1 ",
      date: subDays(new Date(), 3),
      finished: true,
    },
    {
      name: "Casino Lausanne 2",
      date: subDays(new Date(), 2),
      finished: true,
    },
    {
      name: "Opera de lausanne 1",
      date: subDays(new Date(), 1),
      finished: true,
    },
    {
      name: "Opera de lausanne 2",
      date: addDays(new Date(), 1),
      finished: false,
    },
    {
      name: "Opera de lausanne 3",
      date: addDays(new Date(), 2),
      finished: false,
    },
    {
      name: "Opera de lausanne 4",
      date: addDays(new Date(), 3),
      finished: false,
    },
  ];

  const finishedDates = shows
    .filter((show) => show.finished)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const upcomingDates = shows
    .filter((show) => !show.finished)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-2">
        {upcomingDates.map((show) => (
          <ShowCard show={show} />
        ))}
      </div>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight first:mt-0 mb-4">Shows terminés</h2>
        {finishedDates.length === 0 && <Muted>Aucun show terminé pour le moment</Muted>}
        <div className="grid grid-cols-2 gap-2">
          {finishedDates.map((show) => (
            <ShowCard show={show} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowList;
