"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const child = theme === "dark" ? <Sun /> : <Moon />;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleClick} size="icon" variant="ghost" type="button">
            {child}
          </Button>
        </TooltipTrigger>
        <TooltipContent asChild>
          {theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeSwitcher;
