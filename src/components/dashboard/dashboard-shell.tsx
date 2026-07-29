"use client";

import type { ReactNode } from "react";
import { useState, useEffect } from "react";

import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { AppHeader } from "@/components/dashboard/app-header";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto flex max-w-[1600px]">
        {/* Desktop Sidebar */}
        <AppSidebar />

        {/* Mobile Drawer */}
        <div
          className={`
            fixed inset-0 z-40 transition-opacity duration-300
            ${isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}
          `}
        >
          {/* Overlay / Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Sidebar Drawer with Accessibility */}
          <div
            className={`
                relative h-full w-72 transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
                role="dialog"
                aria-modal="true"
                aria-label="Menu navigasi dashboard"
            >
            <AppSidebar isMobile onClose={closeMobileMenu} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <AppHeader onMenuClick={openMobileMenu} />
          {children}
        </main>
      </div>
    </div>
  );
}