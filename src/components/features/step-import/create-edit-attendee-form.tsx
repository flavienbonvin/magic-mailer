"use client";

import { useAttendeeContext } from "@/components/containers/attendee-provider";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email({ message: "L'adresse email n'est pas valide." }),
});

type FormSchema = z.infer<typeof formSchema>;

const CreateEditAttendeeForm = () => {
  const { editedAttendee, addAttendee, setOpenModal, updateAttendee, isEmailAlreadyUsed } =
    useAttendeeContext();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: editedAttendee?.firstName ?? "",
      lastName: editedAttendee?.lastName ?? "",
      email: editedAttendee?.email ?? "",
    },
  });

  const onSubmit = (data: FormSchema) => {
    if (isEmailAlreadyUsed(data.email)) {
      form.setError("email", {
        type: "manual",
        message: "Cette adresse email est déjà utilisée.",
      });
      return;
    }

    if (editedAttendee && editedAttendee?.id) {
      updateAttendee({ ...editedAttendee, ...data });
    } else {
      addAttendee({ id: crypto.randomUUID(), ...data });
    }
    setOpenModal(false);
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

export default CreateEditAttendeeForm;
