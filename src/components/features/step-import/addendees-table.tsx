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
import { CSVAttendee } from "@/data/models/csvAttendee";
import { Pen } from "lucide-react";
import ConfirmationRemoveAttendee from "./confirmation-remove-attendee";

interface AttendeeTableProps {
  attendees: CSVAttendee[];
  onEditAttendee: (attendeeID: string) => void;
  onDeleteAttendee: (attendeeID: string) => void;
}

const AttendeeTable = ({ attendees, onEditAttendee, onDeleteAttendee }: AttendeeTableProps) => {
  return (
    <Table className="max-w-full border">
      <TableCaption>{attendees.length} personnes présentes à la représentation</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-3/12">Prénom</TableHead>
          <TableHead className="w-3/12">Nom de famille</TableHead>
          <TableHead className="w-4/12">Email</TableHead>
          <TableHead className="w-2/12 text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendees.map(({ id, firstName, lastName, email }) => (
          <TableRow key={id}>
            <TableCell className="max-w-0 truncate">{firstName}</TableCell>
            <TableCell className="max-w-0 truncate">{lastName}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell className="text-right">
              <Button
                size="icon"
                variant="ghost"
                className="mr-2"
                onClick={() => onEditAttendee(id)}
              >
                <Pen size={16} />
              </Button>
              <ConfirmationRemoveAttendee onConfirm={() => onDeleteAttendee(id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttendeeTable;