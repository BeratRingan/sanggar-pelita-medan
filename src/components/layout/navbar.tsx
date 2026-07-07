import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h2 className="font-bold">
          Sanggar Pelita Medan
        </h2>

        <nav>
          <Link href="/" className="text-sm">
            Beranda
          </Link>
        </nav>
      </div>
    </header>
  );
}