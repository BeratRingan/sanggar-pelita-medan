"use client";

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
  return (
    <Dialog>
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

        <ArticleForm />
      </DialogContent>
    </Dialog>
  );
}