import { AUTH_COOKIE, PAGES } from "@/constants";
import { MenuIcon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const UserMenu = async () => {
  const cookie = cookies().get(AUTH_COOKIE)?.value;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Magic Mail</DropdownMenuLabel>
        {cookie && <DropdownMenuItem>{cookie}</DropdownMenuItem>}
        <Link href={PAGES.LOGOUT}>
          <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
