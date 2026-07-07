import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Article } from "@/types/article";
import { formatDate } from "@/lib/format-date";


type PublicArticleListCardProps = {
  article: Article;
};

export function PublicArticleListCard({
  article,
}: PublicArticleListCardProps) {
  return (
    <Card className="pt-0">
      <div className="flex flex-col md:flex-row">
        {article.image_url && (
          <div className="relative h-64 md:h-auto md:w-72 shrink-0 overflow-hidden">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h2 className="text-2xl font-semibold">
            {article.title}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {formatDate(article.created_at)}
          </p>

          <p className="mt-4 text-muted-foreground">
            {article.content.length > 180
              ? `${article.content.slice(0, 180)}...`
              : article.content}
          </p>

          <Link
            href={`/artikel/${article.slug}`}
            className="mt-6 font-medium text-primary hover:underline"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </Card>
  );
}
