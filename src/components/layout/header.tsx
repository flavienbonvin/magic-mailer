import { PAGES } from "@/constants";
import { HelpCircle, Home } from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/logo";
import ThemeSwitcher from "../atoms/theme-switcher";
import UserMenu from "../atoms/user-menu";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex h-14 w-full place-items-center gap-2 border-b px-4">
      <Button asChild variant="ghost" size="icon">
        <Link href={PAGES.DASHBOARD}>
          <Home size={20} />
        </Link>
      </Button>
      <span className="flex-1">
        <Logo />
      </span>
      <ThemeSwitcher />
      <Link href="/help">
        <Button size="icon" variant="ghost">
          <HelpCircle />
        </Button>
      </Link>
      <UserMenu />
    </header>
  );
};

export default Header;
