export type TeamMember = {
  id: string;
  name: string;
  position: string;
  photo_url: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};