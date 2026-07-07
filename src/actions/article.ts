"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";


export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as string;
  const image = formData.get("image") as File | null;
  const supabase = await createClient();

   let imageUrl: string | null = null;
    if (image && image.size > 0) {
      const fileName = `${Date.now()}-${image.name}`;
      
      const { error: uploadError } = await supabase.storage
      .from("articles")
      .upload(fileName, image);

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const {
      data: { publicUrl },
    } = supabase.storage
        .from("articles")
        .getPublicUrl(fileName);
    
    imageUrl = publicUrl;
    }

  const { error } = await supabase
    .from("articles")
    .insert({
      title,
      slug,
      content,
      image_url: imageUrl,
      status,
      published: status === "published",
    });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
}


export async function deleteArticle(
  id: string,
  imageUrl?: string | null) {

  const supabase = await createClient();

  let fileName = "";

if (imageUrl) {
  fileName = imageUrl.split("/").pop() ?? "";
}
if (fileName) {
  const { error: removeError } = await supabase.storage
    .from("articles")
    .remove([fileName]);

  if (removeError) {
      console.error(
        "Gagal menghapus gambar:",
      removeError.message
    );
  }
}

  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", id); 

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateArticle(
  formData: FormData
) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as string;
  const image = formData.get("image") as File | null;
  const oldImageUrl = formData.get("oldImageUrl") as string;

  const supabase = await createClient();

  let imageUrl = oldImageUrl;
  
  let oldFileName = "";
  if (oldImageUrl) {
  oldFileName = oldImageUrl.split("/").pop() ?? "";
}


  if (image && image.size > 0) {
  const fileName = `${Date.now()}-${image.name}`;

  const { error: uploadError } = await supabase.storage
    .from("articles")
    .upload(fileName, image);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("articles")
    .getPublicUrl(fileName);

  imageUrl = publicUrl;
}

  const { error } = await supabase
    .from("articles")
    .update({
      title,
      slug,
      content,
      image_url: imageUrl,
      status,
      published: status === "published",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }


  if (image && image.size > 0 && oldFileName) {
  const { error: removeError } = await supabase.storage
    .from("articles")
    .remove([oldFileName]);

  if (removeError) {
    console.error("Gagal menghapus gambar lama:", removeError.message);
  }
}

revalidatePath("/admin");
redirect("/admin");
}
