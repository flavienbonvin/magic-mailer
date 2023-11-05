import CreateShowModal from "@/components/features/home/create-show-modal";
import ShowList from "@/components/features/home/shows-list";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10">
      <CreateShowModal />
      <ShowList />
    </div>
  );
}
