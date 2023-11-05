"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

//TODO fix next issue when the theme is dark and user reload the page
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const child = theme === "dark" ? <Sun /> : <Moon />;

  return (
    <Button onClick={handleClick} size="icon" variant="ghost">
      {child}
    </Button>
  );
};

export default ThemeSwitcher;
