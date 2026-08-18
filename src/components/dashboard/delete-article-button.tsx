"use client";

import { useState } from "react";
import { deleteArticle } from "@/actions/article";
import { Button } from "@/components/ui/button";

type DeleteArticleButtonProps = {
  id: string;
  imageUrl?: string | null;
};

export function DeleteArticleButton({
  id,
  imageUrl,
}: DeleteArticleButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleDelete() {
    const confirmed = window.confirm(
      "Yakin ingin menghapus artikel ini?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setIsDeleting(true);
      setErrorMessage("");

      await deleteArticle(id, imageUrl);

    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Gagal menghapus artikel.");
      }
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="space-y-2">
      <Button
        variant="destructive"
        size="sm"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Menghapus..." : "Delete"}
      </Button>

      {errorMessage && (
        <p className="text-xs text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  );
}