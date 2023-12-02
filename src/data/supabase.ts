import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const uploadFile = async (file: File, fileName: string) => {
  const { data, error } = await supabase.storage
    .from("Magic Mailer")
    .upload(fileName, file, { upsert: true });
  if (error) {
    toast.error("Erreur lors de l'envoi de l'image");
    return null;
  } else {
    toast.success("Image envoyée avec succès");
    return data;
  }
};
