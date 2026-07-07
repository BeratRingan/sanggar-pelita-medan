import { getPublishedArticles } from "@/services/public-article.service";
import { PublicArticleCard } from "@/components/article/public-article-card";


export async function LatestArticles() {
  const articles = await getPublishedArticles();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-3xl font-bold">
          Artikel Terbaru
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <PublicArticleCard 
              key={article.id} 
              article={article} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
