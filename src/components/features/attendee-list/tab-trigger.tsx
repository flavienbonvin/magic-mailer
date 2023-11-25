"use client";

import { TabsTrigger as Trigger } from "@/components/ui/tabs";
import useQueryParams from "@/hooks/useQueryParams";

interface TabsTrigger {
  value: "all" | "experience" | "imported" | "manuals";
  title: string;
}

const TabsTrigger = ({ value, title }: TabsTrigger) => {
  const { setQueryParams } = useQueryParams<{
    tab?: string;
  }>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      const value = e.target.dataset.value;
      if (value) {
        setQueryParams({ tab: value });
      }
    }
  };

  return (
    <Trigger value={value} data-value={value} onClick={handleClick}>
      {title}
    </Trigger>
  );
};

export default TabsTrigger;
