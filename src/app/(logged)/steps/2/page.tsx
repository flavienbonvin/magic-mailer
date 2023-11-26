import ConfirmationStepPicture from "@/components/features/step-image/confirmation-step-picture";
import UploadPicutre from "@/components/features/step-image/upload-picture";
import StepHeader from "@/components/features/step/step-header";
import StepTitle from "@/components/features/step/step-title";
import { notFound } from "next/navigation";

export default function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { showID } = searchParams;
  if (!showID || isNaN(+showID)) {
    notFound();
  }

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
