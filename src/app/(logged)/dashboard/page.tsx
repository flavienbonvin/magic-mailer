import CreateEditShowModal from "@/components/features/dashboard/create-edit-show-modal";
import ShowList from "@/components/features/dashboard/shows-list";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-10">
      <CreateEditShowModal />
      <ShowList />
    </div>
  );
}
