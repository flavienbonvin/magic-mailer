import AttendeeManagement from "@/components/features/step-import/attendee-management";
import ConfirmationStepEmail from "@/components/features/step-import/confirmation-step-email";
import StepHeader from "@/components/features/step/step-header";
import StepTitle from "@/components/features/step/step-title";
import { PAGES } from "@/constants";
import { getShowById } from "@/data/actions/show";
import { ShowStatus } from "@/data/schema";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

// TODO add skeleton
export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { showID } = searchParams;
  if (!showID || isNaN(+showID)) {
    notFound();
  }

  const show = await getShowById(+showID);
  if (show && show.status === ShowStatus.emailSent) {
    redirect(PAGES.STEP2(show.id));
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <StepTitle stepNumber={1}>
        <ConfirmationStepEmail showID={+showID} />
      </StepTitle>
      <StepHeader
        stepDescription="Première étape, veuillez entrez les personnes à qui envoyer le mail."
        longDescription="Il est possible d'ajouter plusieurs personnes en même temps avec un fichier CSV ou de rentrer des personnes manuellement."
        className="mb-6"
      />
      <Suspense>
        <AttendeeManagement showID={+showID} />
      </Suspense>
    </div>
  );
}
