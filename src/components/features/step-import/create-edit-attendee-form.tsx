"use client";

import RequiredField from "@/components/atoms/required-field";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { insertAttendee, isEmailAlreadyRegistered, updateAttendee } from "@/data/actions/attendees";
import { Attendee, AttendeeSource } from "@/data/schema";
import { toastSaveAttendee } from "@/lib/toaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "L'adresse email n'est pas valide." }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

interface CreateEditAttendeeFormProps {
  attendee?: Attendee;
  setOpen: (value: boolean) => void;
}

const CreateEditAttendeeForm = ({ attendee, setOpen }: CreateEditAttendeeFormProps) => {
  const showID = useSearchParams().get("showID");

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: attendee?.firstName ?? "",
      lastName: attendee?.lastName ?? "",
      email: attendee?.email ?? "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    // This should never happen because users are redirected when accessing this step without a showID
    if (!showID || isNaN(+showID)) {
      return;
    }

    if (attendee && attendee.id) {
      await updateAttendee(attendee.id, { ...data, source: attendee.source });
    } else {
      const isPresent = await isEmailAlreadyRegistered(data.email, +showID);
      if (isPresent) {
        form.setError("email", {
          type: "manual",
          message: "Cette adresse email est déjà utilisée.",
        });
        return;
      }

      await insertAttendee({ ...data, linkedShow: +showID, source: AttendeeSource.manual });
    }

    toastSaveAttendee();
    setOpen(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Addresse email <RequiredField />
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de famille</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Sauvegarder</Button>
      </form>
    </Form>
  );
};

export default CreateEditAttendeeForm;
