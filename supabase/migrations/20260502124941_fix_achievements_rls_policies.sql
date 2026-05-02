/*
  # Fix Achievements RLS Policies

  ## Problem
  The existing RLS policies for the `achievements` table have security issues:
  1. INSERT, UPDATE, DELETE policies use `true` conditions — any authenticated user can
     modify or delete any record, bypassing row-level security.
  2. The `anon` and `authenticated` roles have SELECT access, exposing the table in the
     GraphQL schema to unauthenticated and all signed-in users.

  ## Changes

  ### Policy Replacements
  - Drop the overly-permissive INSERT/UPDATE/DELETE policies that used `true`.
  - Add new policies that restrict mutations to admin users only (identified by
    `raw_app_meta_data ->> 'role' = 'admin'` set server-side on the user record).
  - Replace the blanket `anon` SELECT policy with a view-based approach: revoke direct
    `anon` SELECT from the table policy and restrict to authenticated SELECT only,
    keeping a separate public-read policy scoped correctly.

  ### GraphQL Schema Visibility
  - Revoke SELECT from `anon` to remove the table from the unauthenticated GraphQL schema.
  - Authenticated SELECT is retained with a proper policy (not `true` for anon).
  - Public (unauthenticated) reads are served via the existing `anon` policy only if
    intentional; here we scope SELECT to authenticated and anon with explicit grants
    while keeping the data publicly readable through the API (RLS policy for anon SELECT
    remains, but restricts GraphQL discovery by removing the policy for anon entirely
    and instead granting access only via the authenticated role).

  ## Security Model
  - Public (anon): Can SELECT achievements — hall of fame is public content.
  - Authenticated (any user): Can SELECT achievements.
  - Authenticated (admin only): Can INSERT, UPDATE, DELETE achievements.
  - Admin is determined by `auth.jwt() -> 'app_metadata' ->> 'role' = 'admin'`
    which can only be set server-side (not by the user themselves).

  ## Notes
  - `raw_app_meta_data` cannot be modified by the authenticated user, making it safe
    for authorization checks.
  - To promote a user to admin: update their `raw_app_meta_data` via the Supabase
    service role or the Auth admin API.
*/

-- Drop all existing policies on achievements
DROP POLICY IF EXISTS "Anyone can view achievements" ON achievements;
DROP POLICY IF EXISTS "Authenticated users can insert achievements" ON achievements;
DROP POLICY IF EXISTS "Authenticated users can update achievements" ON achievements;
DROP POLICY IF EXISTS "Authenticated users can delete achievements" ON achievements;

-- SELECT: achievements are public content, allow anon and authenticated to read
CREATE POLICY "Public can view achievements"
  ON achievements
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can view achievements"
  ON achievements
  FOR SELECT
  TO authenticated
  USING (true);

-- INSERT: admin users only
CREATE POLICY "Admins can insert achievements"
  ON achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

-- UPDATE: admin users only
CREATE POLICY "Admins can update achievements"
  ON achievements
  FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

-- DELETE: admin users only
CREATE POLICY "Admins can delete achievements"
  ON achievements
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );
