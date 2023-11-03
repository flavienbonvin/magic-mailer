import { PAGES } from "@/constants";
import { Home } from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/logo";
import ThemeSwitcher from "../atoms/theme-switcher";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full h-14 border-b flex place-items-center gap-2 px-4">
      <Button asChild variant="ghost" size="icon">
        <Link href={PAGES.HOME}>
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
