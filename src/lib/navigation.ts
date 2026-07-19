export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Tentang Kami",
    href: "/tentang",
  },
  {
    label: "Kegiatan",
    href: "/artikel",
  },
  {
    label: "Relawan",
    href: "/relawan",
  },
  {
    label: "Kolaborasi",
    href: "/kolaborasi",
  },
];