import AddAdminForm from "@/components/features/admin/add-admin-form";
import AdminAction from "@/components/features/admin/admin-actions";
import Muted from "@/components/typography/muted";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAdminpageData } from "@/data/dto/auth";
import { ThumbsDown, ThumbsUp } from "lucide-react";

interface Data {
  id: string;
  email: string;
  isAdmin: boolean;
}

export default async function Page() {
  const data = (await getAdminpageData()) as Data[];
  return (
    <div className="w-screen">
      <h1 className="mb-3 text-xl font-medium first:mt-0">Gestion des accès</h1>
      <Muted className="mb-4">
        Les opérations peuvent prendre quelques secondes sur cette page.
      </Muted>
      <div className="flex flex-col gap-4 md:flex-row">
        <Table className="max-w-full border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-4/12">Email</TableHead>
              <TableHead className="w-2/12">Admin</TableHead>
              <TableHead className="w-2/12 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(({ email, isAdmin, id }) => (
              <TableRow key={id}>
                <TableCell>{email}</TableCell>
                <TableCell className="text-right">
                  {isAdmin ? <ThumbsUp size={16} /> : <ThumbsDown size={16} />}
                </TableCell>
                <AdminAction email={email} isAdmin={isAdmin} />
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
    </div>
  );
}
