import { PAGES } from "@/constants";
import { isLoggedUserAdmin } from "@/data/dto/auth";
import { getCookie } from "@/data/helpers/cookie";
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
  const isAdmin = await isLoggedUserAdmin();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Magic Mail</DropdownMenuLabel>
        {isAdmin && (
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
        <Link href={PAGES.HELP}>
          <DropdownMenuItem>Aide</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
