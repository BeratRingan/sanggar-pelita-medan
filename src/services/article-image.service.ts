import { createClient } from "@/lib/supabase/client";

export async function uploadArticleImage(file: File) {
  const supabase = createClient();

  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("articles")
    .upload(fileName, file);

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("articles")
    .getPublicUrl(fileName);

  return {
    fileName,
    publicUrl,
  };
}
