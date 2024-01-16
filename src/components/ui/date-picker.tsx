"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { DayPickerSingleProps } from "react-day-picker";

interface DatePickerProps {
  date?: Date;
  setDate?: (date: Date) => void;
  showOutsideDays?: boolean;
  mode?: DayPickerSingleProps["mode"];
}

const DatePicker = ({ date, setDate, showOutsideDays, mode = "single" }: DatePickerProps) => {
  const handleSelect = (date?: Date) => {
    if (!date || !setDate) return;
    setDate(date);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className={cn(!date && "text-muted-foreground")}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Calendar
          mode={mode}
          selected={date}
          onDayClick={handleSelect}
          onSelect={handleSelect}
          weekStartsOn={1}
          showOutsideDays={showOutsideDays}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
