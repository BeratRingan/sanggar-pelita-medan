// src/lib/site-config.ts

export interface ContactInfo {
  address: string[];
  whatsapp: string[];
  email: string;
}

export interface SocialMedia {
  name: string;
  url: string;
}

export interface Developer {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  schedule: string;
  mission: string;
  contact: ContactInfo;
  socials: SocialMedia[];
  developer?: Developer;
}

export const siteConfig: SiteConfig = {
  name: "SANGGAR PELITA",
  tagline: "Ruang Berbagi dan Bertumbuh Bersama",
  description: "Relawan Pendidikan Anak\nBelajar Mengajar, Mengajar Belajar.",
  founded: "Berdiri sejak 11 Oktober 2020",
  schedule: "Kegiatan setiap Minggu | 10.00–12.00 WIB.",
  mission: "Bersama Membangun Kolaborasi, Menyalakan Harapan, Mewujudkan Masa Depan.",
  
  contact: {
    address: [
      "Jl. Brigjend Katamso, Gg. Pelita II, Kec. Medan Maimun, Kota Medan, Sumatera Utara",
      "Jl. Bangun Sari, Kedai Durian, Kec. Medan Johor, Kota Medan, Sumatera Utara"
    ],
    whatsapp: [
      "+62 812-7562-2290",
      "+62 823-8161-4440"
    ],
    email: "Sanggarpelita11@gmail.com",
  },
  
  socials: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/sanggarpelita.id/",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@sanggar_pelita",
    },
  ],
  
  // Developer info - optional, untuk portfolio
  developer: {
    name: "BeratRingan",
    url: "https://github.com/BeratRingan",
  },
};