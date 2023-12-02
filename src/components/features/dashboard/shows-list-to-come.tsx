import Muted from "@/components/typography/muted";
import { getAllIncomingOrInProgressShow } from "@/data/actions/show";
import ShowCard from "./show-card";

const ShowListToCome = async () => {
  const upcomingShow = await getAllIncomingOrInProgressShow();

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight first:mt-0">
        Représentation à venir
      </h2>
      {upcomingShow.length === 0 && <Muted>Aucune représentation à venir pour le moment</Muted>}
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {upcomingShow.map((show) => (
          <ShowCard show={show} key={show.id} />
        ))}
      </div>
    </section>
  );
};

export default ShowListToCome;
