import ExperienceForm from "@/components/features/experience/experience-form";
import { isShowToday } from "@/data/actions/show";
import { notFound } from "next/navigation";

export const revalidate = 360;

export default async function Page() {
  const todayShow = await isShowToday();
  if (!todayShow) {
    return notFound();
  }

  return <ExperienceForm showID={todayShow?.id} />;
}
