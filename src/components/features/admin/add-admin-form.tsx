"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { insertUser } from "@/data/actions/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "L'adresse email n'est pas valide." }),
  name: z.string().optional(),
  isAdmin: z.boolean().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

const AddAdminForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      isAdmin: false,
    },
  });

  const onSubmit = async (data: FormSchema) => {
    await insertUser({ email: data.email, isAdmin: data.isAdmin ?? false });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <FormField
          control={form.control}
          name="isAdmin"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Est-ce un administrateur?</FormLabel>
                <FormDescription>
                  Les administrateurs peuvent donner accès à l&apos;application
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
          Sauvegarder
        </Button>
      </form>
    </Form>
  );
};

export default AddAdminForm;
