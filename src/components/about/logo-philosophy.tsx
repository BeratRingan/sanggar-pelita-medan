import Image from "next/image";

const philosophyItems = [
  {
    title: "Warna Biru",
    description:
      "Warna biru identik dengan air dan melambangkan kestabilan serta konsistensi. Sanggar Pelita diharapkan terus konsisten memberikan dampak positif bagi lingkungan sekitar, sama seperti air yang bermanfaat dalam berbagai bentuk.",
  },
  {
    title: "Buku Terbuka",
    description:
      "Buku menjadi kiasan sumber ilmu pengetahuan sebagai kekuatan menjalani kehidupan. Buku yang terbuka merepresentasikan kehidupan manusia yang setiap harinya selalu diisi hal baru.",
  },
  {
    title: "Tangan",
    description:
      "Tangan menggambarkan semangat pengabdian, bakti, dan kepedulian terhadap sesama.",
  },
  {
    title: "Tulisan Sanggar Pelita",
    description:
      "Tulisan Sanggar Pelita menggambarkan kekuatan, keteguhan, serta kesan modern dan solid yang mudah diterima oleh semua kalangan.",
  },
];

export function LogoPhilosophy() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-start">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo/logo.svg"
            alt="Logo Sanggar Pelita Medan"
            width={400}
            height={400}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Filosofi Logo
          </h2>

          <div className="mt-6 space-y-6">
            {philosophyItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}