/*
  # Create contact_messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Sender's full name
      - `email` (text) - Sender's email address
      - `subject` (text) - Message subject
      - `message` (text) - Message body
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `contact_messages`
    - Allow anyone (anon) to INSERT — the contact form is public-facing
    - Only authenticated admins can SELECT messages (admin role via app_metadata)
    - No UPDATE or DELETE policies for general use
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );
