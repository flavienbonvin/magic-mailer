import StepHeader from "@/components/features/steps/step-header";
import StepTitle from "@/components/features/steps/step-title";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Upload } from "lucide-react";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <StepTitle stepNumber={1} />
      <StepHeader
        stepDescription="Première étape, veuillez entrez les personnes à qui envoyer le mail."
        longDescription="Il est possible d'ajouter plusieurs personnes en même temps avec un fichier CSV ou de rentrer des personnes manuellement."
        className="mb-6"
      />
      <div className="mb-2 flex flex-col gap-4 sm:flex-row">
        <Button size="sm">
          <Upload size={16} className="mr-2" />
          Upload CSV
        </Button>
        <Button size="sm" variant="outline">
          Ajouter manuellement
        </Button>
      </div>
      <Table className="border">
        <TableCaption>Personnes présentes à la représentation</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Prénom</TableHead>
            <TableHead>Nom de famille</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Flavien</TableCell>
            <TableCell>Bonvin</TableCell>
            <TableCell>flavien.bonvin@pm.me</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
