import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav>
          <Link href="/" className="text-sm">
            Beranda
          </Link>
        </nav>
      </div>
    </header>
  );
}