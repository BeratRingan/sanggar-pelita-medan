import { getArticleById } from "@/services/article.service";
import { ArticleForm } from "@/components/article/article-form";
import { deleteArticle } from "@/actions/article";
import { Button } from "@/components/ui/button";

type EditArticlePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditArticlePage({
  params,
}: EditArticlePageProps) {
  const { id } = await params;
  const article = await getArticleById(id);

  return (
  <section className="mx-auto max-w-4xl space-y-6 p-8">
    <div>
      <h1 className="text-3xl font-bold">
        Edit Artikel
      </h1>

      <p className="text-muted-foreground">
        Perbarui informasi artikel yang sudah dibuat.
      </p>
    </div>

    <ArticleForm article={article} />
    <form
      action={async () => {
        "use server";

        await deleteArticle(
          article.id,
          article.image_url
        );
      }}
      >
        <Button
          type="submit"
          variant="destructive"
          className="w-full"
          >
            Hapus Artikel
          </Button>
      </form>
  </section>
);
}