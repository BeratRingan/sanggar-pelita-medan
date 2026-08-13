import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

const collaborationTypes = [
  {
    title: "Komunitas",
    description:
      "Berkolaborasi dalam kegiatan sosial, pendidikan, dan kegiatan yang memberi manfaat bagi masyarakat.",
  },
  {
    title: "Lembaga & Institusi",
    description:
      "Membangun program pendidikan, pengabdian, dan kegiatan bersama yang memberikan dampak nyata.",
  },
  {
    title: "Individu",
    description:
      "Berbagi waktu, tenaga, pengetahuan, maupun dukungan untuk ikut menyalakan harapan.",
  },
];

export default function KolaborasiPage() {
  const whatsappNumber = siteConfig.contact.whatsapp[0].replace(/\D/g, "");

  return (
    <main>
      {/* Hero */}
        <section className="relative overflow-hidden">
      {/* Desktop */}
        <Image
          src="/images/kolaborasi/kolaborasi 2.jpeg"
          alt="Kegiatan kolaborasi Sanggar Pelita Medan"
          fill
          priority
          quality={85}
          className="hidden object-cover object-[center_95%] md:block"
          sizes="100vw"
        />

      {/* Mobile */}
        <Image
          src="/images/kolaborasi/kolaborasi 1.jpeg"
          alt="Kegiatan kolaborasi Sanggar Pelita Medan"
          fill
          priority
          quality={85}
          className="object-cover object-[center_25%] md:hidden"
          sizes="100vw"
        />

      <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 mx-auto flex min-h-[420px] max-w-4xl items-center justify-center px-6 py-20 text-center text-white md:min-h-[500px] md:py-28">
    <div>
      <p className="text-sm font-medium text-white/80">
        Sanggar Pelita Medan
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Mari Berkolaborasi
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
        Ruang untuk belajar, berbagi, dan bertumbuh menjadi lebih berarti
        ketika dibangun bersama.
      </p>
    </div>
  </div>
</section>

      {/* Bentuk Kolaborasi */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Bentuk Kolaborasi
            </h2>

            <p className="mt-4 text-muted-foreground">
              Setiap orang dan setiap kelompok memiliki ruang untuk mengambil
              bagian dalam perjalanan Sanggar Pelita.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {collaborationTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-muted/20 p-6 transition-colors hover:bg-muted/40"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-100/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Punya gagasan untuk berkolaborasi?
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Mari berbicara dan menemukan ruang untuk bertumbuh serta memberi
            dampak bersama.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Hubungi Kami
            </Link>

            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Kirim Email
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}