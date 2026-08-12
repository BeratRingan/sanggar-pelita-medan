"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  FileText,
  Home,
  LogOut,
  Settings,
  Users,
  X,
} from "lucide-react";

import { logout } from "@/lib/supabase/actions/logout";

import { Button } from "@/components/ui/button";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    title: "Relawan",
    href: "/admin/team-members",
    icon: Users,
  },
  {
    title: "Artikel",
    href: "#",
    icon: FileText,
  },
  {
    title: "Pengaturan",
    href: "#",
    icon: Settings,
  },
];

type AppSidebarProps = {
  isMobile?: boolean;
  onClose?: () => void;
};

export function AppSidebar({ isMobile, onClose }: AppSidebarProps) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  const handleLogout = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <aside
      className={`
        flex min-h-screen w-72 flex-col border-r bg-background
        ${isMobile 
          ? "fixed inset-y-0 left-0 z-50 shadow-xl transition-transform duration-300 ease-in-out" 
          : "hidden lg:flex"
        }
      `}
    >
      {/* Branding Section - Desktop vs Mobile */}
      {isMobile ? (
        // ============================================
        // MOBILE DRAWER BRANDING
        // ============================================
        <div className="flex items-center justify-between border-b px-4 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo.svg"
              alt="Logo Sanggar Pelita Medan"
              width={40}
              height={40}
              priority
              className="h-15 w-15"
            />
            <div>
              <h2 className="text-center text-sm font-bold">
                Sanggar Pelita Medan
              </h2>
              <p className="text-center text-xs text-muted-foreground">
                Community Management System
              </p>
            </div>
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            aria-label="Tutup menu navigasi"
            className="h-8 w-8"
          >
            <X size={18} />
          </Button>
        </div>
      ) : (
        // ============================================
        // DESKTOP SIDEBAR BRANDING
        // ============================================
        <div className="border-b px-6 py-8">
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/logo/logo.svg"
              alt="Logo Sanggar Pelita Medan"
              width={72}
              height={72}
              priority
              className="h-18 w-18"
            />

            <h2 className="text-center text-lg font-bold">
              Sanggar Pelita Medan
            </h2>

            <p className="text-center text-xs text-muted-foreground">
              Community Management System
            </p>
          </div>
        </div>
      )}

      {/* Menu - Sama untuk Desktop dan Mobile */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.title}
                href={menu.href}
                onClick={handleLinkClick}
                className={`
                  flex items-center gap-3 rounded-lg px-3 py-2 transition
                  ${
                    active
                      ? "bg-primary shadow-sm text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground"
                  }
                `}
              >
                <Icon size={18} />
                {menu.title}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer - Sama untuk Desktop dan Mobile */}
      <div className="mt-auto border-t p-4">
        <form action={logout}>
          <Button
            type="submit"
            variant="outline"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </form>
      </div>
    </aside>
  );
}