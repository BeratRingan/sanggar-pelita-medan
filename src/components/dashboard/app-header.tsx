"use client";

import { Menu } from "lucide-react";
import { ArticleDialog } from "@/components/article/article-dialog";
import { Button } from "@/components/ui/button";

type AppHeaderProps = {
  onMenuClick?: () => void;
};

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b bg-background px-4 py-4 sm:px-8 sm:py-6">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground sm:text-base">
          Selamat datang kembali 👋
        </p>
      </div>

      <div className="flex items-center gap-3">
        <ArticleDialog />
        <Button
          size="icon"
          variant="outline"
          className="lg:hidden"
          onClick={onMenuClick}
          aria-label="Buka menu navigasi"
        >
          <Menu size={18} />
        </Button>
      </div>
    </header>
  );
}