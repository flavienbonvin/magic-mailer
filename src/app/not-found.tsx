import PageNotFound from "@/components/features/shared/page-not-found";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/constants";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageNotFound>
      <Link href={PAGES.DASHBOARD}>
        <Button>Retour au dashboard</Button>
      </Link>
    </PageNotFound>
  );
}
