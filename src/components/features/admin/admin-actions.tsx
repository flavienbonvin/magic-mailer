"use client";

import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { removeAccessToEmail, toggleAddminAccessToAddress } from "@/data/dto/auth";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";
import { useState } from "react";

interface AdminActionProps {
  email: string;
  isAdmin: boolean;
}

const AdminAction = ({ email, isAdmin }: AdminActionProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await removeAccessToEmail(email);
  };

  const handleToggleAdminStatus = async () => {
    setLoading(true);
    await toggleAddminAccessToAddress(email);
  };

  return (
    <TableCell className="text-right">
      <Button
        disabled={loading}
        size="icon"
        variant="ghost"
        className="mr-2"
        onClick={handleToggleAdminStatus}
      >
        {isAdmin ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
      </Button>
      <Button
        disabled={loading}
        size="icon"
        variant="ghost"
        className="mr-2"
        onClick={handleDelete}
      >
        <Trash size={16} />
      </Button>
    </TableCell>
  );
};

export default AdminAction;
