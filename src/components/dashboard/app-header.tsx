import { Menu } from "lucide-react";
import { ArticleDialog } from "@/components/article/article-dialog";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b bg-background px-8 py-6">

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-1 text-muted-foreground">
          Selamat datang kembali 👋
        </p>

      </div>

      <div className="flex items-center gap-3">
        <ArticleDialog />
        <Button
          size="icon"
          variant="outline"
          className="lg:hidden"
        >
          <Menu size={18} />
        </Button>
      </div>
    </header>
  );
}