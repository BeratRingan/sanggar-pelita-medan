"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteTeamMember } from "@/actions/team-member";

type DeleteTeamMemberButtonProps = {
  id: string;
  photoUrl?: string | null;
};

export function DeleteTeamMemberButton({
  id,
  photoUrl,
}: DeleteTeamMemberButtonProps) {

  const [isDeleting, setIsDeleting] = useState(false);


  async function handleDelete() {
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus anggota ini?"
    );

    if (!confirmed) return;


    setIsDeleting(true);

    try {
      await deleteTeamMember(
        id,
        photoUrl
      );
    } finally {
      setIsDeleting(false);
    }
  }


  return (
    <Button
      variant="destructive"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {
        isDeleting
          ? "Menghapus..."
          : "Hapus"
      }
    </Button>
  );
}