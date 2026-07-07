import type { ReactNode } from "react";

import { AppSidebar } from "@/components/dashboard/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto flex max-w-[1600px]">

        <AppSidebar />

        <main className="flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}