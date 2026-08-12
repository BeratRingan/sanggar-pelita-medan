-- =====================================================
-- Sanggar Pelita Medan Website
-- Team Members Schema
-- Version: V1
--
-- Purpose:
-- Menyimpan data pengurus dan relawan Sanggar Pelita
--
-- Notes:
-- - RLS enabled
-- - Public hanya dapat melihat anggota aktif
-- - Admin authenticated dapat melakukan CRUD
-- =====================================================


-- =====================================================
-- Create Table
-- =====================================================

create table public.team_members (
  id uuid primary key default gen_random_uuid(),

  name text not null,

  position text not null,

  photo_url text,

  display_order integer not null default 0,

  is_active boolean not null default true,

  created_at timestamptz not null default now(),

  updated_at timestamptz not null default now()
);


-- =====================================================
-- Enable Row Level Security
-- =====================================================

alter table public.team_members
enable row level security;


-- =====================================================
-- Public Read Policy
-- Pengunjung website hanya melihat anggota aktif
-- =====================================================

create policy "Public can view active team members"
on public.team_members
for select
using (
  is_active = true
);


-- =====================================================
-- Authenticated Insert Policy
-- Sementara V1:
-- semua user authenticated dianggap admin
--
-- Akan diperketat pada V2:
-- Multi Admin + Role Management
-- =====================================================

create policy "Authenticated users can insert team members"
on public.team_members
for insert
to authenticated
with check (
  true
);


-- =====================================================
-- Authenticated Update Policy
-- =====================================================

create policy "Authenticated users can update team members"
on public.team_members
for update
to authenticated
using (
  true
);


-- =====================================================
-- Authenticated Delete Policy
-- =====================================================

create policy "Authenticated users can delete team members"
on public.team_members
for delete
to authenticated
using (
  true
);

-- =====================================================
-- Auto update updated_at
-- =====================================================

create or replace function update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


create trigger update_team_members_updated_at
before update
on public.team_members
for each row
execute function update_updated_at_column();