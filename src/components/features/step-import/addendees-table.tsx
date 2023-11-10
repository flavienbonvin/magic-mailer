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
}

const AttendeeTable = ({ attendees }: AttendeeTableProps) => {
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
        {attendees.map((attendee) => (
          <TableRow key={attendee.id}>
            <TableCell>{attendee.firstName}</TableCell>
            <TableCell>{attendee.lastName}</TableCell>
            <TableCell>{attendee.email}</TableCell>
            <TableCell className="text-right">
              <Button size="icon" variant="ghost" className="mr-2">
                <Pen size={16} />
              </Button>
              <ConfirmationRemoveAttendee />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttendeeTable;
