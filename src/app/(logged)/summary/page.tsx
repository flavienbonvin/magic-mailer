import H1 from "@/components/typography/h1";
import StatCard from "@/components/ui/stats-card";
import { getAttendeesCountForShow } from "@/data/actions/attendees";
import { getShowById } from "@/data/actions/show";
import { getImageURL } from "@/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { showID } = searchParams;
  if (!showID || isNaN(+showID)) {
    notFound();
  }

  const show = await getShowById(+showID);
  const attendees = await getAttendeesCountForShow(+showID);

  const dateString = show?.date.toLocaleDateString();

  return (
    <div className="flex flex-col gap-12">
      <div>
        <H1>Résumé de la représentation</H1>
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">{show?.name}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {dateString && <StatCard name="Date de la représentation" stats={dateString} />}
        {attendees && <StatCard name="Emails envoyés" stats={attendees.toString()} />}
      </div>
      <div className="flex h-[500px] flex-col gap-2 xl:flex-row">
        <Image
          src={getImageURL(show?.image1Name)}
          alt=""
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
        <Image
          src={getImageURL(show?.image2Name)}
          alt=""
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
