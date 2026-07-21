"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavMenuItem } from "@/components/layout/nav-menu-item";
import type { NavigationItem } from "@/lib/navigation";

type MobileMenuProps = {
  items: NavigationItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <nav className="absolute inset-x-0 top-full z-50 flex flex-col gap-4 border-t bg-background px-6 py-4">
          {items.map((item) => (
            <div key={item.href} onClick={closeMenu}>
              <NavMenuItem label={item.label} href={item.href} />
            </div>
          ))}
        </nav>
      )}
    </div>
  );
}