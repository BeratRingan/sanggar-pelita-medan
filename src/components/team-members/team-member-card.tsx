import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/types/team-member";
import { DeleteTeamMemberButton } from "./delete-team-member-button";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({
  member,
}: TeamMemberCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm sm:flex-row sm:p-6">

      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-muted">
        {member.photo_url ? (
          <Image
            src={member.photo_url}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            No Image
          </div>
        )}
      </div>


      <div className="flex-1 space-y-2">

        <h2 className="text-lg font-semibold">
          {member.name}
        </h2>

        <p className="text-muted-foreground">
          {member.position}
        </p>

        <p className="text-sm text-muted-foreground">
          Urutan: {member.display_order}
        </p>

        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
            member.is_active
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {member.is_active ? "Aktif" : "Nonaktif"}
        </span>


        {/* ACTION BUTTON */}
        <div className="flex gap-2 pt-4">

  <Link
    href={`/admin/team-members/${member.id}`}
    className="
      rounded-md
      border
      px-3
      py-1.5
      text-sm
      hover:bg-muted
    "
  >
    Edit
  </Link>


  <DeleteTeamMemberButton
    id={member.id}
    photoUrl={member.photo_url}
  />

</div>


      </div>

    </div>
  );
}