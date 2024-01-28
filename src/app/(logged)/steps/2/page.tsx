import ConfirmationStepPicture from "@/components/features/step-image/confirmation-step-picture";
import ImageManagement from "@/components/features/step-image/image-management";
import StepHeader from "@/components/features/step/step-header";
import StepTitle from "@/components/features/step/step-title";
import { PAGES } from "@/constants";
import { getShowById } from "@/data/actions/show";
import { ShowStatus } from "@/data/schema";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const { showID } = searchParams;
  if (!showID || isNaN(+showID)) {
    notFound();
  }

  const show = await getShowById(+showID);
  if (show && show.status === ShowStatus.incoming) {
    redirect(PAGES.STEP1(show.id));
  }


  return (
    <div className="flex w-full flex-col gap-4">
      <StepTitle stepNumber={2}>
        <ConfirmationStepPicture showID={+showID} />
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
