import CreateShowModal from "@/components/features/home/create-show-modal";
import ShowList from "@/components/features/home/shows-list";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <CreateShowModal />
      <ShowList />
    </div>
  );
}
