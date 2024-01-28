import H1 from "@/components/typography/h1";
import { getTodayShow } from "@/data/actions/show";
import ShowCard from "./show-card";
import Muted from "@/components/typography/muted";

const TodayShow = async () => {
  const todayShow = await getTodayShow();

  return (
    <div className="mb-20 flex flex-col gap-2">
      <H1>Spectacle du jour</H1>
      {todayShow ? <ShowCard show={todayShow} /> : <Muted>Aucune représentation aujourd&apos;hui</Muted>}
    </div>
  );
};

export default TodayShow;
