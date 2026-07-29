"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  onCancel?: () => void;
  onSuccess?: () => void;
  cancelHref?: string;
};

// NEW: Konstanta untuk batas ukuran gambar
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB dalam bytes

export function ArticleForm({
  article,
  onCancel,
  onSuccess,
  cancelHref,
}: ArticleFormProps) {
  const router = useRouter();

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  // REVISI: Tambahkan validasi ukuran gambar
  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Client-side validation: cek ukuran file
    if (file.size > MAX_IMAGE_SIZE) {
      setErrorMessage(
        "Ukuran gambar terlalu besar. Maksimal 5MB."
      );
      // Reset input file agar user bisa pilih ulang
      e.target.value = "";
      return;
    }

    // Clear error message jika sebelumnya ada error
    setErrorMessage("");
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  // REVISI: Hapus fallback hardcoded
  const handleCancel = () => {
    if (cancelHref) {
      router.push(cancelHref);
    } else if (onCancel) {
      onCancel();
    }
    // Tidak ada fallback - tanggung jawab parent
  };

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (isEditMode) {
        await updateArticle(formData);
        if (cancelHref) {
          router.push(cancelHref);
        }
        return;
      }

      await createArticle(formData);

      onSuccess?.();

    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Terjadi kesalahan.");
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
      {/* Input Judul */}
      <div className="space-y-2">
        <Label htmlFor="title" className="mb-2 block">Judul Artikel</Label>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul artikel..."
          required
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
          required
        />
      </div>

      
      <div className="space-y-2">
        <Label htmlFor="image" className="mb-2 block">Gambar Artikel</Label>
        <Input 
          id="image" 
          name="image"
          type="file" 
          accept="image/*" 
          onChange={handleImage} />
        <p className="text-xs text-muted-foreground">
          Format: JPG, PNG, WEBP • Maksimal 5MB
        </p>
      </div>

      {preview && (
        <div className="space-y-2">
          <Label className="mb-2 block">Preview Gambar</Label>
          <div className="relative h-60 w-full overflow-hidden rounded-xl border shadow-sm">
            <Image
              fill
              src={preview}
              alt="Preview Gambar"
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

      {errorMessage && (
        <div className="rounded-md border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {errorMessage}
        </div>
      )}

      
      <div className="flex justify-end gap-3 border-t pt-6 mt-8">
          <Button
            variant="outline"
            type="button"
            onClick={handleCancel}
          >
            Batal
          </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
          ? "Menyimpan..."
          : isEditMode
          ? "Perbarui Artikel"
          : "Simpan Artikel"}
        </Button>
      </div>
    </form>
  );
}