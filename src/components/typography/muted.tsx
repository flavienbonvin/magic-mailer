import { cn } from "@/lib/utils";

interface MutedProps {
  className?: string;
  children: string;
}

const Muted = ({ children, className }: MutedProps) => {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
};

export default Muted;
