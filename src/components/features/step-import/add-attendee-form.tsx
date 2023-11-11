"use client";

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
import { CSVAttendee } from "@/dto/models/csvAttendee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email({ message: "L'adresse email n'est pas valide." }),
});

type FormSchema = z.infer<typeof formSchema>;

interface AddAttendeeFormProps {
  onAddAttendee: (data: CSVAttendee) => void;
  attendee?: CSVAttendee;
}

const AddAttendeeForm = ({ onAddAttendee, attendee }: AddAttendeeFormProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: attendee?.firstName ?? "",
      lastName: attendee?.lastName ?? "",
      email: attendee?.email ?? "",
    },
  });

  const onSubmit = (data: FormSchema) => {
    onAddAttendee({ id: attendee?.id ?? crypto.randomUUID(), ...data });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Addresse email</FormLabel>
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

export default AddAttendeeForm;
