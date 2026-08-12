"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

type AppHeaderProps = {
  onMenuClick?: () => void;
};

export function AppHeader({
  onMenuClick,
}: AppHeaderProps) {
  return (
    <header className="flex justify-end border-b bg-background px-4 py-3 lg:hidden">
      <Button
        size="icon"
        variant="outline"
        onClick={onMenuClick}
        aria-label="Buka menu navigasi"
      >
        <Menu size={18} />
      </Button>
    </header>
  );
}