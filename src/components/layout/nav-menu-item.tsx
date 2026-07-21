import Link from "next/link";

type NavMenuItemProps = {
  label: string;
  href: string;
};

export function NavMenuItem({ label, href }: NavMenuItemProps) {
  return (
    <Link href={href} className="text-sm">
      {label}
    </Link>
  );
}