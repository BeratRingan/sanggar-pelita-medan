"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";


export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const content = formData.get("content") as string;
    if (!title?.trim()) {
      throw new Error("Judul artikel wajib diisi.");
    }
    if (!content?.trim()) {
      throw new Error("Isi artikel wajib diisi.");
    }
    if (!slug?.trim()) {
    throw new Error("Slug artikel tidak valid.");
    }
  const status = formData.get("status") as string;
  const imageUrl = formData.get("imageUrl") as string | null;
  const supabase = await createClient();


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
  if (error.code === "23505") {
    throw new Error(
      "Judul artikel sudah digunakan. Silakan gunakan judul lain."
    );
  }

  throw new Error(error.message);
}

  revalidatePath("/admin");
}


export async function deleteArticle(
  id: string,
  imageUrl?: string | null
) {
  const supabase = await createClient();

  let fileName = "";

  if (imageUrl) {
    const pathname = new URL(imageUrl).pathname;
    fileName = decodeURIComponent(
      pathname.split("/").pop() ?? ""
    );
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
  const imageUrl = formData.get("imageUrl") as string | null;
  const oldImageUrl = formData.get("oldImageUrl") as string;

  const supabase = await createClient();

  const newImageUrl = imageUrl || oldImageUrl;

  let oldFileName = "";

  if (oldImageUrl) {
    const pathname = new URL(oldImageUrl).pathname;
    oldFileName = decodeURIComponent(
      pathname.split("/").pop() ?? ""
    );
  }

  const { error } = await supabase
    .from("articles")
    .update({
      title,
      slug,
      content,
      image_url: newImageUrl,
      status,
      published: status === "published",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  if (imageUrl && imageUrl !== oldImageUrl && oldFileName) {
    const { error: removeError } = await supabase.storage
      .from("articles")
      .remove([oldFileName]);

    if (removeError) {
      console.error(
        "Gagal menghapus gambar lama:",
        removeError.message
      );
    }
  }

  revalidatePath("/admin");
  redirect("/admin");
}
