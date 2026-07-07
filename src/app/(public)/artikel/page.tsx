import { getPublishedArticles } from "@/services/public-article.service";
import { PublicArticleListCard } from "@/components/article/public-article-list-card";
export default async function ArticlesPage() {
    const articles = await getPublishedArticles();
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Semua Artikel
      </h1>

      <p className="mt-4">
        Total Artikel: {articles.length}
      </p>

      <div className="mt-10 space-y-6">
        {articles.map((article) => (
        <PublicArticleListCard
          key={article.id}
          article={article}
        />
        ))}
      </div>
    </main>
  );
}