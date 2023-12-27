import ExperienceForm from "@/components/features/experience/experience-form";
import { isShowToday } from "@/data/actions/show";
import { notFound } from "next/navigation";

export default async function Page() {
  const hasShow = await isShowToday();
  if (!hasShow) {
    return notFound();
  }

  return <ExperienceForm />;
}
