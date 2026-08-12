// src/services/team-member.service.ts
import type { TeamMember } from "@/types/team-member";
import { createClient } from "@/lib/supabase/server";
import { unstable_noStore as noStore } from "next/cache";

export async function getActiveTeamMembers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("is_active", true)
    .order("display_order", {
      ascending: true,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  noStore();

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", {
      ascending: true,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getTeamMemberById(
  id: string
): Promise<TeamMember | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function deleteTeamMember(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("team_members")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}