import ConfirmationStepPicture from "@/components/features/steps/confirmation-step-picture";
import StepHeader from "@/components/features/steps/step-header";
import StepTitle from "@/components/features/steps/step-title";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <StepTitle stepNumber={2}>
        <ConfirmationStepPicture />
      </StepTitle>
      <StepHeader stepDescription="Deuxième étape, envoi de l'image contenant les prediction" />
    </div>
  );
}
