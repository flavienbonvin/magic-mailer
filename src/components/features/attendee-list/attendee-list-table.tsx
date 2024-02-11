import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Attendee, AttendeeSource } from "@/data/schema";
import { FileUp, Hand, Users } from "lucide-react";

interface AttendeeTableProps {
  attendees: Attendee[];
  allAttendees?: boolean;
}

const AttendeeSourceCell = ({ source }: { source: AttendeeSource }) => {
  switch (source) {
    case AttendeeSource.import:
      return (
        <TableCell className="flex flex-row gap-2">
          <FileUp size={16} /> Importé
        </TableCell>
      );
    case AttendeeSource.manual:
      return (
        <TableCell className="flex flex-row gap-2">
          <Hand size={16} /> Manuel
        </TableCell>
      );
    case AttendeeSource.experience:
      return (
        <TableCell className="flex flex-row gap-2">
          <Users size={16} /> Expérience
        </TableCell>
      );
    default:
      return <TableCell>Autre</TableCell>;
  }
};

const AttendeeListTable = ({ attendees, allAttendees }: AttendeeTableProps) => {
  const isSourceExperience = attendees[0].source === AttendeeSource.experience;
  return (
    <Table className="w-full border">
      <TableCaption>{attendees.length} personnes présentes à la représentation</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-3/12">Prénom</TableHead>
          {!isSourceExperience && <TableHead className="w-3/12">Nom de famille</TableHead>}
          <TableHead className="w-4/12">Email</TableHead>
          {allAttendees && <TableHead className="w-4/12">Source</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendees.map((attendee: Attendee) => (
          <TableRow key={attendee.id}>
            <TableCell className="max-w-0 truncate">{attendee.firstName || "-"}</TableCell>
            {!isSourceExperience && (
              <TableCell className="max-w-0 truncate">{attendee.lastName || "-"}</TableCell>
            )}
            <TableCell>{attendee.email || "-"}</TableCell>
            {allAttendees && <AttendeeSourceCell source={attendee.source} />}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttendeeListTable;
