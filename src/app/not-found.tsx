import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Artikel tidak ditemukan
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Artikel yang Anda cari mungkin sudah dipindahkan,
        dihapus, atau belum dipublikasikan.
      </p>

      <Button asChild className="mt-8">
        <Link href="/">
          ← Kembali ke Beranda
        </Link>
      </Button>
    </main>
  );
}