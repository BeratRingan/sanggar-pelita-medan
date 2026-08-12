// src/app/(dashboard)/admin/team-members/page.tsx
import { getAllTeamMembers } from "@/services/team-member.service";
import { TeamMemberList } from "@/components/team-members/team-member-list";
import { TeamMemberDialog } from "@/components/team-members/team-member-dialog";
export const dynamic = "force-dynamic";

export default async function TeamMembersPage() {
  const members = await getAllTeamMembers();

  return (
    <section className="space-y-6 p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Kelola Relawan
          </h1>
          <p className="text-muted-foreground">
            Kelola struktur pengurus Sanggar Pelita Medan.
          </p>
        </div>

        <TeamMemberDialog />
      </div>

      <TeamMemberList members={members} />
    </section>
  );
}
