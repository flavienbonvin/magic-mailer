import Muted from "@/components/typography/muted";
import Show from "@/data/models/show";
import { addDays, subDays } from "date-fns";
import ShowCard from "./show-card";

const ShowList = () => {
  const shows: Show[] = [
    {
      id: crypto.randomUUID(),
      name: "Casino Lausanne 1 ",
      date: subDays(new Date(), 3),
      finished: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Casino Lausanne 2",
      date: subDays(new Date(), 2),
      finished: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Opera de lausanne 1",
      date: subDays(new Date(), 1),
      finished: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Opera de lausanne 2",
      date: addDays(new Date(), 1),
      finished: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Opera de lausanne 3",
      date: addDays(new Date(), 2),
      finished: false,
    },
    {
      id: crypto.randomUUID(),
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
    <div className="mb-20 flex flex-col gap-10">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {upcomingDates.map((show) => (
          <ShowCard show={show} key={show.id} />
        ))}
      </div>
      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight first:mt-0">Shows terminés</h2>
        {finishedDates.length === 0 && <Muted>Aucun show terminé pour le moment</Muted>}
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {finishedDates.map((show) => (
            <ShowCard show={show} key={show.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowList;
