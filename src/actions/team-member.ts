"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createTeamMember(
  formData: FormData
) {
  const name = formData.get("name") as string;
  const position = formData.get("position") as string;
  const displayOrder = Number(
    formData.get("displayOrder")
  );

 
  const isActive =
    formData.get("isActive") === "true";

  const image =
    formData.get("image") as File | null;


  if (!name?.trim()) {
    throw new Error(
      "Nama anggota wajib diisi."
    );
  }

  if (!position?.trim()) {
    throw new Error(
      "Jabatan wajib diisi."
    );
  }


  const supabase = await createClient();

  let photoUrl: string | null = null;


  if (image && image.size > 0) {

    const fileName =
      `${Date.now()}-${image.name}`;


    const { error: uploadError } =
      await supabase.storage
        .from("team-members")
        .upload(fileName, image);


    if (uploadError) {
      throw new Error(
        uploadError.message
      );
    }


    const {
      data: { publicUrl },
    } =
      supabase.storage
        .from("team-members")
        .getPublicUrl(fileName);


    photoUrl = publicUrl;
  }


  const { error } =
    await supabase
      .from("team_members")
      .insert({
        name,
        position,
        photo_url: photoUrl,
        display_order: displayOrder,
        is_active: isActive,
      });


  if (error) {
    throw new Error(error.message);
  }


  revalidatePath(
    "/admin/team-members"
  );
}

export async function updateTeamMember(
  formData: FormData
) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const position = formData.get("position") as string;

  const displayOrder = Number(
    formData.get("displayOrder")
  );

  const oldPhotoUrl =
    formData.get("oldPhotoUrl") as string;


  const image =
    formData.get("image") as File | null;


  if (!id) {
    throw new Error(
      "ID anggota tidak ditemukan."
    );
  }


  const supabase = await createClient();


  let photoUrl = oldPhotoUrl;



  // upload foto baru jika ada
  if (image && image.size > 0) {

    const fileName =
      `${Date.now()}-${image.name}`;


    const { error: uploadError } =
      await supabase.storage
        .from("team-members")
        .upload(fileName, image);


    if (uploadError) {
      throw new Error(
        uploadError.message
      );
    }


    const {
      data: { publicUrl },
    } =
      supabase.storage
        .from("team-members")
        .getPublicUrl(fileName);


    photoUrl = publicUrl;
  }



  const { error } =
    await supabase
      .from("team_members")
      .update({
        name,
        position,
        photo_url: photoUrl,
        display_order: displayOrder,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);



  if (error) {
    throw new Error(error.message);
  }



  // hapus foto lama setelah update berhasil
if (
  image &&
  image.size > 0 &&
  oldPhotoUrl
) {
  const oldFileName = decodeURIComponent(
    oldPhotoUrl.split("/").pop() ?? ""
  );

  if (oldFileName) {
    const { error: removeError } =
      await supabase.storage
        .from("team-members")
        .remove([
          oldFileName,
        ]);

    if (removeError) {
      console.error(
        "Gagal menghapus foto lama:",
        removeError.message
      );
    }
  }
}

  revalidatePath(
    "/admin/team-members"
  );
}


export async function deleteTeamMember(
  id: string,
  photoUrl?: string | null
) {
  const supabase = await createClient();

  let fileName = "";

  if (photoUrl) {
    fileName = decodeURIComponent(
      photoUrl.split("/").pop() ?? ""
    );
  }
  // Hapus foto dari storage
  if (fileName) {
    const { error: removeError } =
      await supabase.storage
        .from("team-members")
        .remove([fileName]);

    if (removeError) {
      console.error(
        "Gagal menghapus foto anggota:",
        removeError.message
      );
    }
  }


  // Hapus data anggota
  const { error } =
    await supabase
      .from("team_members")
      .delete()
      .eq("id", id);


  if (error) {
    throw new Error(error.message);
  }


  revalidatePath(
    "/admin/team-members"
  );
}
