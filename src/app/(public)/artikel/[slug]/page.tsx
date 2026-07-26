import { getArticleBySlug } from "@/services/public-article.service";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.created_at);
  const formattedDate = publishedDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/artikel"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Kembali ke Artikel
      </Link>

      <time
        dateTime={publishedDate.toISOString()}
        className="mt-8 block text-sm text-muted-foreground"
      >
        {formattedDate}
      </time>

      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        {article.title}
      </h1>

      {article.image_url && (
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-xl md:h-96">
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      <div className="mx-auto mt-10 max-w-2xl whitespace-pre-wrap leading-8">
        {article.content}
      </div>
    </article>
  );
}