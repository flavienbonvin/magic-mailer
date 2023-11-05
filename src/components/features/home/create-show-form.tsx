"use client";

import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/date-picker";
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
  name: z.string(),
  date: z.date(),
});

type FormSchema = z.infer<typeof formSchema>;

const CreateShowForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: new Date(),
    },
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Nom de la représentation ou du lieu</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              <FormItem>
                <FormLabel className="block">Date de la représentation</FormLabel>
                <FormControl>
                  <DatePicker
                    date={form.getValues("date")}
                    setDate={(value) => form.setValue("date", value, { shouldValidate: true })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type="submit">Sauvegarder</Button>
      </form>
    </Form>
  );
};

export default CreateShowForm;
