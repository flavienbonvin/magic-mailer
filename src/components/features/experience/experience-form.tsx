"use client";

import RequiredField from "@/components/atoms/required-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { insertExperienceAttendee } from "@/data/actions/attendees";
import { AttendeeSource } from "@/data/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

const ExperienceForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    await insertExperienceAttendee({
      ...data,
      source: AttendeeSource.experience,
      linkedShow: 1, //TODO fix this and find solution for manual input
    });
  };

  return (
    <Card className="sm:w-[500px]">
      <CardHeader>
        <CardTitle>Informations de contact</CardTitle>
        <CardDescription>
          Bievenue au Kubus, nous sommes heureux de vous compter parmis nous ce soir!
          <br /> <br /> Pour vous offrir la meilleure expérience possible, nous avons besoin de
          quelques informations de votre part.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Prénom <RequiredField />
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nom de famille <RequiredField />
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Optionel</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Sauvegarder</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ExperienceForm;
