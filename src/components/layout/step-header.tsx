import { cn } from "@/lib/utils";
import { Binary } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface StepHeaderProps {
  stepDescription: string;
  longDescription?: string;
  className?: string;
}

const StepHeader = ({ stepDescription, longDescription, className }: StepHeaderProps) => {
  return (
    <Alert className={cn("w-full h-fit", className)}>
      <Binary className="h-4 w-4" />
      <AlertTitle>Détails</AlertTitle>
      <AlertDescription>
        <div>
          {stepDescription}
          {longDescription && <div className="text-sm text-gray-500">{longDescription}</div>}
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default StepHeader;
