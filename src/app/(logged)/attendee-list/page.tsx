import AttendeeListWrapper from "@/components/features/attendee-list/attendee-list-wrapper";
import TabTrigger from "@/components/features/shared/tab-trigger";
import H1 from "@/components/typography/h1";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { AttendeeSource } from "@/data/schema";
import { Suspense } from "react";

export default function Page({ searchParams }: { searchParams: { tab?: string } }) {
  const tab = searchParams.tab || "all";

  return (
    <div className="w-full">
      <H1>Participants</H1>
      <Tabs defaultValue={tab}>
        <TabsList>
          <TabTrigger defaultValue="all" value="all" title="Tous" />
          <TabTrigger defaultValue="all" value="experience" title="Expérience" />
          <TabTrigger defaultValue="all" value="imported" title="Importés" />
          <TabTrigger defaultValue="all" value="manuals" title="Manuels" />
        </TabsList>
        <TabsContent value="all">
          <Suspense fallback={<p>loading</p>}>
            <AttendeeListWrapper allAttendees />
          </Suspense>
        </TabsContent>
        <TabsContent value="experience">
          <Suspense fallback={<p>loading</p>}>
            <AttendeeListWrapper source={AttendeeSource.experience} />
          </Suspense>
        </TabsContent>
        <TabsContent value="imported">
          <Suspense fallback={<p>loading</p>}>
            <AttendeeListWrapper source={AttendeeSource.import} />
          </Suspense>
        </TabsContent>
        <TabsContent value="manuals">
          <Suspense fallback={<p>loading</p>}>
            <AttendeeListWrapper source={AttendeeSource.manual} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
}
