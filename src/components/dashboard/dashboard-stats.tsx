import { Card, CardContent } from "@/components/ui/card";

type Article = {
  published: boolean;
};

type DashboardStatsProps = {
  articles: Article[];
};

export function DashboardStats({ articles }: DashboardStatsProps) {
  const total = articles.length;
  const published = articles.filter((article) => article.published).length;
  const draft = total - published;

  const stats = [
    {
      title: "Total Artikel",
      value: total,
    },
    {
      title: "Published",
      value: published,
    },
    {
      title: "Draft",
      value: draft,
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.title}>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              {item.title}
            </p>
            <h2 className="mt-2 text-4xl font-bold">
              {item.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}