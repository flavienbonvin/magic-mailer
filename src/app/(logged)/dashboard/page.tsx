import CreateEditShowModal from "@/components/features/dashboard/create-edit-show-modal";
import ShowListLoader from "@/components/features/dashboard/show-list-loader";
import ShowListFinished from "@/components/features/dashboard/shows-list-finished";
import ShowListToCome from "@/components/features/dashboard/shows-list-to-come";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/constants";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex justify-end gap-6">
        <CreateEditShowModal />
        <Link href={PAGES.ATTENDEE_LIST}>
          <Button variant="outline">Gestion des spectateurs</Button>
        </Link>
      </div>
      <div className="mb-20 flex flex-col gap-10">
        <Suspense fallback={<ShowListLoader title="Représentation à venir" />}>
          <ShowListToCome />
        </Suspense>
        <Suspense fallback={<ShowListLoader finished title="Représentation terminées" />}>
          <ShowListFinished />
        </Suspense>
      </div>
    </div>
  );
}
