import Muted from "@/components/typography/muted";
import { getAllFinishedShow } from "@/data/actions/show";
import ShowCard from "./show-card";

const ShowListFinished = async () => {
  const finishedShow = await getAllFinishedShow();

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight first:mt-0">
        Représentation terminées
      </h2>
      {finishedShow.length === 0 && <Muted>Aucune représentation terminée pour le moment</Muted>}
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {finishedShow.map((show) => (
          <ShowCard show={show} key={show.id} />
        ))}
      </div>
    </section>
  );
};

export default ShowListFinished;
