import { notFound } from "next/navigation";

import { getTeamMemberById } from "@/services/team-member.service";
import { TeamMemberForm } from "@/components/team-members/team-member-form";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTeamMemberPage({
  params,
}: PageProps) {

  const { id } = await params;

  const member = await getTeamMemberById(id);

  if (!member) {
    notFound();
  }

  return (
    <section className="space-y-6 p-8">

      <div>
        <h1 className="text-3xl font-bold">
          Edit Anggota Relawan
        </h1>

        <p className="text-muted-foreground">
          Perbarui data anggota Sanggar Pelita Medan.
        </p>
      </div>


      <TeamMemberForm
        member={member}
        cancelHref="/admin/team-members"
      />

    </section>
  );
}