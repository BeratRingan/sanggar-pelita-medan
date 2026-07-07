"use client";

import { deleteArticle } from "@/actions/article";
import { Button } from "@/components/ui/button";

type DeleteArticleButtonProps = {
  id: string;
};

export function DeleteArticleButton({
  id,
}: DeleteArticleButtonProps) {
  async function handleDelete() {
    const confirmed = window.confirm(
      "Yakin ingin menghapus artikel ini?"
    );

    if (!confirmed) {
      return;
    }

    await deleteArticle(id);
  }

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleDelete}
    >
    Delete
  </Button>
  );
}