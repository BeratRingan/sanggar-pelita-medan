import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Images dengan Art Direction */}
      <div className="absolute inset-0">
        {/* Desktop Image - landscape wide */}
        <Image
          src="/images/hero/SanggarPelita.jpg"
          alt="Sanggar Pelita Medan - Komunitas Sosial"
          fill
          priority
          quality={85}
          className="hidden object-cover md:block"
          sizes="100vw"
        />

        {/* Mobile Image - portrait crop */}
        <Image
          src="/images/hero/SanggarPelita2.jpeg"
          alt="Sanggar Pelita Medan - Komunitas Sosial"
          fill
          priority
          quality={85}
          className="object-cover md:hidden"
          sizes="100vw"
        />

        {/* Overlay gelap untuk readability teks */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Center */}
      <div className="relative z-10 flex min-h-[500px] md:min-h-[600px] items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Eyebrow: Selamat Datang di */}
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
            Selamat Datang di
          </p>

          {/* H1 */}
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Sanggar Pelita Medan
          </h1>

          {/* Description dengan informasi komunitas */}
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            Ruang berbagi dan bertumbuh bersama melalui
            pendidikan, kegiatan sosial, dan pengembangan
            generasi muda.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              href="/artikel"
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
            >
              Kenali Kegiatan Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}