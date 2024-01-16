import H2 from "@/components/typography/h2";
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
import { ShowStatus } from "@/data/schema";
import { Pen, Trash } from "lucide-react";
import { ShowStatusLine } from "./show-status-line";

interface ShowListLoaderProps {
  title: string;
  status?: ShowStatus;
}

const ShowListLoader = ({ title, status = ShowStatus.incoming }: ShowListLoaderProps) => {
  const finished = status === ShowStatus.finished;

  return (
    <section>
      <H2>{title}</H2>
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
            <ShowStatusLine status={status} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button size="sm" variant="outline" disabled>
              {finished ? "Résumé" : "Ajouter participants"}
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
