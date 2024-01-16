import AdminsTable from "@/components/features/admin/admins-table";
import H1 from "@/components/typography/h1";
import { AUTH_COOKIE } from "@/constants";
import { getUser } from "@/data/actions/user";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page() {
  const cookie = cookies().get(AUTH_COOKIE)?.value;
  console.log({ cookie });

  const user = await getUser(cookie);
  console.log({ user });

  if (!user?.isAdmin) {
    return notFound();
  }

  return (
    <div className="w-screen">
      <H1>Gestion des accès</H1>
      <AdminsTable />
    </div>
  );
}
