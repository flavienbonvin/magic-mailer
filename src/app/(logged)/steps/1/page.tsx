import AttendeeManagement from "@/components/features/step-import/attendee-management";
import ConfirmationStepEmail from "@/components/features/step-import/confirmation-step-email";
import StepHeader from "@/components/features/step/step-header";
import StepTitle from "@/components/features/step/step-title";
import { getAttendeesForShow } from "@/data/actions/attendees";
import { Attendee } from "@/data/schema";
import { notFound } from "next/navigation";

export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { showID } = searchParams;
  if (!showID || isNaN(+showID)) {
    notFound();
  }

  const attendees = (await getAttendeesForShow(+showID)) as Attendee[];

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
      <AttendeeManagement attendees={attendees} showID={+showID} />
    </div>
  );
}
