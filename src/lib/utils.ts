import { AttendeeSource } from "@/data/schema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAttendeeSource = (source: number) => {
  switch (source) {
    case AttendeeSource.experience:
      return "Experience";
    case AttendeeSource.import:
      return "Import";
    case AttendeeSource.manual:
      return "manual";
  }
};
