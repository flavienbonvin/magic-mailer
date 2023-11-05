import CreateShowModal from "@/components/features/home/create-show-modal";
import ShowCard from "@/components/features/home/show-card";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <CreateShowModal />
      <div className="grid grid-cols-3 h-fit gap-4">
        <ShowCard showTitle="Opéra de Lausanne 1" showDate={new Date()} finished />
        <ShowCard showTitle="Opéra de Lausanne 2" showDate={new Date()} />
      </div>
    </div>
  );
}
