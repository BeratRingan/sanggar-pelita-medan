import { Logo } from "@/components/layout/logo";
import { DesktopMenu } from "@/components/layout/desktop-menu";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { navigation } from "@/lib/navigation";

export function Navbar() {
  return (
    <header className="relative border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <DesktopMenu items={navigation} />
        <MobileMenu items={navigation} />
      </div>
    </header>
  );
}