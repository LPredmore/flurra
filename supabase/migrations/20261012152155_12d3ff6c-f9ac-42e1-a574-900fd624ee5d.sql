ALTER TABLE public.playlists ADD COLUMN IF NOT EXISTS playlist_title text;

CREATE TABLE IF NOT EXISTS public.upload_post_profiles (
  user_id uuid NOT NULL PRIMARY KEY,
  username text NOT NULL,
  provisioning_status text NOT NULL DEFAULT 'pending',
  provisioning_error text,
  connected_platforms jsonb NOT NULL DEFAULT '{}'::jsonb,
  last_synced_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.upload_post_profiles TO authenticated;
GRANT ALL ON public.upload_post_profiles TO service_role;

ALTER TABLE public.upload_post_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own upload-post profile"
ON public.upload_post_profiles FOR SELECT TO authenticated
USING (auth.uid() = user_id);