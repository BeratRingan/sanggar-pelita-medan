"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; 


import {
  createTeamMember,
  updateTeamMember,
} from "@/actions/team-member";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { TeamMember } from "@/types/team-member";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;


type TeamMemberFormProps = {
  member?: TeamMember;
  onCancel?: () => void;
  onSuccess?: () => void;
  cancelHref?: string;
};


export function TeamMemberForm({
  member,
  onCancel,
  onSuccess,
  cancelHref,
}: TeamMemberFormProps) {
    const router = useRouter(); 

 const [preview, setPreview] = useState(
  member?.photo_url ?? ""
);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const isEditMode = Boolean(member);


  function handleImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;


    if (file.size > MAX_IMAGE_SIZE) {

      setErrorMessage(
        "Ukuran foto terlalu besar. Maksimal 5MB."
      );

      e.target.value = "";

      return;
    }


    setErrorMessage("");

    setPreview(
      URL.createObjectURL(file)
    );
  }



  async function handleSubmit(
    formData: FormData) {
        setIsSubmitting(true);
        setErrorMessage("");
        
        try {
            if (isEditMode) {
                await updateTeamMember(formData);
                
                if (cancelHref) {
                    router.push(cancelHref);
                }
                return;
            }
            await createTeamMember(formData);
            router.refresh();
            onSuccess?.();
        
        } catch(error){
            if(error instanceof Error){
                setErrorMessage(
                    error.message
                );
            } else {
                setErrorMessage(
                    "Terjadi kesalahan."
                );
            }
        } finally {
            setIsSubmitting(false);
        }
    }

  return (

    <form
      action={handleSubmit}
      className="space-y-6"
    >


      <div className="space-y-2">

        <Label htmlFor="image">
          Foto Anggota
        </Label>

        <Input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        <p className="text-xs text-muted-foreground">
          JPG, PNG, WEBP • Maksimal 5MB
        </p>

      </div>



      {preview && (

        <div className="relative h-64 overflow-hidden rounded-xl border">

          <Image
            src={preview}
            alt="Preview anggota"
            fill
            className="object-cover"
            unoptimized
          />

        </div>

      )}




      <div className="space-y-2">

        <Label htmlFor="name">
          Nama Anggota
        </Label>

        <Input
            id="name"
            name="name"
            placeholder="Contoh: Taslim"
            defaultValue={member?.name ?? ""}
            required
        />

      </div>




      <div className="space-y-2">

        <Label htmlFor="position">
          Jabatan
        </Label>

        <Input
            id="position"
            name="position"
            placeholder="Contoh: PENDIRI/FOUNDER"
            defaultValue={member?.position ?? ""}
            required
        />

      </div>




      <div className="space-y-2">

        <Label htmlFor="displayOrder">
          Urutan Struktur
        </Label>

        <Input
            id="displayOrder"
            name="displayOrder"
            type="number"
            min="1"
            defaultValue={member?.display_order ?? ""}
            placeholder="Contoh: 1"
            required
        />

      </div>




      {member && (
        <>
            <input
                type="hidden"
                name="id"
                value={member.id}
            />

            <input
                type="hidden"
                name="oldPhotoUrl"
                value={member.photo_url ?? ""}
            />
        </>
    )}

      <input
        type="hidden"
        name="isActive"
        value="true"
      />

      {errorMessage && (

        <div className="
          rounded-md
          border
          border-destructive/20
          bg-destructive/10
          px-4
          py-3
          text-sm
          text-destructive
        ">

          {errorMessage}

        </div>

      )}




      <div className="
        flex
        justify-end
        gap-3
        border-t
        pt-6
      ">


        <Button
            type="button"
            variant="outline"
            onClick={() => {
            if (cancelHref) {
                router.push(cancelHref);
            } else {
            onCancel?.();
        }
    }}
    >
  Batal
</Button>


        <Button
            type="submit"
            disabled={isSubmitting}
            >
            {
            isSubmitting
            ? "Menyimpan..."
            : isEditMode
            ? "Perbarui Anggota"
            : "Simpan Anggota"
            }
        </Button>
      </div>


    </form>

  );
}