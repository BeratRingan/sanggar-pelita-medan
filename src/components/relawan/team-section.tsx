import Image from "next/image";
import type { TeamMember } from "@/types/team-member";

type TeamSectionProps = {
  members: TeamMember[];
};

export function TeamSection({
  members,
}: TeamSectionProps) {
  if (members.length === 0) {
    return null;
  }

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.id}
              className="overflow-hidden rounded-2xl border bg-muted/20 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-3/5 overflow-hidden bg-muted">
                {member.photo_url ? (
                  <Image
                    src={member.photo_url}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-4xl font-semibold text-muted-foreground">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="mb-3 h-1 w-10 rounded-full bg-primary/70" />

                 <h2 className="font-semibold">
                  {member.name}
                 </h2>

                 <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {member.position}
                 </p>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}