import { Card, CardContent } from "@/components/ui/card";
import { ArticleDialog } from "@/components/article/article-dialog";

export function DashboardEmpty() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center py-16">
        <h2 className="text-2xl font-semibold">
          Belum Ada Artikel
        </h2>

        <p className="mt-3 text-center text-muted-foreground">
          Mulailah membuat artikel pertama
          untuk kegiatan Sanggar Pelita Medan.
        </p>

        <ArticleDialog />
      </CardContent>
    </Card>
  );
}