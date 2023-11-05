import AddAttendeeModal from "@/components/features/steps/add-attendee-modal";
import ConfirmationStepEmail from "@/components/features/steps/confirmation-step-email";
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
import { Pen, Trash, Upload } from "lucide-react";

export default function Page() {
  return (
    <div className="flex w-full flex-col gap-4">
      <StepTitle stepNumber={1}>
        <ConfirmationStepEmail />
      </StepTitle>
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
        <AddAttendeeModal />
      </div>
      <Table className="border">
        <TableCaption>Personnes présentes à la représentation</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Prénom</TableHead>
            <TableHead>Nom de famille</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Flavien</TableCell>
            <TableCell>Bonvin</TableCell>
            <TableCell>flavien.bonvin@pm.me</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost" className="mr-2 text-stone-400">
                <Pen size={16} />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-red-600">
                <Trash size={16} />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
