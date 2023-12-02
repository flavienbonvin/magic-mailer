import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Pen, Trash } from "lucide-react";
import { ShowStatusLine } from "./show-status-line";

interface ShowListLoaderProps {
  title: string;
  finished?: boolean;
}

const ShowListLoader = ({ title, finished = false }: ShowListLoaderProps) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight first:mt-0">{title}</h2>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-full" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-5 w-1/3" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ShowStatusLine finished={finished} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button size="sm" variant="outline" disabled>
              {finished ? "Résumé" : "Commencer"}
            </Button>
            {!finished && (
              <div>
                <Button disabled size="icon" variant="ghost">
                  <Pen size={16} />
                </Button>
                <Button disabled size="icon" variant="ghost">
                  <Trash size={16} />
                </Button>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default ShowListLoader;
