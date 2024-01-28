import H2 from "@/components/typography/h2";
import Muted from "@/components/typography/muted";
import { getAllIncomingOrInProgressShow } from "@/data/actions/show";
import ShowCard from "./show-card";
import { isToday } from "date-fns";

const ShowListToCome = async () => {
  const upcomingShow = await getAllIncomingOrInProgressShow();
  const filtered = upcomingShow.filter((show) => !isToday(show.date));

  return (
    <section>
      <H2>Représentation à venir</H2>
      {filtered.length === 0 && <Muted>Aucune représentation à venir pour le moment</Muted>}
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {filtered.map((show) => (
          <ShowCard show={show} key={show.id} />
        ))}
      </div>
    </section>
  );
};

export default ShowListToCome;
