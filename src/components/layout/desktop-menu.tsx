import { NavMenuItem } from "@/components/layout/nav-menu-item";
import type { NavigationItem } from "@/lib/navigation";

type DesktopMenuProps = {
  items: NavigationItem[];
};

export function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {items.map((item) => (
        <NavMenuItem key={item.href} label={item.label} href={item.href} />
      ))}
    </nav>
  );
}