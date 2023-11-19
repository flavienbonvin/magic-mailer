"use client";

import { AttendeeProvider } from "@/components/containers/attendee-provider";
import AttendeeManagement from "./attendee-management";

const AttendeeManagementWrapper = () => {
  return (
    <AttendeeProvider>
      <AttendeeManagement />
    </AttendeeProvider>
  );
};

export default AttendeeManagementWrapper;
