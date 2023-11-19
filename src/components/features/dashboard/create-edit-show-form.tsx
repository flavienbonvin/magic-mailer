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
import { insertShow, updateShow } from "@/data/actions/show";
import { Show, ShowStatus } from "@/data/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  date: z.date(),
});

type FormSchema = z.infer<typeof formSchema>;

interface CreateShowFormProps {
  show?: Show;
  setOpen: (value: boolean) => void;
}

const CreateEditShowForm = ({ show, setOpen }: CreateShowFormProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: show?.name ?? "",
      date: show?.date ?? new Date(),
    },
  });

  const onSubmit = async (data: FormSchema) => {
    const showData = {
      ...data,
      status: ShowStatus.incoming,
    };

    if (show && show.id) {
      await updateShow(show.id, showData);
      setOpen(false);
      return;
    }

    await insertShow(showData);
    setOpen(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de la représentation ou du lieu</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={() => (
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
          )}
        />
        <Button type="submit">Sauvegarder</Button>
      </form>
    </Form>
  );
};

export default CreateEditShowForm;
