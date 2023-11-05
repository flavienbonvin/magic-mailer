import CreateShowModal from "@/components/features/dashboard/create-show-modal";
import ShowList from "@/components/features/dashboard/shows-list";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10">
      <CreateShowModal />
      <ShowList />
    </div>
  );
}
