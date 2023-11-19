import { toast } from "sonner";

export const toastSaveAttendees = (size: number) => {
  toast.success(`${size} participants sauvés !`);
};

export const toastSaveAttendee = () => {
  toast.success(`Participant sauvés !`);
};

export const toastDeletedAttendee = () => {
  toast.success(`Participant supprimé !`);
};
