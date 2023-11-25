import CreateEditShowModal from "@/components/features/dashboard/create-edit-show-modal";
import ShowList from "@/components/features/dashboard/shows-list";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex justify-end gap-6">
        <CreateEditShowModal />
        <Link href={PAGES.ATTENDEE_LIST}>
          <Button variant="outline">Gestion des spectateurs</Button>
        </Link>
      </div>
      <ShowList />
    </div>
  );
}
