import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Article } from "@/types/article";
import { formatDate } from "@/lib/format-date";


type PublicArticleCardProps = {
  article: Article;
};

export function PublicArticleCard({
  article,
}: PublicArticleCardProps) {
  return (
    <Card>
      {article.image_url && (
         <div className="relative h-52 w-full overflow-hidden rounded-t-lg">
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      
      <div className="p-6">
        <h2 className="text-xl font-bold text-neutral-900 line-clamp-2">
          {article.title}
        </h2>
        
        <p className="mt-2 text-sm text-muted-foreground">
          {formatDate(article.created_at)}
        </p>

        <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
          {article.content.length > 120
            ? `${article.content.slice(0, 120)}...`
            : article.content}
        </p>

        <div className="mt-6">
          <Link
            href={`/artikel/${article.slug}`}
            className="font-medium text-primary transition hover:underline"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </Card>
  );
}
