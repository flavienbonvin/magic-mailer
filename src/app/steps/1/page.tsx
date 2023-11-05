import AddAttendeeModal from "@/components/features/steps/add-attendee-modal";
import AttendeeTable from "@/components/features/steps/addendees-table";
import ConfirmationStepEmail from "@/components/features/steps/confirmation-step-email";
import StepHeader from "@/components/features/steps/step-header";
import StepTitle from "@/components/features/steps/step-title";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

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
      <div className="mb-2 flex flex-col gap-4 sm:flex-row">
        <Button size="sm">
          <Upload size={16} className="mr-2" />
          Upload CSV
        </Button>
        <AddAttendeeModal />
      </div>
      <AttendeeTable />
    </div>
  );
}
