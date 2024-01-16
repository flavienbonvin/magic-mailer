import ExperienceForm from "@/components/features/experience/experience-form";
import { getTodayShow } from "@/data/actions/show";
import { notFound } from "next/navigation";

export const revalidate = 360;

export default async function Page() {
  const todayShow = await getTodayShow();
  if (!todayShow) {
    return notFound();
  }

  return <ExperienceForm showID={todayShow?.id} />;
}
