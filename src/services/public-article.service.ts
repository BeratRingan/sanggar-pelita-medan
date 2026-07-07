import { createClient } from "@/lib/supabase/server";

export async function getPublishedArticles() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("published", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }
    return data ?? [];
}

export async function getArticleBySlug(
  slug: string
) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
  return null;
}

return data;
}