import ConfirmationStepPicture from "@/components/features/step-image/confirmation-step-picture";
import UploadPicutre from "@/components/features/step-image/upload-picture";
import StepHeader from "@/components/features/step/step-header";
import StepTitle from "@/components/features/step/step-title";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <StepTitle stepNumber={2}>
        <ConfirmationStepPicture />
      </StepTitle>
      <StepHeader stepDescription="Deuxième étape, envoi de l'image contenant les prediction" />
      <UploadPicutre />
    </div>
  );
}
