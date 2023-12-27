"use client";

import { Button } from "@/components/ui/button";
import { Attendee, AttendeeSource } from "@/data/schema";
import { getAttendeeSource } from "@/lib/utils";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

interface DownloadCsvProps {
  attendees: Attendee[];
  source?: AttendeeSource;
}

const formatDataForCsv = (attendees: Attendee[]) => {
  const data = attendees.map((attendee) => ({
    firstName: attendee.firstName,
    lastName: attendee.lastName,
    email: attendee.email,
    source: getAttendeeSource(attendee.source),
  }));
  return data;
};

const getCSVFileName = (source?: AttendeeSource) => {
  const today = format(new Date(), "yyyy-MM-dd");

  switch (source) {
    case AttendeeSource.import:
      return `export-magic-mail-attendees-importes-${today}.csv`;
    case AttendeeSource.manual:
      return `export-magic-mail-attendees-manuels-${today}.csv`;
    case AttendeeSource.experience:
      return `export-magic-mail-attendees-experience-${today}.csv`;
    default:
      return `export-magic-mail-attendees-all-${today}.csv`;
  }
};

const DownloadCsv = ({ attendees, source }: DownloadCsvProps) => {
  const [data, setData] = useState(formatDataForCsv(attendees));
  const fileName = getCSVFileName(source);

  useEffect(() => {
    setData(formatDataForCsv(attendees));
  }, [attendees]);

  return (
    <CSVLink data={data} filename={fileName}>
      <Button variant="outline" size="sm">
        Télécharger CSV
      </Button>
    </CSVLink>
  );
};

export default DownloadCsv;
