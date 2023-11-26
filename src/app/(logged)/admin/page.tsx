import AddAdminForm from "@/components/features/admin/add-admin-form";
import AdminAction from "@/components/features/admin/admin-actions";
import H1 from "@/components/typography/h1";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers, getUser } from "@/data/actions/user";
import { getCookie } from "@/data/helpers/cookie";
import { notFound } from "next/navigation";

interface Data {
  id: string;
  email: string;
  isAdmin: boolean;
}

export default async function Page() {
  const cookie = getCookie();
  const user = await getUser(cookie?.value);

  if (!user?.isAdmin) {
    return notFound();
  }

  const data = await getAllUsers();

  return (
    <div className="w-screen">
      <H1>Gestion des accès</H1>
      {data.length === 0 && (
        <div className="flex flex-col gap-6">
          <p className="text-gray-500">Aucun utilisateur n&apos;a été ajouté pour le moment.</p>
          <Card className="w-full sm:w-1/2 lg:w-1/3">
            <CardHeader>Ajouter un utilisateur</CardHeader>
            <CardContent>
              <AddAdminForm />
            </CardContent>
          </Card>
        </div>
      )}

      {data.length > 0 && (
        <div className="flex flex-col gap-4 md:flex-row">
          <Table className="max-w-full border">
            <TableHeader>
              <TableRow>
                <TableHead className="w-4/12">Email</TableHead>
                <TableHead className="w-2/12">Role</TableHead>
                <TableHead className="w-2/12 text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map(({ email, isAdmin, id }) => (
                <TableRow key={id}>
                  <TableCell>{email}</TableCell>
                  <TableCell>{isAdmin ? "administrateur" : "utilisateur"}</TableCell>
                  <AdminAction id={id!} isAdmin={!!isAdmin} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Card className="w-full sm:w-1/2 lg:w-1/3">
            <CardHeader>Ajouter un utilisateur</CardHeader>
            <CardContent>
              <AddAdminForm />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
