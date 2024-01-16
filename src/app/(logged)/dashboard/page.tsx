import CreateEditShowModal from "@/components/features/dashboard/create-edit-show-modal";
import ShowListFinished from "@/components/features/dashboard/shows-list-finished";
import ShowListToCome from "@/components/features/dashboard/shows-list-to-come";
import TodayShow from "@/components/features/dashboard/today-show";
import TabTrigger from "@/components/features/shared/tab-trigger";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { PAGES } from "@/constants";
import { Lock, User } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function Home({ searchParams }: { searchParams: { tab?: string } }) {
  const tab = searchParams.tab || "upcoming";

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-4">
        <CreateEditShowModal />
        <Link href={PAGES.ATTENDEE_LIST}>
          <Button variant="outline" className="w-full sm:w-auto">
            <User size={16} className="mr-2" />
            Specateurs
          </Button>
        </Link>
        <Link href={PAGES.ADMIN}>
          <Button variant="outline" className="w-full sm:w-auto">
            <Lock size={16} className="mr-2" />
            Admin
          </Button>
        </Link>
      </div>
      <div className="mb-20 flex flex-col gap-10">
        <TodayShow />
        <Tabs defaultValue={tab}>
          <TabsList>
            <TabTrigger defaultValue="upcoming" value="upcoming" title="A venir" />
            <TabTrigger defaultValue="upcoming" value="finished" title="Terminés" />
          </TabsList>
          <TabsContent value="upcoming">
            <Suspense fallback={<p>loading</p>}>
              <ShowListToCome />
            </Suspense>
          </TabsContent>
          <TabsContent value="finished">
            <Suspense fallback={<p>loading</p>}>
              <ShowListFinished />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
