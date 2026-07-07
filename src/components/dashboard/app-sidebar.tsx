"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import {
  FileText,
  Home,
  LogOut,
  Settings,
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

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 border-r bg-background lg:flex lg:flex-col">

      {/* Logo */}

  <div className="border-b px-6 py-8">
  <div className="flex flex-col items-center space-y-2">

    <Image
  src="/logo/logo.svg"
  alt="Logo Sanggar Pelita Medan"
  width={72}
  height={72}
  priority
/>

    <h2 className="text-center text-lg font-bold">
      Sanggar Pelita Medan
    </h2>

    <p className="text-center text-xs text-muted-foreground">
      Community Management System
    </p>
  </div>
</div>

      {/* Menu */}

      <nav className="flex-1 p-4">

        <div className="space-y-2">

          {menus.map((menu) => {
            const Icon = menu.icon;

            const active =
              pathname === menu.href;

            return (
              <Link
                key={menu.title}
                href={menu.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition

${
  active
    ? "bg-primary shadow-sm text-primary-foreground"
    : "hover:bg-muted text-muted-foreground"
}`}
              >
                <Icon size={18} />

                {menu.title}
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Footer */}

<div className="mt-auto border-t p-4">
  <form action={logout}>
    <Button
  type="submit"
  variant="outline"
  className="w-full justify-start"
>
  <LogOut className="mr-2 h-4 w-4" />
  Logout
</Button>
  </form>
</div>

    </aside>
  );
}