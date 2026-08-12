import type { TeamMember } from "@/types/team-member";
import { TeamMemberCard } from "./team-member-card";

type TeamMemberListProps = {
  members: TeamMember[];
};

export function TeamMemberList({
  members,
}: TeamMemberListProps) {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
}