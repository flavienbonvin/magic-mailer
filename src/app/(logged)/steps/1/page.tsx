import AttendeeManagementWrapper from "@/components/features/step-import/attendee-management-wrapper";
import ConfirmationStepEmail from "@/components/features/step-import/confirmation-step-email";
import StepHeader from "@/components/features/step/step-header";
import StepTitle from "@/components/features/step/step-title";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <StepTitle stepNumber={1}>
        <ConfirmationStepEmail />
      </StepTitle>
      <StepHeader
        stepDescription="Première étape, veuillez entrez les personnes à qui envoyer le mail."
        longDescription="Il est possible d'ajouter plusieurs personnes en même temps avec un fichier CSV ou de rentrer des personnes manuellement."
        className="mb-6"
      />
      <AttendeeManagementWrapper />
    </div>
  );
}
