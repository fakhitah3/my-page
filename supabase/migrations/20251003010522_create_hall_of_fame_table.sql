/*
  # Hall of Fame Database Schema

  1. New Tables
    - `achievements`
      - `id` (uuid, primary key) - Unique identifier for each achievement
      - `student_name` (text) - Name of the student
      - `achievement_title` (text) - Title of the achievement
      - `description` (text) - Detailed description of the achievement
      - `category` (text) - Category of achievement (e.g., "Competition", "Research", "Leadership")
      - `date_achieved` (date) - Date when the achievement was obtained
      - `image_url` (text, optional) - URL to achievement image or certificate
      - `created_at` (timestamptz) - Timestamp of record creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `achievements` table
    - Add policy for public read access (achievements are meant to be publicly viewable)
    - Add policy for authenticated users to insert/update/delete (for admin management)

  3. Important Notes
    - Achievements are public-facing content showcasing student successes
    - The table supports categorization for easy filtering and organization
    - Image URLs allow visual representation of achievements
*/

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  achievement_title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL DEFAULT 'General',
  date_achieved date NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view achievements"
  ON achievements
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert achievements"
  ON achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update achievements"
  ON achievements
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete achievements"
  ON achievements
  FOR DELETE
  TO authenticated
  USING (true);