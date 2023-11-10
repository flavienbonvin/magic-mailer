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
import { CSVAttendee } from "@/dto/models/csvAttendee";
import { Pen } from "lucide-react";
import ConfirmationRemoveAttendee from "./confirmation-remove-attendee";

interface AttendeeTableProps {
  attendees: CSVAttendee[];
  onEditAttendee: (attendeeID: string) => void;
  onDeleteAttendee: (attendeeID: string) => void;
}

const AttendeeTable = ({ attendees, onEditAttendee, onDeleteAttendee }: AttendeeTableProps) => {
  return (
    <Table className="border">
      <TableCaption>{attendees.length} personnes présentes à la représentation</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Prénom</TableHead>
          <TableHead>Nom de famille</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendees.map(({ id, firstName, lastName, email }) => (
          <TableRow key={id}>
            <TableCell>{firstName}</TableCell>
            <TableCell>{lastName}</TableCell>
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
