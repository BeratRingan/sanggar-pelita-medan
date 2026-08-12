// src/app/(dashboard)/admin/page.tsx
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardEmpty } from "@/components/dashboard/dashboard-empty";
import { getArticles } from "@/services/article.service";
import { DashboardArticleList } from "@/components/dashboard/dashboard-article-list";
import { ArticleDialog } from "@/components/article/article-dialog";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const articles = await getArticles();

  return (
    <section className="space-y-8 p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

            <p className="text-muted-foreground">
            Selamat datang kembali 👋
          </p>
        </div>

    <ArticleDialog />
  </div>

      <DashboardStats articles={articles} />

      {articles.length === 0 ? (
        <DashboardEmpty />
      ) : (
        <DashboardArticleList articles={articles} />
      )}
    </section>
  );
}
