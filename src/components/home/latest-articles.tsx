import Link from "next/link";
import { getLatestArticles } from "@/services/public-article.service";
import { PublicArticleCard } from "@/components/article/public-article-card";

export async function LatestArticles() {
  const articles = await getLatestArticles();

  return (
    <section className="bg-sky-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-3xl font-bold">
          Artikel Terbaru
        </h2>

        {articles.length === 0 ? (
          <p className="text-muted-foreground">
            Belum ada kegiatan terbaru. Cerita dan aktivitas Sanggar
            Pelita akan hadir di sini.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <PublicArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/artikel"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
}
