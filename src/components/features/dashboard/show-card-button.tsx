import { Button } from "@/components/ui/button";
import { PAGES } from "@/constants";
import { Show, ShowStatus } from "@/data/schema";
import Link from "next/link";

interface ShowCardProps {
  show: Show;
}

const ReturnButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href={href}>{text}</Link>
    </Button>
  );
};

export const ShowCardButton = ({ show }: ShowCardProps) => {
  const incoming = show.status === ShowStatus.incoming;
  const emailSent = show.status === ShowStatus.emailSent;

  if (incoming) {
    return <ReturnButton text="Ajouter participants" href={PAGES.STEP1(show.id)} />;
  }

  if (emailSent) {
    return <ReturnButton text="Ajouter images" href={PAGES.STEP2(show.id)} />;
  }

  return <ReturnButton text="Résumé" href={PAGES.SUMMARY(show.id)} />;
};
