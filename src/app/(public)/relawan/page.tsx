import { getActiveTeamMembers } from "@/services/team-member.service";
import { RelawanHero } from "@/components/relawan/relawan-hero";
import { TeamSection } from "@/components/relawan/team-section";

export default async function RelawanPage() {
  const members = await getActiveTeamMembers();

  return (
    <>
      <RelawanHero />
      <TeamSection members={members} />
    </>
  );
}