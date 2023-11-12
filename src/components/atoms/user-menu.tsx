import { PAGES } from "@/constants";
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

const UserMenu = () => {
  const cookie = getCookie()?.value;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Magic Mail</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cookie && <DropdownMenuItem>{cookie}</DropdownMenuItem>}
        <Link href={PAGES.LOGOUT}>
          <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
