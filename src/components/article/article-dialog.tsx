"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ArticleForm } from "./article-form";

export function ArticleDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      >
      <DialogTrigger asChild>
        <Button>
          + Tambah Artikel
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl max-h-[90vh]
overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Tambah Artikel Baru
          </DialogTitle>
        </DialogHeader>

        <ArticleForm
          onCancel={() => setOpen(false)}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}