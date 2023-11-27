import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/data/actions/user";
import AddAdminForm from "./add-admin-form";
import AdminAction from "./admin-actions";

const AdminsTable = async () => {
  const data = await getAllUsers();

  return (
    <>
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
    </>
  );
};

export default AdminsTable;
