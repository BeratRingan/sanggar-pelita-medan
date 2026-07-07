import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AppHeader } from "@/components/dashboard/app-header";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardEmpty } from "@/components/dashboard/dashboard-empty";
import { getArticles } from "@/services/article.service";
import { DashboardArticleList } from "@/components/dashboard/dashboard-article-list";

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
  <>
    <AppHeader />

      <section className="space-y-8 p-8">
      <DashboardStats articles={articles} />

        {articles.length === 0 ? (
        <DashboardEmpty />
      ) : (
        <DashboardArticleList articles={articles} />
      )}
    </section>
  </>
);
  
}