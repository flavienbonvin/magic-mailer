import { PAGES } from "@/constants";
import { getUser } from "@/data/actions/user";
import { getCookie } from "@/lib/cookie";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const UserMenu = async () => {
  const cookie = getCookie()?.value;
  const user = await getUser(cookie);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Magic Mail</DropdownMenuLabel>
        {user?.isAdmin && (
          <>
            <DropdownMenuSeparator />
            <Link href={PAGES.ADMIN}>
              <DropdownMenuItem>Admin</DropdownMenuItem>
            </Link>
          </>
        )}
        <DropdownMenuSeparator />
        {cookie && <DropdownMenuItem>{cookie}</DropdownMenuItem>}
        <Link href={PAGES.LOGOUT}>
          <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
