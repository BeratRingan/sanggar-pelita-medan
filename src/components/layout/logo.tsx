import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/logo/logo.svg"
        alt="Logo Sanggar Pelita Medan"
        width={36}
        height={52}
        className="h-12 w-auto"
        priority
      />

      <span className="font-bold">
        Sanggar Pelita Medan
      </span>
    </Link>
  );
}