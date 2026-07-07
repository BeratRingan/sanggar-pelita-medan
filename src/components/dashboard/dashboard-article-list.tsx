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
          className="flex gap-4 rounded-lg border bg-white p-6 shadow-sm"
        >
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border">
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
      <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold text-neutral-900">
              {article.title}
            </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatDate(article.created_at)}
              </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {article.slug}
                  </p>

          <div className="mt-4 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  article.published
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {article.published ? "Published" : "Draft"}
              </span>

              <div className="flex items-center gap-2">
                <Link 
                  href={`/admin/articles/${article.id}`}
                  className="rounded-md border px-3 py-1.5
                  text-sm transition-colors hover:bg-muted"
                  >
                    Edit
                  </Link>
                <DeleteArticleButton id={article.id} />
              </div>
            </div>
          </div> 
      </div>
     ))}
    </div>
  );
}
