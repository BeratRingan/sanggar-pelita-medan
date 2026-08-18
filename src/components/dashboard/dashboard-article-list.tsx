import Image from "next/image";
import Link from "next/link";
import { DeleteArticleButton } from "./delete-article-button";
import { formatDate } from "@/lib/format-date";

type Article = {
  id: string;
  title: string;
  slug: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
};

type DashboardArticleListProps = {
  articles: Article[];
};

export function DashboardArticleList({
  articles,
}: DashboardArticleListProps) {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <div
          key={article.id}
          // FIX 1: Gunakan semantic tokens untuk card
          className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm sm:flex-row sm:p-6"
        >
          {/* FIX 2: Thumbnail responsive dengan aspect ratio */}
          <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg border sm:aspect-square sm:h-24 sm:w-24">
            {article.image_url ? (
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-muted text-xs text-muted-foreground">
                No Image
              </div>
            )}
          </div>

          {/* FIX 3: Content area dengan spacing yang lebih baik */}
          <div className="min-w-0 flex-1 space-y-2">
            <h2 className="text-base font-semibold text-card-foreground sm:text-lg">
              {article.title}
            </h2>
            
            <div className="space-y-0.5 text-sm text-muted-foreground">
              <p>{formatDate(article.created_at)}</p>
              <p className="truncate">{article.slug}</p>
            </div>

            {/* FIX 4: Action wrapper dengan responsive layout */}
            <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:pt-2">
              {/* FIX 5: Status badge dengan semantic colors */}
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                  article.published
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                }`}
              >
                {article.published ? "Published" : "Draft"}
              </span>

              {/* FIX 6: Action buttons dengan responsive spacing */}
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <Link
                  href={`/admin/articles/${article.id}`}
                  className="flex-1 rounded-md border px-3 py-1.5 text-center text-sm transition-colors hover:bg-muted sm:flex-none"
                >
                  Edit
                </Link>
                <DeleteArticleButton
                  id={article.id}
                  imageUrl={article.image_url}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}