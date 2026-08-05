import Image from "next/image";

export function AboutStory() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">

        <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square">
          <Image
            src="/images/about/about-story.jpeg"
            alt="Kegiatan Sanggar Pelita Medan"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>


        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Perjalanan Kami
          </h2>

          <p className="mt-6 text-muted-foreground">
            Sanggar Pelita merupakan sebuah wadah perkumpulan anak muda 
            yang membangun sebuah komitmen bahwa pendidikan tidak harus dibayar mahal
            bahkan pendidikan masih memiliki ruang untuk dapat dirasakan dan dinikmati oleh semua kalangan masyarakat 
            terkhusus masyarakat pinggiran. 
            Dalam hal ini para kawula muda atau para mahasiswa sebagai Agent of Change memiliki peran yang nantinya 
            akan memegang estafet kepemimpinan di masa mendatang. Sekaligus juga berperan aktif untuk menjadi pelopor 
            terbentuknya pendidikan di Indonesia.
          </p>

          <p className="mt-4 text-muted-foreground">
            Alternatif terbaik bagi mereka yang terpinggirkan untuk mengangkat status sosialnya adalah 
            dari pendidikan. Namun, secara umum, pendidikan belum berpihak kepada mereka, 
            pemerataan pendidikan harus menjadi prioritas. 
            Kegiatan yang dinamakan dengan Sanggar Pelita ini mengambil sebuah slogan Belajar Mengajar, Mengajar Belajar. 
            Dalam pengertian tidak saling mengguru, melainkan saling belajar satu sama lain. 
            Dengan adanya kegiatan ini diharapkan mampu memberikan motivasi, membangun kreativitas, meningkatkan minat literasi, 
            serta memberikan pengetahuan tentang pentingnya pendidikan kepada anak-anak.
          </p>
        </div>

      </div>
    </section>
  );
}