import AdminsTable from "@/components/features/admin/admins-table";
import H1 from "@/components/typography/h1";
import { getUser } from "@/data/actions/user";
import { getCookie } from "@/lib/cookie";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Data {
  id: string;
  email: string;
  isAdmin: boolean;
}

// TODO add loader
export default async function Page() {
  const cookie = getCookie();
  const user = await getUser(cookie?.value);

  if (!user?.isAdmin) {
    return notFound();
  }

  return (
    <div className="w-screen">
      <H1>Gestion des accès</H1>
      <Suspense>
        <AdminsTable />
      </Suspense>
    </div>
  );
}
