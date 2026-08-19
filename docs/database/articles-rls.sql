-- ============================================================
-- Sanggar Pelita Medan
-- Articles Row Level Security (RLS)
-- ============================================================
--
-- Purpose:
-- Protect the public.articles table while preserving:
-- 1. Anonymous access to published articles only.
-- 2. Authenticated admin CRUD access.
--
-- IMPORTANT:
-- Review before executing in Supabase SQL Editor.
-- ============================================================


-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;


-- ============================================================
-- ANONYMOUS PUBLIC READ
-- ============================================================

CREATE POLICY "Anonymous can view published articles"
ON public.articles
FOR SELECT
TO anon
USING (published = true);


-- ============================================================
-- AUTHENTICATED ADMIN ACCESS
-- ============================================================

CREATE POLICY "Authenticated users can view articles"
ON public.articles
FOR SELECT
TO authenticated
USING (true);


CREATE POLICY "Authenticated users can insert articles"
ON public.articles
FOR INSERT
TO authenticated
WITH CHECK (true);


CREATE POLICY "Authenticated users can update articles"
ON public.articles
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);


CREATE POLICY "Authenticated users can delete articles"
ON public.articles
FOR DELETE
TO authenticated
USING (true);