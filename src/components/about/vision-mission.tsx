const mission = [
  "Membuka akses pendidikan bagi masyarakat Kota Medan.",
  "Menjadi rujukan lembaga pendidikan formal maupun informal.",
  "Membangun kolaborasi dengan berbagai pihak yang bergerak di bidang sosial.",
  "Menciptakan sinergi bersama masyarakat dan bidang pendidikan di Kota Medan.",
];

export function VisionMission() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Visi & Misi
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-background p-6">
            <h3 className="text-xl font-semibold">Visi</h3>
            <p className="mt-3 text-muted-foreground">
              Menjadi wadah pengaplikasian pendidikan, penelitian, dan
              pengabdian sebagai kontribusi nyata bagi masyarakat Kota
              Medan.
            </p>
          </div>

          <div className="rounded-xl border bg-background p-6">
            <h3 className="text-xl font-semibold">Misi</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {mission.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}