"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const child = theme === "dark" ? <Sun /> : <Moon />;

  return (
    <Button onClick={handleClick} size="icon" variant="ghost" type="button">
      {child}
    </Button>
  );
};

export default ThemeSwitcher;
