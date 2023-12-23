import ConfirmationStepPicture from "@/components/features/step-image/confirmation-step-picture";
import ImageManagement from "@/components/features/step-image/image-management";
import StepHeader from "@/components/features/step/step-header";
import StepTitle from "@/components/features/step/step-title";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// todo : add a loading screen
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
      <StepHeader
        stepDescription="Deuxième étape, envoi de l'image contenant les prediction"
        className="mb-6"
      />
      <Suspense>
        <ImageManagement showId={+showID} />
      </Suspense>
    </div>
  );
}
