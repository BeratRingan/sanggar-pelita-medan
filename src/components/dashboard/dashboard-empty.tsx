import { Card, CardContent } from "@/components/ui/card";
import { ArticleDialog } from "@/components/article/article-dialog";
import { FileText } from "lucide-react"; // NEW: import icon dari lucide-react

export function DashboardEmpty() {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center px-4 py-12 sm:py-16 md:py-20">
        {/* NEW: Icon dengan visual yang lebih menarik */}
        <div className="mb-6 rounded-full bg-muted/50 p-4">
          <FileText className="h-10 w-10 text-muted-foreground/70 sm:h-12 sm:w-12" />
        </div>

        {/* IMPROVED: Heading lebih jelas */}
        <h2 className="text-center text-xl font-semibold text-card-foreground sm:text-2xl">
          Belum Ada Artikel
        </h2>

        {/* IMPROVED: Description lebih informatif dengan spacing */}
        <p className="mt-2 max-w-md text-center text-sm text-muted-foreground sm:text-base">
          Mulailah membuat artikel pertama untuk kegiatan Sanggar Pelita Medan.
        </p>

        {/* IMPROVED: CTA dengan spacing dan visual emphasis */}
        <div className="mt-6 sm:mt-8">
          <ArticleDialog />
        </div>
      </CardContent>
    </Card>
  );
}