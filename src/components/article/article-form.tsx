"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  createArticle,
  updateArticle,
} from "@/actions/article";
import { Link2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { Article } from "@/types/article";

type ArticleFormProps = {
  article?: Article;
};
export function ArticleForm({ article }: ArticleFormProps) {
  const isEditMode = Boolean(article);
  const defaultStatus = article
  ? article.published
    ? "published"
    : "draft"
  : "published";
  const [title, setTitle] = useState(article?.title ?? "");
  const [preview, setPreview] = useState(
  article?.image_url ?? ""
  );
  const [, setImage] = useState<File | null>(null);

  const slug = useMemo(() => {
    if (article && title === article.title) {
      return article.slug;
    }

    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  }, [title, article]);

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  return (
    <form
  action={
    isEditMode
      ? updateArticle
      : createArticle
  }
  className="space-y-6"
>
      {/* Input Judul */}
      <div className="space-y-2">
        <Label htmlFor="title" className="mb-2 block">Judul Artikel</Label>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul artikel..."
        />
      </div>

      
      <div className="space-y-2">
        <Label className="mb-2 block">Slug</Label>
        <div className="flex items-center gap-2 rounded-md bg-muted px-4 py-3 text-sm font-mono border text-muted-foreground break-all">
          <Link2 className="h-4 w-4 shrink-0 text-muted-foreground/70" />
          <span>{slug || "judul-artikel-otomatis"}</span>
        </div>
        <input
          type="hidden"
          name="slug"
          value={slug}
        />

      {article && (
        <>
        <input
          type="hidden"
          name="id"
          value={article.id}
        />

        <input
          type="hidden"
          name="oldImageUrl"
          value={article.image_url ?? ""}
        />
      </>
    )}
  </div>

      

      
      <div className="space-y-2">
        <Label htmlFor="content" className="mb-2 block">Isi Artikel</Label>
        <Textarea 
          id="content"
          name="content"
          className="min-h-[220px] resize-y" 
          placeholder="Tulis artikel kegiatan..." 
          defaultValue={article?.content ?? ""}
        />
      </div>

      
      <div className="space-y-2">
        <Label htmlFor="image" className="mb-2 block">Upload Foto</Label>
        <Input 
          id="image" 
          name="image"
          type="file" 
          accept="image/*" 
          onChange={handleImage} />
      </div>

      {preview && (
        <div className="space-y-2">
          <Label className="mb-2 block">Preview</Label>
          <div className="relative h-60 w-full overflow-hidden rounded-xl border shadow-sm">
            <Image
              fill
              src={preview}
              alt="Preview"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      )}

      
      <div className="space-y-2">
        <Label className="mb-2 block">Status</Label>
        <RadioGroup
          defaultValue={defaultStatus}
          name="status"
          className="flex gap-6 pt-1"
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <RadioGroupItem value="published" id="published" />
            <Label htmlFor="published" className="cursor-pointer font-normal">Publish</Label>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <RadioGroupItem value="draft" id="draft" />
            <Label htmlFor="draft" className="cursor-pointer font-normal">Draft</Label>
          </div>
        </RadioGroup>
      </div>

      
      <div className="flex justify-end gap-3 border-t pt-6 mt-8">
          <Button variant="outline" type="button">
            Batal
          </Button>
        <Button type="submit">
          {isEditMode
            ? "Perbarui Artikel"
            : "Simpan Artikel"}
        </Button>
      </div>
    </form>
  );
}
