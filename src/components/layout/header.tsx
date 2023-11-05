import { PAGES } from "@/constants";
import { Home } from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/logo";
import ThemeSwitcher from "../atoms/theme-switcher";
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
    </header>
  );
};

export default Header;
