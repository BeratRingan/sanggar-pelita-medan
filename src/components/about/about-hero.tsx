import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">

        <Image
          src="/images/hero/SanggarPelita.jpg"
          alt="Tentang Sanggar Pelita Medan"
          fill
          quality={85}
          className="hidden object-cover md:block"
          sizes="100vw"
        />

        <Image
          src="/images/hero/SanggarPelita2.jpeg"
          alt="Tentang Sanggar Pelita Medan"
          fill
          quality={85}
          className="object-cover md:hidden"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/40" />

      </div>


      <div className="relative z-10 flex min-h-[400px] md:min-h-[500px] items-center justify-center px-6">

        <div className="mx-auto max-w-4xl text-center text-white">

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Tentang Sanggar Pelita
          </h1>

          <p className="mt-6 text-base text-white/90 sm:text-lg">
            Mengenal perjalanan, nilai, dan semangat
            Sanggar Pelita Medan.
          </p>

        </div>

      </div>

    </section>
  );
}