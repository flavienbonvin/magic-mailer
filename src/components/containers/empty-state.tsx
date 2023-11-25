import { CircleSlash } from "lucide-react";
import Muted from "../typography/muted";

interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="my-20 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center">
        <CircleSlash size={64} strokeWidth={1.5} />
        <h3 className="mt-2 text-sm font-semibold">Rien à voir par ici!</h3>
      </div>
      <Muted>{message}</Muted>
    </div>
  );
};

export default EmptyState;
