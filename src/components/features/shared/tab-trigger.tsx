"use client";

import { TabsTrigger as Trigger } from "@/components/ui/tabs";
import useQueryParams from "@/hooks/useQueryParams";

interface TabsTriggerProps {
  value: string;
  defaultValue: string;
  title: string;
}

const TabsTrigger = ({ value, title, defaultValue }: TabsTriggerProps) => {
  const { setQueryParams } = useQueryParams<{
    tab?: string;
  }>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value === defaultValue) {
      setQueryParams({ tab: undefined });
      return;
    }

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
