"use client";

import RequiredField from "@/components/atoms/required-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { insertExperienceAttendee } from "@/data/actions/attendees";
import { AttendeeSource } from "@/data/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string(),
  email: z.string().email(),
});

type FormSchema = z.infer<typeof formSchema>;

interface ExperienceFormProps {
  showID: number;
}

const ExperienceForm = ({ showID }: ExperienceFormProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    await insertExperienceAttendee({
      ...data,
      lastName: "",
      source: AttendeeSource.experience,
      linkedShow: showID,
    });
  };

  return (
    <div>
      <Card className="bg-grayExperience sm:w-[500px]">
        <CardHeader>
          <CardDescription className="text-white">
            Cher spectateur, pour vous offrir la meilleure expérience magique ce soir, nous avons
            besoin des quelques informations ci-dessous :
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
                    <FormLabel className="text-white">
                      Votre Prénom <RequiredField />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white text-black" />
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
                    <FormLabel className="text-white">
                      Votre email <RequiredField />
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white text-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-blueExperience w-full gap-2 text-white">
                <Sparkles size={16} />
                Sauvegarder
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceForm;
