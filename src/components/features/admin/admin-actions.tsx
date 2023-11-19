"use client";

import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { deleteUser, toggleAdmin } from "@/data/actions/user";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";

interface AdminActionProps {
  id: number;
  isAdmin: boolean;
}

const AdminAction = ({ id, isAdmin }: AdminActionProps) => {
  const handleDelete = async () => {
    await deleteUser(id);
  };

  const handleToggleAdminStatus = async () => {
    await toggleAdmin(id, isAdmin);
  };

  return (
    <TableCell className="text-right">
      <Button size="icon" variant="ghost" className="mr-2" onClick={handleToggleAdminStatus}>
        {isAdmin ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
      </Button>
      <Button size="icon" variant="ghost" className="mr-2" onClick={handleDelete}>
        <Trash size={16} />
      </Button>
    </TableCell>
  );
};

export default AdminAction;
