import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Attendee } from "@/data/schema";
import ConfirmationRemoveAttendee from "./confirmation-remove-attendee";
import CreateEditAttendeeModal from "./create-edit-attendee-modal";

interface AttendeeTableProps {
  attendees: Attendee[];
}

const AttendeeTable = ({ attendees }: AttendeeTableProps) => {
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
        {attendees.map((attendee: Attendee) => (
          <TableRow key={attendee.id}>
            <TableCell className="max-w-0 truncate">{attendee.firstName}</TableCell>
            <TableCell className="max-w-0 truncate">{attendee.lastName}</TableCell>
            <TableCell>{attendee.email}</TableCell>
            <TableCell className="text-right">
              <CreateEditAttendeeModal attendee={attendee} />
              <ConfirmationRemoveAttendee attendeeId={attendee.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttendeeTable;
