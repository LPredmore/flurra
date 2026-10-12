export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      content_ideas: {
        Row: {
          avatar: string | null
          category: string | null
          created_at: string
          id: number
          length: Database["public"]["Enums"]["video_length"] | null
          planned_date: string | null
          playlist_id: number | null
          topic: string | null
          user_id: string
        }
        Insert: {
          avatar?: string | null
          category?: string | null
          created_at?: string
          id?: number
          length?: Database["public"]["Enums"]["video_length"] | null
          planned_date?: string | null
          playlist_id?: number | null
          topic?: string | null
          user_id: string
        }
        Update: {
          avatar?: string | null
          category?: string | null
          created_at?: string
          id?: number
          length?: Database["public"]["Enums"]["video_length"] | null
          planned_date?: string | null
          playlist_id?: number | null
          topic?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_ideas_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
        ]
      }
      content_instruction_defaults: {
        Row: {
          instruction: string
          scope: string
          updated_at: string
        }
        Insert: {
          instruction: string
          scope: string
          updated_at?: string
        }
        Update: {
          instruction?: string
          scope?: string
          updated_at?: string
        }
        Relationships: []
      }
      hashtag_settings: {
        Row: {
          ai_count: number
          created_at: string
          evergreen_count: number
          evergreen_hashtags: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_count?: number
          created_at?: string
          evergreen_count?: number
          evergreen_hashtags?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_count?: number
          created_at?: string
          evergreen_count?: number
          evergreen_hashtags?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      heygen_look_overrides: {
        Row: {
          avatar_group_id: string
          created_at: string
          custom_group: string | null
          custom_name: string | null
          id: string
          look_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_group_id: string
          created_at?: string
          custom_group?: string | null
          custom_name?: string | null
          id?: string
          look_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_group_id?: string
          created_at?: string
          custom_group?: string | null
          custom_name?: string | null
          id?: string
          look_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      heygen_user_settings: {
        Row: {
          additional_look_ids: string[]
          aspect_ratio: string
          avatar_group_mode: string
          avatar_style: string
          background_asset_url: string | null
          background_color: string | null
          background_type: string
          caption_style: Json
          captions_enabled: boolean
          created_at: string
          default_avatar_group_id: string | null
          default_avatar_look_id: string | null
          default_video_model: string
          default_voice_id: string | null
          dimension_height: number
          dimension_width: number
          enabled: boolean
          id: string
          updated_at: string
          user_id: string
          voice_emotion: string | null
          voice_pitch: number
          voice_speed: number
        }
        Insert: {
          additional_look_ids?: string[]
          aspect_ratio?: string
          avatar_group_mode?: string
          avatar_style?: string
          background_asset_url?: string | null
          background_color?: string | null
          background_type?: string
          caption_style?: Json
          captions_enabled?: boolean
          created_at?: string
          default_avatar_group_id?: string | null
          default_avatar_look_id?: string | null
          default_video_model?: string
          default_voice_id?: string | null
          dimension_height?: number
          dimension_width?: number
          enabled?: boolean
          id?: string
          updated_at?: string
          user_id: string
          voice_emotion?: string | null
          voice_pitch?: number
          voice_speed?: number
        }
        Update: {
          additional_look_ids?: string[]
          aspect_ratio?: string
          avatar_group_mode?: string
          avatar_style?: string
          background_asset_url?: string | null
          background_color?: string | null
          background_type?: string
          caption_style?: Json
          captions_enabled?: boolean
          created_at?: string
          default_avatar_group_id?: string | null
          default_avatar_look_id?: string | null
          default_video_model?: string
          default_voice_id?: string | null
          dimension_height?: number
          dimension_width?: number
          enabled?: boolean
          id?: string
          updated_at?: string
          user_id?: string
          voice_emotion?: string | null
          voice_pitch?: number
          voice_speed?: number
        }
        Relationships: []
      }
      image_gen_settings: {
        Row: {
          avatar_character_description: string | null
          avatar_mime_type: string | null
          avatar_original_filename: string | null
          avatar_storage_path: string | null
          created_at: string
          default_aspect: string
          logo_description: string | null
          logo_mime_type: string | null
          logo_original_filename: string | null
          logo_storage_path: string | null
          model: string
          negative_prompt: string | null
          updated_at: string
          use_avatar: boolean
          use_logo: boolean
          user_id: string
        }
        Insert: {
          avatar_character_description?: string | null
          avatar_mime_type?: string | null
          avatar_original_filename?: string | null
          avatar_storage_path?: string | null
          created_at?: string
          default_aspect?: string
          logo_description?: string | null
          logo_mime_type?: string | null
          logo_original_filename?: string | null
          logo_storage_path?: string | null
          model?: string
          negative_prompt?: string | null
          updated_at?: string
          use_avatar?: boolean
          use_logo?: boolean
          user_id: string
        }
        Update: {
          avatar_character_description?: string | null
          avatar_mime_type?: string | null
          avatar_original_filename?: string | null
          avatar_storage_path?: string | null
          created_at?: string
          default_aspect?: string
          logo_description?: string | null
          logo_mime_type?: string | null
          logo_original_filename?: string | null
          logo_storage_path?: string | null
          model?: string
          negative_prompt?: string | null
          updated_at?: string
          use_avatar?: boolean
          use_logo?: boolean
          user_id?: string
        }
        Relationships: []
      }
      image_series: {
        Row: {
          created_at: string
          id: string
          image_count: number
          is_active: boolean
          main_theme: string
          name: string
          platforms: string[]
          post_time: string
          start_date: string
          timezone: string
          updated_at: string
          user_id: string
          weeks_count: number
        }
        Insert: {
          created_at?: string
          id?: string
          image_count?: number
          is_active?: boolean
          main_theme?: string
          name: string
          platforms?: string[]
          post_time?: string
          start_date?: string
          timezone?: string
          updated_at?: string
          user_id: string
          weeks_count?: number
        }
        Update: {
          created_at?: string
          id?: string
          image_count?: number
          is_active?: boolean
          main_theme?: string
          name?: string
          platforms?: string[]
          post_time?: string
          start_date?: string
          timezone?: string
          updated_at?: string
          user_id?: string
          weeks_count?: number
        }
        Relationships: []
      }
      image_series_days: {
        Row: {
          created_at: string
          dow: number
          enabled: boolean
          id: string
          notes: string | null
          series_id: string
          theme: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          dow: number
          enabled?: boolean
          id?: string
          notes?: string | null
          series_id: string
          theme?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          dow?: number
          enabled?: boolean
          id?: string
          notes?: string | null
          series_id?: string
          theme?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "image_series_days_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "image_series"
            referencedColumns: ["id"]
          },
        ]
      }
      image_series_weeks: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          series_id: string
          theme: string
          updated_at: string
          user_id: string
          week_index: number
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          series_id: string
          theme?: string
          updated_at?: string
          user_id: string
          week_index: number
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          series_id?: string
          theme?: string
          updated_at?: string
          user_id?: string
          week_index?: number
        }
        Relationships: [
          {
            foreignKeyName: "image_series_weeks_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "image_series"
            referencedColumns: ["id"]
          },
        ]
      }
      niche_keywords: {
        Row: {
          created_at: string
          id: number
          keyword: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          keyword: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          keyword?: string
          user_id?: string
        }
        Relationships: []
      }
      platform_defaults: {
        Row: {
          created_at: string
          linkedin: Json
          reddit: Json
          tiktok: Json
          updated_at: string
          user_id: string
          youtube: Json
        }
        Insert: {
          created_at?: string
          linkedin?: Json
          reddit?: Json
          tiktok?: Json
          updated_at?: string
          user_id: string
          youtube?: Json
        }
        Update: {
          created_at?: string
          linkedin?: Json
          reddit?: Json
          tiktok?: Json
          updated_at?: string
          user_id?: string
          youtube?: Json
        }
        Relationships: []
      }
      playlist_subreddits: {
        Row: {
          created_at: string
          playlist_id: number
          subreddit_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          playlist_id: number
          subreddit_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          playlist_id?: number
          subreddit_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "playlist_subreddits_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playlist_subreddits_subreddit_id_fkey"
            columns: ["subreddit_id"]
            isOneToOne: false
            referencedRelation: "reddit_subreddits"
            referencedColumns: ["id"]
          },
        ]
      }
      playlists: {
        Row: {
          created_at: string
          description: string | null
          id: number
          linkedin_enabled: boolean
          name: string | null
          playlist_title: string | null
          sort_order: number
          updated_at: string
          user_id: string
          youtube_playlist_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          linkedin_enabled?: boolean
          name?: string | null
          playlist_title?: string | null
          sort_order?: number
          updated_at?: string
          user_id: string
          youtube_playlist_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          linkedin_enabled?: boolean
          name?: string | null
          playlist_title?: string | null
          sort_order?: number
          updated_at?: string
          user_id?: string
          youtube_playlist_id?: string | null
        }
        Relationships: []
      }
      post_metric_snapshots: {
        Row: {
          account_id: string | null
          average_view_duration_seconds: number | null
          average_watch_time: number | null
          captured_at: string
          click_through_rate: number | null
          comment_rate: number | null
          comments: number
          completion_rate: number | null
          created_at: string
          effective_views: number | null
          engagement_rate: number | null
          favorites: number | null
          followers_gained: number
          id: string
          impressions: number
          like_rate: number | null
          likes: number
          metric_source: Database["public"]["Enums"]["social_metric_source"]
          metrics_error: string | null
          platform: string
          profile_view_rate: number | null
          profile_views: number
          raw_metrics: Json
          raw_response: Json
          reach: number
          save_rate: number | null
          saves: number
          share_rate: number | null
          shares: number
          social_post_id: string
          source: string
          subscriber_gain: number | null
          subscribers: number | null
          sync_job_id: string | null
          user_id: string
          views: number
          watch_time_seconds: number | null
        }
        Insert: {
          account_id?: string | null
          average_view_duration_seconds?: number | null
          average_watch_time?: number | null
          captured_at?: string
          click_through_rate?: number | null
          comment_rate?: number | null
          comments?: number
          completion_rate?: number | null
          created_at?: string
          effective_views?: number | null
          engagement_rate?: number | null
          favorites?: number | null
          followers_gained?: number
          id?: string
          impressions?: number
          like_rate?: number | null
          likes?: number
          metric_source?: Database["public"]["Enums"]["social_metric_source"]
          metrics_error?: string | null
          platform?: string
          profile_view_rate?: number | null
          profile_views?: number
          raw_metrics?: Json
          raw_response?: Json
          reach?: number
          save_rate?: number | null
          saves?: number
          share_rate?: number | null
          shares?: number
          social_post_id: string
          source?: string
          subscriber_gain?: number | null
          subscribers?: number | null
          sync_job_id?: string | null
          user_id: string
          views?: number
          watch_time_seconds?: number | null
        }
        Update: {
          account_id?: string | null
          average_view_duration_seconds?: number | null
          average_watch_time?: number | null
          captured_at?: string
          click_through_rate?: number | null
          comment_rate?: number | null
          comments?: number
          completion_rate?: number | null
          created_at?: string
          effective_views?: number | null
          engagement_rate?: number | null
          favorites?: number | null
          followers_gained?: number
          id?: string
          impressions?: number
          like_rate?: number | null
          likes?: number
          metric_source?: Database["public"]["Enums"]["social_metric_source"]
          metrics_error?: string | null
          platform?: string
          profile_view_rate?: number | null
          profile_views?: number
          raw_metrics?: Json
          raw_response?: Json
          reach?: number
          save_rate?: number | null
          saves?: number
          share_rate?: number | null
          shares?: number
          social_post_id?: string
          source?: string
          subscriber_gain?: number | null
          subscribers?: number | null
          sync_job_id?: string | null
          user_id?: string
          views?: number
          watch_time_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "post_metric_snapshots_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_metric_snapshots_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_metric_snapshots_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_post_latest_metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_metric_snapshots_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_promotion_candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_metric_snapshots_sync_job_id_fkey"
            columns: ["sync_job_id"]
            isOneToOne: false
            referencedRelation: "social_analytics_sync_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      posted_content: {
        Row: {
          content_type: string
          created_at: string
          error: string | null
          facebook_desc: string | null
          id: string
          ig_tiktok_desc: string | null
          image: string | null
          image_storage_paths: string[]
          image_url: string | null
          image_urls: string[]
          linkedin_desc: string | null
          parent_content_id: string | null
          planned_date: string | null
          playlist_id: number | null
          post_length: Database["public"]["Enums"]["video_length"] | null
          post_title: string | null
          posted_at: string | null
          reddit_extra_results: Json
          reddit_overrides: Json | null
          reddit_subreddit: string | null
          reddit_subreddit_id: string | null
          scheduled_at: string | null
          scheduled_platforms: string[] | null
          script: string | null
          source_content_id: string | null
          status: Database["public"]["Enums"]["post_status"]
          tiktok_overrides: Json | null
          topic: string
          updated_at: string
          user_id: string
          video_mime_type: string | null
          video_original_filename: string | null
          video_size_bytes: number | null
          video_storage_path: string | null
          video_url: string | null
          youtube_desc: string | null
          youtube_overrides: Json | null
          youtube_title: string | null
        }
        Insert: {
          content_type?: string
          created_at?: string
          error?: string | null
          facebook_desc?: string | null
          id?: string
          ig_tiktok_desc?: string | null
          image?: string | null
          image_storage_paths?: string[]
          image_url?: string | null
          image_urls?: string[]
          linkedin_desc?: string | null
          parent_content_id?: string | null
          planned_date?: string | null
          playlist_id?: number | null
          post_length?: Database["public"]["Enums"]["video_length"] | null
          post_title?: string | null
          posted_at?: string | null
          reddit_extra_results?: Json
          reddit_overrides?: Json | null
          reddit_subreddit?: string | null
          reddit_subreddit_id?: string | null
          scheduled_at?: string | null
          scheduled_platforms?: string[] | null
          script?: string | null
          source_content_id?: string | null
          status?: Database["public"]["Enums"]["post_status"]
          tiktok_overrides?: Json | null
          topic: string
          updated_at?: string
          user_id: string
          video_mime_type?: string | null
          video_original_filename?: string | null
          video_size_bytes?: number | null
          video_storage_path?: string | null
          video_url?: string | null
          youtube_desc?: string | null
          youtube_overrides?: Json | null
          youtube_title?: string | null
        }
        Update: {
          content_type?: string
          created_at?: string
          error?: string | null
          facebook_desc?: string | null
          id?: string
          ig_tiktok_desc?: string | null
          image?: string | null
          image_storage_paths?: string[]
          image_url?: string | null
          image_urls?: string[]
          linkedin_desc?: string | null
          parent_content_id?: string | null
          planned_date?: string | null
          playlist_id?: number | null
          post_length?: Database["public"]["Enums"]["video_length"] | null
          post_title?: string | null
          posted_at?: string | null
          reddit_extra_results?: Json
          reddit_overrides?: Json | null
          reddit_subreddit?: string | null
          reddit_subreddit_id?: string | null
          scheduled_at?: string | null
          scheduled_platforms?: string[] | null
          script?: string | null
          source_content_id?: string | null
          status?: Database["public"]["Enums"]["post_status"]
          tiktok_overrides?: Json | null
          topic?: string
          updated_at?: string
          user_id?: string
          video_mime_type?: string | null
          video_original_filename?: string | null
          video_size_bytes?: number | null
          video_storage_path?: string | null
          video_url?: string | null
          youtube_desc?: string | null
          youtube_overrides?: Json | null
          youtube_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posted_content_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          email: string
          id: string
          onboarding_completed: boolean
          password: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          email: string
          id: string
          onboarding_completed?: boolean
          password?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          onboarding_completed?: boolean
          password?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      reddit_connections: {
        Row: {
          access_token: string | null
          access_token_expires_at: string | null
          connected_at: string
          default_subreddit: string | null
          reddit_username: string | null
          refresh_token_encrypted: string
          scopes: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          access_token_expires_at?: string | null
          connected_at?: string
          default_subreddit?: string | null
          reddit_username?: string | null
          refresh_token_encrypted: string
          scopes?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          access_token_expires_at?: string | null
          connected_at?: string
          default_subreddit?: string | null
          reddit_username?: string | null
          refresh_token_encrypted?: string
          scopes?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      reddit_subreddits: {
        Row: {
          created_at: string
          first_comment: string | null
          flair_id: string | null
          flair_label: string | null
          id: string
          is_default: boolean
          name: string
          sort_order: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          first_comment?: string | null
          flair_id?: string | null
          flair_label?: string | null
          id?: string
          is_default?: boolean
          name: string
          sort_order?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          first_comment?: string | null
          flair_id?: string | null
          flair_label?: string | null
          id?: string
          is_default?: boolean
          name?: string
          sort_order?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      social_analytics_sync_errors: {
        Row: {
          account_id: string | null
          created_at: string
          endpoint: string | null
          error_message: string | null
          id: string
          platform: Database["public"]["Enums"]["social_platform"] | null
          raw_error: Json
          request_identifier: string | null
          social_post_id: string | null
          status_code: number | null
          sync_job_id: string | null
          user_id: string | null
        }
        Insert: {
          account_id?: string | null
          created_at?: string
          endpoint?: string | null
          error_message?: string | null
          id?: string
          platform?: Database["public"]["Enums"]["social_platform"] | null
          raw_error?: Json
          request_identifier?: string | null
          social_post_id?: string | null
          status_code?: number | null
          sync_job_id?: string | null
          user_id?: string | null
        }
        Update: {
          account_id?: string | null
          created_at?: string
          endpoint?: string | null
          error_message?: string | null
          id?: string
          platform?: Database["public"]["Enums"]["social_platform"] | null
          raw_error?: Json
          request_identifier?: string | null
          social_post_id?: string | null
          status_code?: number | null
          sync_job_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_analytics_sync_errors_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_analytics_sync_errors_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_analytics_sync_errors_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_post_latest_metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_analytics_sync_errors_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_promotion_candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_analytics_sync_errors_sync_job_id_fkey"
            columns: ["sync_job_id"]
            isOneToOne: false
            referencedRelation: "social_analytics_sync_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      social_analytics_sync_jobs: {
        Row: {
          account_id: string | null
          completed_at: string | null
          created_at: string
          details: Json
          error_count: number
          id: string
          job_type: string
          period_end: string | null
          period_start: string | null
          platform: Database["public"]["Enums"]["social_platform"] | null
          request_count: number
          started_at: string | null
          status: Database["public"]["Enums"]["analytics_sync_status"]
          success_count: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          account_id?: string | null
          completed_at?: string | null
          created_at?: string
          details?: Json
          error_count?: number
          id?: string
          job_type: string
          period_end?: string | null
          period_start?: string | null
          platform?: Database["public"]["Enums"]["social_platform"] | null
          request_count?: number
          started_at?: string | null
          status?: Database["public"]["Enums"]["analytics_sync_status"]
          success_count?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          account_id?: string | null
          completed_at?: string | null
          created_at?: string
          details?: Json
          error_count?: number
          id?: string
          job_type?: string
          period_end?: string | null
          period_start?: string | null
          platform?: Database["public"]["Enums"]["social_platform"] | null
          request_count?: number
          started_at?: string | null
          status?: Database["public"]["Enums"]["analytics_sync_status"]
          success_count?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_analytics_sync_jobs_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_content: {
        Row: {
          brand_name: string | null
          caption: string | null
          content_date: string | null
          content_type: string
          created_at: string
          error: string | null
          facebook_desc: string | null
          generation_attempts: number
          generation_locked_until: string | null
          generation_metadata: Json
          generation_model: string | null
          generation_payload: Json | null
          generation_prompt: string | null
          generation_status: string
          generation_step: string | null
          generation_step_attempts: number
          heygen_error: string | null
          heygen_status: string | null
          heygen_video_id: string | null
          hook: string | null
          id: string
          ig_tiktok_desc: string | null
          image: string | null
          image_series_dow: number | null
          image_series_id: string | null
          image_series_week_index: number | null
          image_storage_paths: string[]
          image_urls: string[]
          linkedin_desc: string | null
          parent_content_id: string | null
          persona_name: string | null
          planned_date: string | null
          playlist_id: number | null
          post_length: Database["public"]["Enums"]["video_length"] | null
          post_title: string | null
          posted_at: string | null
          reddit_extra_results: Json
          reddit_overrides: Json | null
          reddit_routing: Json | null
          reddit_subreddit: string | null
          reddit_subreddit_id: string | null
          reddit_target_subreddits: string[] | null
          scheduled_at: string | null
          scheduled_platforms: string[] | null
          script: string | null
          series_name: string | null
          status: Database["public"]["Enums"]["post_status"]
          text_series_dow: number | null
          text_series_id: string | null
          text_series_week_index: number | null
          tiktok_overrides: Json | null
          topic: string | null
          updated_at: string
          user_id: string
          video_mime_type: string | null
          video_original_filename: string | null
          video_series_dow: number | null
          video_series_id: string | null
          video_series_week_index: number | null
          video_size_bytes: number | null
          video_storage_path: string | null
          video_url: string | null
          youtube_desc: string | null
          youtube_error_detail: string | null
          youtube_overrides: Json | null
          youtube_status: string | null
          youtube_upload_session_uri: string | null
          youtube_uploaded_at: string | null
          youtube_video_id: string | null
        }
        Insert: {
          brand_name?: string | null
          caption?: string | null
          content_date?: string | null
          content_type?: string
          created_at?: string
          error?: string | null
          facebook_desc?: string | null
          generation_attempts?: number
          generation_locked_until?: string | null
          generation_metadata?: Json
          generation_model?: string | null
          generation_payload?: Json | null
          generation_prompt?: string | null
          generation_status?: string
          generation_step?: string | null
          generation_step_attempts?: number
          heygen_error?: string | null
          heygen_status?: string | null
          heygen_video_id?: string | null
          hook?: string | null
          id?: string
          ig_tiktok_desc?: string | null
          image?: string | null
          image_series_dow?: number | null
          image_series_id?: string | null
          image_series_week_index?: number | null
          image_storage_paths?: string[]
          image_urls?: string[]
          linkedin_desc?: string | null
          parent_content_id?: string | null
          persona_name?: string | null
          planned_date?: string | null
          playlist_id?: number | null
          post_length?: Database["public"]["Enums"]["video_length"] | null
          post_title?: string | null
          posted_at?: string | null
          reddit_extra_results?: Json
          reddit_overrides?: Json | null
          reddit_routing?: Json | null
          reddit_subreddit?: string | null
          reddit_subreddit_id?: string | null
          reddit_target_subreddits?: string[] | null
          scheduled_at?: string | null
          scheduled_platforms?: string[] | null
          script?: string | null
          series_name?: string | null
          status?: Database["public"]["Enums"]["post_status"]
          text_series_dow?: number | null
          text_series_id?: string | null
          text_series_week_index?: number | null
          tiktok_overrides?: Json | null
          topic?: string | null
          updated_at?: string
          user_id: string
          video_mime_type?: string | null
          video_original_filename?: string | null
          video_series_dow?: number | null
          video_series_id?: string | null
          video_series_week_index?: number | null
          video_size_bytes?: number | null
          video_storage_path?: string | null
          video_url?: string | null
          youtube_desc?: string | null
          youtube_error_detail?: string | null
          youtube_overrides?: Json | null
          youtube_status?: string | null
          youtube_upload_session_uri?: string | null
          youtube_uploaded_at?: string | null
          youtube_video_id?: string | null
        }
        Update: {
          brand_name?: string | null
          caption?: string | null
          content_date?: string | null
          content_type?: string
          created_at?: string
          error?: string | null
          facebook_desc?: string | null
          generation_attempts?: number
          generation_locked_until?: string | null
          generation_metadata?: Json
          generation_model?: string | null
          generation_payload?: Json | null
          generation_prompt?: string | null
          generation_status?: string
          generation_step?: string | null
          generation_step_attempts?: number
          heygen_error?: string | null
          heygen_status?: string | null
          heygen_video_id?: string | null
          hook?: string | null
          id?: string
          ig_tiktok_desc?: string | null
          image?: string | null
          image_series_dow?: number | null
          image_series_id?: string | null
          image_series_week_index?: number | null
          image_storage_paths?: string[]
          image_urls?: string[]
          linkedin_desc?: string | null
          parent_content_id?: string | null
          persona_name?: string | null
          planned_date?: string | null
          playlist_id?: number | null
          post_length?: Database["public"]["Enums"]["video_length"] | null
          post_title?: string | null
          posted_at?: string | null
          reddit_extra_results?: Json
          reddit_overrides?: Json | null
          reddit_routing?: Json | null
          reddit_subreddit?: string | null
          reddit_subreddit_id?: string | null
          reddit_target_subreddits?: string[] | null
          scheduled_at?: string | null
          scheduled_platforms?: string[] | null
          script?: string | null
          series_name?: string | null
          status?: Database["public"]["Enums"]["post_status"]
          text_series_dow?: number | null
          text_series_id?: string | null
          text_series_week_index?: number | null
          tiktok_overrides?: Json | null
          topic?: string | null
          updated_at?: string
          user_id?: string
          video_mime_type?: string | null
          video_original_filename?: string | null
          video_series_dow?: number | null
          video_series_id?: string | null
          video_series_week_index?: number | null
          video_size_bytes?: number | null
          video_storage_path?: string | null
          video_url?: string | null
          youtube_desc?: string | null
          youtube_error_detail?: string | null
          youtube_overrides?: Json | null
          youtube_status?: string | null
          youtube_upload_session_uri?: string | null
          youtube_uploaded_at?: string | null
          youtube_video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_content_image_series_id_fkey"
            columns: ["image_series_id"]
            isOneToOne: false
            referencedRelation: "image_series"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_content_parent_content_id_fkey"
            columns: ["parent_content_id"]
            isOneToOne: false
            referencedRelation: "social_content"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_content_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_content_reddit_subreddit_id_fkey"
            columns: ["reddit_subreddit_id"]
            isOneToOne: false
            referencedRelation: "reddit_subreddits"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_content_text_series_id_fkey"
            columns: ["text_series_id"]
            isOneToOne: false
            referencedRelation: "text_series"
            referencedColumns: ["id"]
          },
        ]
      }
      social_content_assets: {
        Row: {
          asset_type: string
          asset_url: string | null
          content_item_id: string
          created_at: string
          duration_seconds: number | null
          height: number | null
          heygen_status: string | null
          heygen_video_id: string | null
          id: string
          metadata: Json
          mime_type: string | null
          sort_order: number
          source_service: string | null
          storage_path: string | null
          updated_at: string
          user_id: string | null
          width: number | null
        }
        Insert: {
          asset_type: string
          asset_url?: string | null
          content_item_id: string
          created_at?: string
          duration_seconds?: number | null
          height?: number | null
          heygen_status?: string | null
          heygen_video_id?: string | null
          id?: string
          metadata?: Json
          mime_type?: string | null
          sort_order?: number
          source_service?: string | null
          storage_path?: string | null
          updated_at?: string
          user_id?: string | null
          width?: number | null
        }
        Update: {
          asset_type?: string
          asset_url?: string | null
          content_item_id?: string
          created_at?: string
          duration_seconds?: number | null
          height?: number | null
          heygen_status?: string | null
          heygen_video_id?: string | null
          id?: string
          metadata?: Json
          mime_type?: string | null
          sort_order?: number
          source_service?: string | null
          storage_path?: string | null
          updated_at?: string
          user_id?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "social_content_assets_content_item_id_fkey"
            columns: ["content_item_id"]
            isOneToOne: false
            referencedRelation: "social_content"
            referencedColumns: ["id"]
          },
        ]
      }
      social_platform_accounts: {
        Row: {
          account_url: string | null
          created_at: string
          display_name: string | null
          id: string
          is_active: boolean
          metadata: Json
          platform: Database["public"]["Enums"]["social_platform"]
          platform_account_id: string | null
          profile_username: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          account_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          is_active?: boolean
          metadata?: Json
          platform: Database["public"]["Enums"]["social_platform"]
          platform_account_id?: string | null
          profile_username: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          account_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          is_active?: boolean
          metadata?: Json
          platform?: Database["public"]["Enums"]["social_platform"]
          platform_account_id?: string | null
          profile_username?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      social_platform_metric_configs: {
        Row: {
          available_metrics: string[]
          created_at: string
          default_scoring_weights: Json
          default_top_n: number
          id: string
          is_active: boolean
          last_synced_at: string | null
          max_top_n: number
          metric_labels: Json
          min_views_for_promotion: number
          platform: Database["public"]["Enums"]["social_platform"]
          primary_impressions_field: string | null
          raw_config: Json
          updated_at: string
        }
        Insert: {
          available_metrics?: string[]
          created_at?: string
          default_scoring_weights?: Json
          default_top_n?: number
          id?: string
          is_active?: boolean
          last_synced_at?: string | null
          max_top_n?: number
          metric_labels?: Json
          min_views_for_promotion?: number
          platform: Database["public"]["Enums"]["social_platform"]
          primary_impressions_field?: string | null
          raw_config?: Json
          updated_at?: string
        }
        Update: {
          available_metrics?: string[]
          created_at?: string
          default_scoring_weights?: Json
          default_top_n?: number
          id?: string
          is_active?: boolean
          last_synced_at?: string | null
          max_top_n?: number
          metric_labels?: Json
          min_views_for_promotion?: number
          platform?: Database["public"]["Enums"]["social_platform"]
          primary_impressions_field?: string | null
          raw_config?: Json
          updated_at?: string
        }
        Relationships: []
      }
      social_post_scores: {
        Row: {
          account_id: string | null
          calculation_details: Json
          created_at: string
          eligible: boolean
          id: string
          ineligible_reason: string | null
          metric_captured_at: string | null
          metric_snapshot_id: string | null
          platform: Database["public"]["Enums"]["social_platform"]
          rank: number | null
          score: number
          score_run_id: string
          selected: boolean
          selection_reason: string | null
          social_post_id: string
          user_id: string | null
        }
        Insert: {
          account_id?: string | null
          calculation_details?: Json
          created_at?: string
          eligible?: boolean
          id?: string
          ineligible_reason?: string | null
          metric_captured_at?: string | null
          metric_snapshot_id?: string | null
          platform: Database["public"]["Enums"]["social_platform"]
          rank?: number | null
          score?: number
          score_run_id: string
          selected?: boolean
          selection_reason?: string | null
          social_post_id: string
          user_id?: string | null
        }
        Update: {
          account_id?: string | null
          calculation_details?: Json
          created_at?: string
          eligible?: boolean
          id?: string
          ineligible_reason?: string | null
          metric_captured_at?: string | null
          metric_snapshot_id?: string | null
          platform?: Database["public"]["Enums"]["social_platform"]
          rank?: number | null
          score?: number
          score_run_id?: string
          selected?: boolean
          selection_reason?: string | null
          social_post_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_post_scores_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_metric_snapshot_id_fkey"
            columns: ["metric_snapshot_id"]
            isOneToOne: false
            referencedRelation: "post_metric_snapshots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_metric_snapshot_id_fkey"
            columns: ["metric_snapshot_id"]
            isOneToOne: false
            referencedRelation: "v_social_post_latest_metrics"
            referencedColumns: ["latest_snapshot_id"]
          },
          {
            foreignKeyName: "social_post_scores_metric_snapshot_id_fkey"
            columns: ["metric_snapshot_id"]
            isOneToOne: false
            referencedRelation: "v_social_promotion_candidates"
            referencedColumns: ["latest_snapshot_id"]
          },
          {
            foreignKeyName: "social_post_scores_score_run_id_fkey"
            columns: ["score_run_id"]
            isOneToOne: false
            referencedRelation: "social_score_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_post_latest_metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_promotion_candidates"
            referencedColumns: ["id"]
          },
        ]
      }
      social_posts: {
        Row: {
          account_id: string | null
          caption: string | null
          content_type: string | null
          created_at: string
          generation_metadata: Json
          id: string
          internal_content_id: string | null
          is_promoted: boolean
          last_analytics_synced_at: string | null
          latest_average_watch_time: number | null
          latest_comments: number
          latest_completion_rate: number | null
          latest_followers_gained: number
          latest_impressions: number
          latest_likes: number
          latest_metrics: Json
          latest_metrics_synced_at: string | null
          latest_profile_views: number
          latest_promotion_score: number
          latest_reach: number
          latest_saves: number
          latest_shares: number
          latest_views: number
          media_type: string | null
          organic_metrics_at_selection: Json
          organic_metrics_frozen_at: string | null
          organic_score_at_selection: number | null
          permalink: string | null
          platform: string
          platform_post_id: string | null
          platform_response: Json
          post_url: string | null
          promoted: boolean
          promoted_at: string | null
          promoted_by: string | null
          promotion_eligible: boolean
          promotion_exclusion_reason: string | null
          promotion_notes: string | null
          promotion_risk_level: string | null
          promotion_risk_notes: string | null
          promotion_status: string
          publish_status: Database["public"]["Enums"]["social_publish_status"]
          published_at: string | null
          selected_for_promotion: boolean
          selected_for_promotion_at: string | null
          series_id: string | null
          series_name: string | null
          source: string
          status: string
          thumbnail_url: string | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_id?: string | null
          caption?: string | null
          content_type?: string | null
          created_at?: string
          generation_metadata?: Json
          id?: string
          internal_content_id?: string | null
          is_promoted?: boolean
          last_analytics_synced_at?: string | null
          latest_average_watch_time?: number | null
          latest_comments?: number
          latest_completion_rate?: number | null
          latest_followers_gained?: number
          latest_impressions?: number
          latest_likes?: number
          latest_metrics?: Json
          latest_metrics_synced_at?: string | null
          latest_profile_views?: number
          latest_promotion_score?: number
          latest_reach?: number
          latest_saves?: number
          latest_shares?: number
          latest_views?: number
          media_type?: string | null
          organic_metrics_at_selection?: Json
          organic_metrics_frozen_at?: string | null
          organic_score_at_selection?: number | null
          permalink?: string | null
          platform?: string
          platform_post_id?: string | null
          platform_response?: Json
          post_url?: string | null
          promoted?: boolean
          promoted_at?: string | null
          promoted_by?: string | null
          promotion_eligible?: boolean
          promotion_exclusion_reason?: string | null
          promotion_notes?: string | null
          promotion_risk_level?: string | null
          promotion_risk_notes?: string | null
          promotion_status?: string
          publish_status?: Database["public"]["Enums"]["social_publish_status"]
          published_at?: string | null
          selected_for_promotion?: boolean
          selected_for_promotion_at?: string | null
          series_id?: string | null
          series_name?: string | null
          source?: string
          status?: string
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_id?: string | null
          caption?: string | null
          content_type?: string | null
          created_at?: string
          generation_metadata?: Json
          id?: string
          internal_content_id?: string | null
          is_promoted?: boolean
          last_analytics_synced_at?: string | null
          latest_average_watch_time?: number | null
          latest_comments?: number
          latest_completion_rate?: number | null
          latest_followers_gained?: number
          latest_impressions?: number
          latest_likes?: number
          latest_metrics?: Json
          latest_metrics_synced_at?: string | null
          latest_profile_views?: number
          latest_promotion_score?: number
          latest_reach?: number
          latest_saves?: number
          latest_shares?: number
          latest_views?: number
          media_type?: string | null
          organic_metrics_at_selection?: Json
          organic_metrics_frozen_at?: string | null
          organic_score_at_selection?: number | null
          permalink?: string | null
          platform?: string
          platform_post_id?: string | null
          platform_response?: Json
          post_url?: string | null
          promoted?: boolean
          promoted_at?: string | null
          promoted_by?: string | null
          promotion_eligible?: boolean
          promotion_exclusion_reason?: string | null
          promotion_notes?: string | null
          promotion_risk_level?: string | null
          promotion_risk_notes?: string | null
          promotion_status?: string
          publish_status?: Database["public"]["Enums"]["social_publish_status"]
          published_at?: string | null
          selected_for_promotion?: boolean
          selected_for_promotion_at?: string | null
          series_id?: string | null
          series_name?: string | null
          source?: string
          status?: string
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_posts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_profile_metric_snapshots: {
        Row: {
          account_id: string | null
          captured_at: string
          comments: number | null
          created_at: string
          followers: number | null
          following: number | null
          id: string
          impressions: number | null
          likes: number | null
          metric_source: Database["public"]["Enums"]["social_metric_source"]
          metrics_error: string | null
          platform: Database["public"]["Enums"]["social_platform"]
          profile_username: string
          profile_views: number | null
          raw_metrics: Json
          raw_response: Json
          reach: number | null
          saves: number | null
          shares: number | null
          subscribers: number | null
          total_likes: number | null
          user_id: string | null
          views: number | null
        }
        Insert: {
          account_id?: string | null
          captured_at?: string
          comments?: number | null
          created_at?: string
          followers?: number | null
          following?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          metric_source?: Database["public"]["Enums"]["social_metric_source"]
          metrics_error?: string | null
          platform: Database["public"]["Enums"]["social_platform"]
          profile_username: string
          profile_views?: number | null
          raw_metrics?: Json
          raw_response?: Json
          reach?: number | null
          saves?: number | null
          shares?: number | null
          subscribers?: number | null
          total_likes?: number | null
          user_id?: string | null
          views?: number | null
        }
        Update: {
          account_id?: string | null
          captured_at?: string
          comments?: number | null
          created_at?: string
          followers?: number | null
          following?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          metric_source?: Database["public"]["Enums"]["social_metric_source"]
          metrics_error?: string | null
          platform?: Database["public"]["Enums"]["social_platform"]
          profile_username?: string
          profile_views?: number | null
          raw_metrics?: Json
          raw_response?: Json
          reach?: number | null
          saves?: number | null
          shares?: number | null
          subscribers?: number | null
          total_likes?: number | null
          user_id?: string | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "social_profile_metric_snapshots_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_promotion_actions: {
        Row: {
          account_id: string | null
          budget_amount: number | null
          completed_at: string | null
          created_at: string
          currency: string
          duration_days: number | null
          external_ad_id: string | null
          external_campaign_id: string | null
          id: string
          metrics_after_promotion: Json
          metrics_before_promotion: Json
          notes: string | null
          objective: string | null
          platform: Database["public"]["Enums"]["social_platform"]
          promotion_tool: string
          recommendation_id: string | null
          social_post_id: string
          started_at: string | null
          status: Database["public"]["Enums"]["promotion_action_status"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          account_id?: string | null
          budget_amount?: number | null
          completed_at?: string | null
          created_at?: string
          currency?: string
          duration_days?: number | null
          external_ad_id?: string | null
          external_campaign_id?: string | null
          id?: string
          metrics_after_promotion?: Json
          metrics_before_promotion?: Json
          notes?: string | null
          objective?: string | null
          platform: Database["public"]["Enums"]["social_platform"]
          promotion_tool?: string
          recommendation_id?: string | null
          social_post_id: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["promotion_action_status"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          account_id?: string | null
          budget_amount?: number | null
          completed_at?: string | null
          created_at?: string
          currency?: string
          duration_days?: number | null
          external_ad_id?: string | null
          external_campaign_id?: string | null
          id?: string
          metrics_after_promotion?: Json
          metrics_before_promotion?: Json
          notes?: string | null
          objective?: string | null
          platform?: Database["public"]["Enums"]["social_platform"]
          promotion_tool?: string
          recommendation_id?: string | null
          social_post_id?: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["promotion_action_status"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_promotion_actions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_promotion_actions_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "v_social_weekly_promotion_leaderboard"
            referencedColumns: ["recommendation_id"]
          },
          {
            foreignKeyName: "social_promotion_actions_recommendation_id_fkey"
            columns: ["recommendation_id"]
            isOneToOne: false
            referencedRelation: "weekly_promotion_recommendations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_promotion_actions_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_promotion_actions_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_post_latest_metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_promotion_actions_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_promotion_candidates"
            referencedColumns: ["id"]
          },
        ]
      }
      social_promotion_recommendation_runs: {
        Row: {
          account_id: string | null
          created_at: string
          default_monthly_budget: number | null
          estimated_weekly_budget: number | null
          generated_at: string
          id: string
          max_backups: number
          notes: string | null
          period_end: string
          period_start: string
          platform: Database["public"]["Enums"]["social_platform"] | null
          score_run_id: string | null
          status: string
          top_n_selected: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          account_id?: string | null
          created_at?: string
          default_monthly_budget?: number | null
          estimated_weekly_budget?: number | null
          generated_at?: string
          id?: string
          max_backups?: number
          notes?: string | null
          period_end: string
          period_start: string
          platform?: Database["public"]["Enums"]["social_platform"] | null
          score_run_id?: string | null
          status?: string
          top_n_selected?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          account_id?: string | null
          created_at?: string
          default_monthly_budget?: number | null
          estimated_weekly_budget?: number | null
          generated_at?: string
          id?: string
          max_backups?: number
          notes?: string | null
          period_end?: string
          period_start?: string
          platform?: Database["public"]["Enums"]["social_platform"] | null
          score_run_id?: string | null
          status?: string
          top_n_selected?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_promotion_recommendation_runs_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_promotion_recommendation_runs_score_run_id_fkey"
            columns: ["score_run_id"]
            isOneToOne: false
            referencedRelation: "social_score_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      social_score_runs: {
        Row: {
          account_id: string | null
          created_at: string
          id: string
          min_views_threshold: number
          notes: string | null
          period_end: string
          period_start: string
          platform: Database["public"]["Enums"]["social_platform"] | null
          run_type: string
          scoring_version: string
          status: string
          top_n_default: number
          top_n_max: number
          user_id: string | null
          weights: Json
        }
        Insert: {
          account_id?: string | null
          created_at?: string
          id?: string
          min_views_threshold?: number
          notes?: string | null
          period_end: string
          period_start: string
          platform?: Database["public"]["Enums"]["social_platform"] | null
          run_type?: string
          scoring_version?: string
          status?: string
          top_n_default?: number
          top_n_max?: number
          user_id?: string | null
          weights?: Json
        }
        Update: {
          account_id?: string | null
          created_at?: string
          id?: string
          min_views_threshold?: number
          notes?: string | null
          period_end?: string
          period_start?: string
          platform?: Database["public"]["Enums"]["social_platform"] | null
          run_type?: string
          scoring_version?: string
          status?: string
          top_n_default?: number
          top_n_max?: number
          user_id?: string | null
          weights?: Json
        }
        Relationships: [
          {
            foreignKeyName: "social_score_runs_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      text_series: {
        Row: {
          created_at: string
          id: string
          include_hashtags: boolean
          include_link: boolean
          is_active: boolean
          link_url: string | null
          main_theme: string
          name: string
          platforms: string[]
          post_length: string
          post_time: string
          start_date: string
          timezone: string
          tone: string | null
          updated_at: string
          user_id: string
          weeks_count: number
          writing_notes: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          include_hashtags?: boolean
          include_link?: boolean
          is_active?: boolean
          link_url?: string | null
          main_theme?: string
          name: string
          platforms?: string[]
          post_length?: string
          post_time?: string
          start_date?: string
          timezone?: string
          tone?: string | null
          updated_at?: string
          user_id: string
          weeks_count?: number
          writing_notes?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          include_hashtags?: boolean
          include_link?: boolean
          is_active?: boolean
          link_url?: string | null
          main_theme?: string
          name?: string
          platforms?: string[]
          post_length?: string
          post_time?: string
          start_date?: string
          timezone?: string
          tone?: string | null
          updated_at?: string
          user_id?: string
          weeks_count?: number
          writing_notes?: string | null
        }
        Relationships: []
      }
      text_series_days: {
        Row: {
          created_at: string
          dow: number
          enabled: boolean
          id: string
          notes: string | null
          series_id: string
          theme: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          dow: number
          enabled?: boolean
          id?: string
          notes?: string | null
          series_id: string
          theme?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          dow?: number
          enabled?: boolean
          id?: string
          notes?: string | null
          series_id?: string
          theme?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "text_series_days_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "text_series"
            referencedColumns: ["id"]
          },
        ]
      }
      text_series_subreddits: {
        Row: {
          created_at: string
          id: string
          series_id: string
          sort_order: number
          subreddit_id: string
          tag: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          series_id: string
          sort_order?: number
          subreddit_id: string
          tag: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          series_id?: string
          sort_order?: number
          subreddit_id?: string
          tag?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "text_series_subreddits_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "text_series"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "text_series_subreddits_subreddit_id_fkey"
            columns: ["subreddit_id"]
            isOneToOne: false
            referencedRelation: "reddit_subreddits"
            referencedColumns: ["id"]
          },
        ]
      }
      text_series_weeks: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          series_id: string
          theme: string
          updated_at: string
          user_id: string
          week_index: number
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          series_id: string
          theme?: string
          updated_at?: string
          user_id: string
          week_index: number
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          series_id?: string
          theme?: string
          updated_at?: string
          user_id?: string
          week_index?: number
        }
        Relationships: [
          {
            foreignKeyName: "text_series_weeks_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "text_series"
            referencedColumns: ["id"]
          },
        ]
      }
      upload_post_profiles: {
        Row: {
          connected_platforms: Json
          created_at: string
          last_synced_at: string | null
          provisioning_error: string | null
          provisioning_status: string
          updated_at: string
          user_id: string
          username: string
        }
        Insert: {
          connected_platforms?: Json
          created_at?: string
          last_synced_at?: string | null
          provisioning_error?: string | null
          provisioning_status?: string
          updated_at?: string
          user_id: string
          username: string
        }
        Update: {
          connected_platforms?: Json
          created_at?: string
          last_synced_at?: string | null
          provisioning_error?: string | null
          provisioning_status?: string
          updated_at?: string
          user_id?: string
          username?: string
        }
        Relationships: []
      }
      user_content_instructions: {
        Row: {
          instruction: string
          is_active: boolean
          scope: string
          updated_at: string
          user_id: string
        }
        Insert: {
          instruction: string
          is_active?: boolean
          scope: string
          updated_at?: string
          user_id: string
        }
        Update: {
          instruction?: string
          is_active?: boolean
          scope?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_knowledge_files: {
        Row: {
          created_at: string
          error: string | null
          extracted_text: string | null
          file_name: string
          id: string
          is_active: boolean
          mime_type: string
          size_bytes: number
          status: string
          storage_path: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          extracted_text?: string | null
          file_name: string
          id?: string
          is_active?: boolean
          mime_type: string
          size_bytes?: number
          status?: string
          storage_path: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error?: string | null
          extracted_text?: string | null
          file_name?: string
          id?: string
          is_active?: boolean
          mime_type?: string
          size_bytes?: number
          status?: string
          storage_path?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      video_clip_analyses: {
        Row: {
          analysis_completed_at: string | null
          analysis_started_at: string | null
          created_at: string
          error_message: string | null
          estimated_video_hours_consumed: number
          gemini_model: string
          id: string
          media_id: string | null
          primary_audiences: string[]
          primary_topics: string[]
          status: string
          updated_at: string
          user_id: string
          video_duration_seconds: number | null
          video_summary: string | null
          youtube_thumbnail_url: string | null
          youtube_title: string | null
          youtube_url: string
          youtube_video_id: string
        }
        Insert: {
          analysis_completed_at?: string | null
          analysis_started_at?: string | null
          created_at?: string
          error_message?: string | null
          estimated_video_hours_consumed?: number
          gemini_model?: string
          id?: string
          media_id?: string | null
          primary_audiences?: string[]
          primary_topics?: string[]
          status?: string
          updated_at?: string
          user_id: string
          video_duration_seconds?: number | null
          video_summary?: string | null
          youtube_thumbnail_url?: string | null
          youtube_title?: string | null
          youtube_url: string
          youtube_video_id: string
        }
        Update: {
          analysis_completed_at?: string | null
          analysis_started_at?: string | null
          created_at?: string
          error_message?: string | null
          estimated_video_hours_consumed?: number
          gemini_model?: string
          id?: string
          media_id?: string | null
          primary_audiences?: string[]
          primary_topics?: string[]
          status?: string
          updated_at?: string
          user_id?: string
          video_duration_seconds?: number | null
          video_summary?: string | null
          youtube_thumbnail_url?: string | null
          youtube_title?: string | null
          youtube_url?: string
          youtube_video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_clip_analyses_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "social_content"
            referencedColumns: ["id"]
          },
        ]
      }
      video_clip_candidates: {
        Row: {
          analysis_id: string
          clip_title: string
          clip_type: string
          comment_potential_score: number
          created_at: string
          duration_seconds: number
          emotional_score: number
          end_time_seconds: number
          end_timestamp: string
          hook_score: number
          id: string
          media_id: string | null
          mission_alignment_score: number
          opening_words: string
          optional_editorial_hook: string | null
          overall_score: number
          platform_priority: string[]
          primary_audience: string
          reason_selected: string
          shareability_score: number
          specificity_score: number
          standalone_score: number
          start_time_seconds: number
          start_timestamp: string
          status: string
          suggested_short_title: string
          suggested_social_caption: string
          transcript_excerpt: string
          updated_at: string
        }
        Insert: {
          analysis_id: string
          clip_title: string
          clip_type: string
          comment_potential_score: number
          created_at?: string
          duration_seconds: number
          emotional_score: number
          end_time_seconds: number
          end_timestamp: string
          hook_score: number
          id?: string
          media_id?: string | null
          mission_alignment_score: number
          opening_words: string
          optional_editorial_hook?: string | null
          overall_score: number
          platform_priority?: string[]
          primary_audience: string
          reason_selected: string
          shareability_score: number
          specificity_score: number
          standalone_score: number
          start_time_seconds: number
          start_timestamp: string
          status?: string
          suggested_short_title: string
          suggested_social_caption: string
          transcript_excerpt: string
          updated_at?: string
        }
        Update: {
          analysis_id?: string
          clip_title?: string
          clip_type?: string
          comment_potential_score?: number
          created_at?: string
          duration_seconds?: number
          emotional_score?: number
          end_time_seconds?: number
          end_timestamp?: string
          hook_score?: number
          id?: string
          media_id?: string | null
          mission_alignment_score?: number
          opening_words?: string
          optional_editorial_hook?: string | null
          overall_score?: number
          platform_priority?: string[]
          primary_audience?: string
          reason_selected?: string
          shareability_score?: number
          specificity_score?: number
          standalone_score?: number
          start_time_seconds?: number
          start_timestamp?: string
          status?: string
          suggested_short_title?: string
          suggested_social_caption?: string
          transcript_excerpt?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_clip_candidates_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "video_clip_analyses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_clip_candidates_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "social_content"
            referencedColumns: ["id"]
          },
        ]
      }
      video_clip_usage: {
        Row: {
          analysis_completed_at: string | null
          analysis_id: string | null
          analysis_started_at: string | null
          analysis_status: string
          created_at: string
          error_message: string | null
          estimated_video_hours_consumed: number
          gemini_model: string
          id: string
          updated_at: string
          usage_date: string
          user_id: string
          video_duration_seconds: number | null
          video_id: string | null
          youtube_video_id: string
        }
        Insert: {
          analysis_completed_at?: string | null
          analysis_id?: string | null
          analysis_started_at?: string | null
          analysis_status?: string
          created_at?: string
          error_message?: string | null
          estimated_video_hours_consumed?: number
          gemini_model?: string
          id?: string
          updated_at?: string
          usage_date?: string
          user_id: string
          video_duration_seconds?: number | null
          video_id?: string | null
          youtube_video_id: string
        }
        Update: {
          analysis_completed_at?: string | null
          analysis_id?: string | null
          analysis_started_at?: string | null
          analysis_status?: string
          created_at?: string
          error_message?: string | null
          estimated_video_hours_consumed?: number
          gemini_model?: string
          id?: string
          updated_at?: string
          usage_date?: string
          user_id?: string
          video_duration_seconds?: number | null
          video_id?: string | null
          youtube_video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_clip_usage_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: true
            referencedRelation: "video_clip_analyses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_clip_usage_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "social_content"
            referencedColumns: ["id"]
          },
        ]
      }
      video_series: {
        Row: {
          created_at: string
          heygen_additional_look_ids: string[]
          heygen_aspect_ratio: string | null
          heygen_avatar_group_id: string | null
          heygen_avatar_group_mode: string | null
          heygen_avatar_look_id: string | null
          heygen_avatar_style: string | null
          heygen_background_asset_url: string | null
          heygen_background_color: string | null
          heygen_background_type: string | null
          heygen_caption_style: Json | null
          heygen_captions_enabled: boolean | null
          heygen_dimension_height: number | null
          heygen_dimension_width: number | null
          heygen_video_model: string | null
          heygen_voice_emotion: string | null
          heygen_voice_id: string | null
          heygen_voice_pitch: number | null
          heygen_voice_speed: number | null
          id: string
          is_active: boolean
          main_theme: string
          name: string
          platforms: string[]
          post_time: string
          script_length: string
          script_notes: string | null
          start_date: string
          timezone: string
          updated_at: string
          use_default_heygen_settings: boolean
          user_id: string
          weeks_count: number
        }
        Insert: {
          created_at?: string
          heygen_additional_look_ids?: string[]
          heygen_aspect_ratio?: string | null
          heygen_avatar_group_id?: string | null
          heygen_avatar_group_mode?: string | null
          heygen_avatar_look_id?: string | null
          heygen_avatar_style?: string | null
          heygen_background_asset_url?: string | null
          heygen_background_color?: string | null
          heygen_background_type?: string | null
          heygen_caption_style?: Json | null
          heygen_captions_enabled?: boolean | null
          heygen_dimension_height?: number | null
          heygen_dimension_width?: number | null
          heygen_video_model?: string | null
          heygen_voice_emotion?: string | null
          heygen_voice_id?: string | null
          heygen_voice_pitch?: number | null
          heygen_voice_speed?: number | null
          id?: string
          is_active?: boolean
          main_theme?: string
          name: string
          platforms?: string[]
          post_time?: string
          script_length?: string
          script_notes?: string | null
          start_date?: string
          timezone?: string
          updated_at?: string
          use_default_heygen_settings?: boolean
          user_id: string
          weeks_count?: number
        }
        Update: {
          created_at?: string
          heygen_additional_look_ids?: string[]
          heygen_aspect_ratio?: string | null
          heygen_avatar_group_id?: string | null
          heygen_avatar_group_mode?: string | null
          heygen_avatar_look_id?: string | null
          heygen_avatar_style?: string | null
          heygen_background_asset_url?: string | null
          heygen_background_color?: string | null
          heygen_background_type?: string | null
          heygen_caption_style?: Json | null
          heygen_captions_enabled?: boolean | null
          heygen_dimension_height?: number | null
          heygen_dimension_width?: number | null
          heygen_video_model?: string | null
          heygen_voice_emotion?: string | null
          heygen_voice_id?: string | null
          heygen_voice_pitch?: number | null
          heygen_voice_speed?: number | null
          id?: string
          is_active?: boolean
          main_theme?: string
          name?: string
          platforms?: string[]
          post_time?: string
          script_length?: string
          script_notes?: string | null
          start_date?: string
          timezone?: string
          updated_at?: string
          use_default_heygen_settings?: boolean
          user_id?: string
          weeks_count?: number
        }
        Relationships: []
      }
      video_series_days: {
        Row: {
          created_at: string
          dow: number
          enabled: boolean
          id: string
          notes: string | null
          series_id: string
          theme: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          dow: number
          enabled?: boolean
          id?: string
          notes?: string | null
          series_id: string
          theme?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          dow?: number
          enabled?: boolean
          id?: string
          notes?: string | null
          series_id?: string
          theme?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_series_days_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "video_series"
            referencedColumns: ["id"]
          },
        ]
      }
      video_series_weeks: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          series_id: string
          theme: string
          updated_at: string
          user_id: string
          week_index: number
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          series_id: string
          theme?: string
          updated_at?: string
          user_id: string
          week_index: number
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          series_id?: string
          theme?: string
          updated_at?: string
          user_id?: string
          week_index?: number
        }
        Relationships: [
          {
            foreignKeyName: "video_series_weeks_series_id_fkey"
            columns: ["series_id"]
            isOneToOne: false
            referencedRelation: "video_series"
            referencedColumns: ["id"]
          },
        ]
      }
      weekly_promotion_recommendations: {
        Row: {
          account_id: string | null
          approved_at: string | null
          created_at: string
          explanation: string | null
          id: string
          manual_notes: string | null
          metrics_at_recommendation: Json
          notes: string | null
          organic_comments_at_selection: number
          organic_likes_at_selection: number
          organic_profile_views_at_selection: number
          organic_saves_at_selection: number
          organic_score_at_selection: number
          organic_shares_at_selection: number
          organic_views_at_selection: number
          platform: Database["public"]["Enums"]["social_platform"] | null
          promoted_at: string | null
          promoted_by: string | null
          rank: number
          reason: string | null
          recommendation_run_id: string | null
          recommendation_tier: string
          recommendation_type: string
          recommended_budget: number | null
          recommended_duration_days: number | null
          recommended_objective: string | null
          score_id: string | null
          selected_at: string
          skipped_at: string | null
          social_post_id: string
          status: string
          updated_at: string
          user_id: string
          week_end_date: string
          week_start_date: string
        }
        Insert: {
          account_id?: string | null
          approved_at?: string | null
          created_at?: string
          explanation?: string | null
          id?: string
          manual_notes?: string | null
          metrics_at_recommendation?: Json
          notes?: string | null
          organic_comments_at_selection?: number
          organic_likes_at_selection?: number
          organic_profile_views_at_selection?: number
          organic_saves_at_selection?: number
          organic_score_at_selection?: number
          organic_shares_at_selection?: number
          organic_views_at_selection?: number
          platform?: Database["public"]["Enums"]["social_platform"] | null
          promoted_at?: string | null
          promoted_by?: string | null
          rank: number
          reason?: string | null
          recommendation_run_id?: string | null
          recommendation_tier?: string
          recommendation_type?: string
          recommended_budget?: number | null
          recommended_duration_days?: number | null
          recommended_objective?: string | null
          score_id?: string | null
          selected_at?: string
          skipped_at?: string | null
          social_post_id: string
          status?: string
          updated_at?: string
          user_id: string
          week_end_date: string
          week_start_date: string
        }
        Update: {
          account_id?: string | null
          approved_at?: string | null
          created_at?: string
          explanation?: string | null
          id?: string
          manual_notes?: string | null
          metrics_at_recommendation?: Json
          notes?: string | null
          organic_comments_at_selection?: number
          organic_likes_at_selection?: number
          organic_profile_views_at_selection?: number
          organic_saves_at_selection?: number
          organic_score_at_selection?: number
          organic_shares_at_selection?: number
          organic_views_at_selection?: number
          platform?: Database["public"]["Enums"]["social_platform"] | null
          promoted_at?: string | null
          promoted_by?: string | null
          rank?: number
          reason?: string | null
          recommendation_run_id?: string | null
          recommendation_tier?: string
          recommendation_type?: string
          recommended_budget?: number | null
          recommended_duration_days?: number | null
          recommended_objective?: string | null
          score_id?: string | null
          selected_at?: string
          skipped_at?: string | null
          social_post_id?: string
          status?: string
          updated_at?: string
          user_id?: string
          week_end_date?: string
          week_start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekly_promotion_recommendations_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekly_promotion_recommendations_recommendation_run_id_fkey"
            columns: ["recommendation_run_id"]
            isOneToOne: false
            referencedRelation: "social_promotion_recommendation_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekly_promotion_recommendations_score_id_fkey"
            columns: ["score_id"]
            isOneToOne: false
            referencedRelation: "social_post_scores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekly_promotion_recommendations_score_id_fkey"
            columns: ["score_id"]
            isOneToOne: false
            referencedRelation: "v_social_weekly_promotion_leaderboard"
            referencedColumns: ["score_id"]
          },
          {
            foreignKeyName: "weekly_promotion_recommendations_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekly_promotion_recommendations_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_post_latest_metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekly_promotion_recommendations_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_promotion_candidates"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_connections: {
        Row: {
          channel_id: string
          channel_title: string
          connected_at: string
          id: string
          revoked_at: string | null
          scopes: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          channel_id: string
          channel_title: string
          connected_at?: string
          id?: string
          revoked_at?: string | null
          scopes?: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          channel_id?: string
          channel_title?: string
          connected_at?: string
          id?: string
          revoked_at?: string | null
          scopes?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      youtube_credentials: {
        Row: {
          connection_id: string
          refresh_token_ciphertext: string
          refresh_token_iv: string
          token_version: number
          updated_at: string
        }
        Insert: {
          connection_id: string
          refresh_token_ciphertext: string
          refresh_token_iv: string
          token_version?: number
          updated_at?: string
        }
        Update: {
          connection_id?: string
          refresh_token_ciphertext?: string
          refresh_token_iv?: string
          token_version?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "youtube_credentials_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: true
            referencedRelation: "youtube_connections"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_oauth_states: {
        Row: {
          code_verifier: string
          created_at: string
          expires_at: string
          return_path: string
          state_hash: string
          user_id: string
        }
        Insert: {
          code_verifier: string
          created_at?: string
          expires_at: string
          return_path?: string
          state_hash: string
          user_id: string
        }
        Update: {
          code_verifier?: string
          created_at?: string
          expires_at?: string
          return_path?: string
          state_hash?: string
          user_id?: string
        }
        Relationships: []
      }
      youtube_publication_jobs: {
        Row: {
          attempt_count: number
          completed_at: string | null
          content_id: string
          created_at: string
          id: string
          last_error: string | null
          locked_at: string | null
          locked_by: string | null
          next_attempt_at: string | null
          scheduled_at: string
          status: string
          updated_at: string
          user_id: string
          youtube_video_id: string | null
        }
        Insert: {
          attempt_count?: number
          completed_at?: string | null
          content_id: string
          created_at?: string
          id?: string
          last_error?: string | null
          locked_at?: string | null
          locked_by?: string | null
          next_attempt_at?: string | null
          scheduled_at: string
          status?: string
          updated_at?: string
          user_id: string
          youtube_video_id?: string | null
        }
        Update: {
          attempt_count?: number
          completed_at?: string | null
          content_id?: string
          created_at?: string
          id?: string
          last_error?: string | null
          locked_at?: string | null
          locked_by?: string | null
          next_attempt_at?: string | null
          scheduled_at?: string
          status?: string
          updated_at?: string
          user_id?: string
          youtube_video_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "youtube_publication_jobs_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: true
            referencedRelation: "social_content"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      reddit_connections_public: {
        Row: {
          connected_at: string | null
          default_subreddit: string | null
          reddit_username: string | null
          scopes: string[] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          connected_at?: string | null
          default_subreddit?: string | null
          reddit_username?: string | null
          scopes?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          connected_at?: string | null
          default_subreddit?: string | null
          reddit_username?: string | null
          scopes?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      v_social_post_latest_metrics: {
        Row: {
          account_id: string | null
          caption: string | null
          content_type: string | null
          created_at: string | null
          generation_metadata: Json | null
          id: string | null
          internal_content_id: string | null
          is_promoted: boolean | null
          last_analytics_synced_at: string | null
          latest_average_watch_time: number | null
          latest_captured_at: string | null
          latest_comments: number | null
          latest_completion_rate: number | null
          latest_followers_gained: number | null
          latest_impressions: number | null
          latest_likes: number | null
          latest_metrics: Json | null
          latest_metrics_synced_at: string | null
          latest_profile_views: number | null
          latest_promotion_score: number | null
          latest_reach: number | null
          latest_saves: number | null
          latest_shares: number | null
          latest_snapshot_id: string | null
          latest_views: number | null
          media_type: string | null
          organic_metrics_at_selection: Json | null
          organic_metrics_frozen_at: string | null
          organic_score_at_selection: number | null
          permalink: string | null
          platform: string | null
          platform_post_id: string | null
          platform_response: Json | null
          post_url: string | null
          promoted: boolean | null
          promoted_at: string | null
          promoted_by: string | null
          promotion_eligible: boolean | null
          promotion_exclusion_reason: string | null
          promotion_notes: string | null
          promotion_risk_level: string | null
          promotion_risk_notes: string | null
          promotion_status: string | null
          publish_status:
            | Database["public"]["Enums"]["social_publish_status"]
            | null
          published_at: string | null
          selected_for_promotion: boolean | null
          selected_for_promotion_at: string | null
          series_id: string | null
          series_name: string | null
          snapshot_comment_rate: number | null
          snapshot_comments: number | null
          snapshot_effective_views: number | null
          snapshot_engagement_rate: number | null
          snapshot_favorites: number | null
          snapshot_impressions: number | null
          snapshot_like_rate: number | null
          snapshot_likes: number | null
          snapshot_profile_view_rate: number | null
          snapshot_profile_views: number | null
          snapshot_raw_metrics: Json | null
          snapshot_reach: number | null
          snapshot_save_rate: number | null
          snapshot_saves: number | null
          snapshot_share_rate: number | null
          snapshot_shares: number | null
          snapshot_views: number | null
          source: string | null
          status: string | null
          thumbnail_url: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_posts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      v_social_promotion_candidates: {
        Row: {
          account_id: string | null
          caption: string | null
          content_type: string | null
          created_at: string | null
          generation_metadata: Json | null
          id: string | null
          internal_content_id: string | null
          is_promoted: boolean | null
          last_analytics_synced_at: string | null
          latest_average_watch_time: number | null
          latest_captured_at: string | null
          latest_comments: number | null
          latest_completion_rate: number | null
          latest_followers_gained: number | null
          latest_impressions: number | null
          latest_likes: number | null
          latest_metrics: Json | null
          latest_metrics_synced_at: string | null
          latest_profile_views: number | null
          latest_promotion_score: number | null
          latest_reach: number | null
          latest_saves: number | null
          latest_shares: number | null
          latest_snapshot_id: string | null
          latest_views: number | null
          media_type: string | null
          organic_metrics_at_selection: Json | null
          organic_metrics_frozen_at: string | null
          organic_score_at_selection: number | null
          permalink: string | null
          platform: string | null
          platform_post_id: string | null
          platform_response: Json | null
          post_url: string | null
          promoted: boolean | null
          promoted_at: string | null
          promoted_by: string | null
          promotion_eligible: boolean | null
          promotion_exclusion_reason: string | null
          promotion_notes: string | null
          promotion_risk_level: string | null
          promotion_risk_notes: string | null
          promotion_status: string | null
          publish_status:
            | Database["public"]["Enums"]["social_publish_status"]
            | null
          published_at: string | null
          selected_for_promotion: boolean | null
          selected_for_promotion_at: string | null
          series_id: string | null
          series_name: string | null
          snapshot_comment_rate: number | null
          snapshot_comments: number | null
          snapshot_effective_views: number | null
          snapshot_engagement_rate: number | null
          snapshot_favorites: number | null
          snapshot_impressions: number | null
          snapshot_like_rate: number | null
          snapshot_likes: number | null
          snapshot_profile_view_rate: number | null
          snapshot_profile_views: number | null
          snapshot_raw_metrics: Json | null
          snapshot_reach: number | null
          snapshot_save_rate: number | null
          snapshot_saves: number | null
          snapshot_share_rate: number | null
          snapshot_shares: number | null
          snapshot_views: number | null
          source: string | null
          status: string | null
          thumbnail_url: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_posts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      v_social_weekly_promotion_leaderboard: {
        Row: {
          account_id: string | null
          caption: string | null
          eligible: boolean | null
          ineligible_reason: string | null
          period_end: string | null
          period_start: string | null
          permalink: string | null
          platform: Database["public"]["Enums"]["social_platform"] | null
          post_url: string | null
          published_at: string | null
          rank: number | null
          recommendation_id: string | null
          recommendation_status: string | null
          recommendation_tier: string | null
          run_account_id: string | null
          run_platform: Database["public"]["Enums"]["social_platform"] | null
          run_user_id: string | null
          score: number | null
          score_id: string | null
          score_run_id: string | null
          selected: boolean | null
          selection_reason: string | null
          social_post_id: string | null
          thumbnail_url: string | null
          title: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_post_scores_score_run_id_fkey"
            columns: ["score_run_id"]
            isOneToOne: false
            referencedRelation: "social_score_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_post_latest_metrics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_post_scores_social_post_id_fkey"
            columns: ["social_post_id"]
            isOneToOne: false
            referencedRelation: "v_social_promotion_candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_posts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_score_runs_account_id_fkey"
            columns: ["run_account_id"]
            isOneToOne: false
            referencedRelation: "social_platform_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      calculate_social_promotion_score: {
        Args: {
          comments: number
          effective_views: number
          likes: number
          min_views?: number
          profile_views: number
          saves: number
          shares: number
          subscriber_gain: number
          weights: Json
        }
        Returns: Json
      }
      claim_pending_generations: {
        Args: {
          _limit?: number
          _lock_minutes?: number
          _max_attempts?: number
        }
        Returns: {
          brand_name: string | null
          caption: string | null
          content_date: string | null
          content_type: string
          created_at: string
          error: string | null
          facebook_desc: string | null
          generation_attempts: number
          generation_locked_until: string | null
          generation_metadata: Json
          generation_model: string | null
          generation_payload: Json | null
          generation_prompt: string | null
          generation_status: string
          generation_step: string | null
          generation_step_attempts: number
          heygen_error: string | null
          heygen_status: string | null
          heygen_video_id: string | null
          hook: string | null
          id: string
          ig_tiktok_desc: string | null
          image: string | null
          image_series_dow: number | null
          image_series_id: string | null
          image_series_week_index: number | null
          image_storage_paths: string[]
          image_urls: string[]
          linkedin_desc: string | null
          parent_content_id: string | null
          persona_name: string | null
          planned_date: string | null
          playlist_id: number | null
          post_length: Database["public"]["Enums"]["video_length"] | null
          post_title: string | null
          posted_at: string | null
          reddit_extra_results: Json
          reddit_overrides: Json | null
          reddit_routing: Json | null
          reddit_subreddit: string | null
          reddit_subreddit_id: string | null
          reddit_target_subreddits: string[] | null
          scheduled_at: string | null
          scheduled_platforms: string[] | null
          script: string | null
          series_name: string | null
          status: Database["public"]["Enums"]["post_status"]
          text_series_dow: number | null
          text_series_id: string | null
          text_series_week_index: number | null
          tiktok_overrides: Json | null
          topic: string | null
          updated_at: string
          user_id: string
          video_mime_type: string | null
          video_original_filename: string | null
          video_series_dow: number | null
          video_series_id: string | null
          video_series_week_index: number | null
          video_size_bytes: number | null
          video_storage_path: string | null
          video_url: string | null
          youtube_desc: string | null
          youtube_error_detail: string | null
          youtube_overrides: Json | null
          youtube_status: string | null
          youtube_upload_session_uri: string | null
          youtube_uploaded_at: string | null
          youtube_video_id: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "social_content"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      claim_youtube_publication_jobs: {
        Args: {
          _batch?: number
          _stale_after_minutes?: number
          _worker_id: string
        }
        Returns: {
          attempt_count: number
          completed_at: string | null
          content_id: string
          created_at: string
          id: string
          last_error: string | null
          locked_at: string | null
          locked_by: string | null
          next_attempt_at: string | null
          scheduled_at: string
          status: string
          updated_at: string
          user_id: string
          youtube_video_id: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "youtube_publication_jobs"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      complete_youtube_publication_job: {
        Args: { _job_id: string; _worker_id: string; _youtube_video_id: string }
        Returns: boolean
      }
      fail_youtube_publication_job: {
        Args: {
          _error: string
          _job_id: string
          _terminal?: boolean
          _worker_id: string
        }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      mark_generation_step_failed: {
        Args: { _error: string; _id: string; _max_attempts?: number }
        Returns: undefined
      }
    }
    Enums: {
      analytics_sync_status:
        | "pending"
        | "running"
        | "completed"
        | "partial_failure"
        | "failed"
      app_role: "admin" | "user" | "influencer"
      post_status:
        | "incomplete"
        | "unscheduled"
        | "scheduled"
        | "posted"
        | "scripted"
        | "posting"
        | "post_failed"
      promotion_action_status:
        | "planned"
        | "active"
        | "completed"
        | "cancelled"
        | "failed"
        | "unknown"
      promotion_recommendation_status:
        | "pending"
        | "approved"
        | "skipped"
        | "promoted"
        | "rejected"
        | "expired"
      social_content_type:
        | "video"
        | "photo"
        | "carousel"
        | "text"
        | "document"
        | "mixed"
        | "unknown"
      social_metric_source:
        | "upload_post_api"
        | "platform_api"
        | "manual"
        | "computed"
        | "imported"
        | "unknown"
      social_platform:
        | "tiktok"
        | "youtube"
        | "instagram"
        | "facebook"
        | "linkedin"
        | "x"
        | "threads"
        | "pinterest"
        | "reddit"
        | "bluesky"
        | "discord"
        | "telegram"
        | "other"
      social_publish_status:
        | "draft"
        | "queued"
        | "scheduled"
        | "publishing"
        | "published"
        | "partially_published"
        | "failed"
        | "cancelled"
        | "unknown"
      video_length: "Short" | "Long" | "Both"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      analytics_sync_status: [
        "pending",
        "running",
        "completed",
        "partial_failure",
        "failed",
      ],
      app_role: ["admin", "user", "influencer"],
      post_status: [
        "incomplete",
        "unscheduled",
        "scheduled",
        "posted",
        "scripted",
        "posting",
        "post_failed",
      ],
      promotion_action_status: [
        "planned",
        "active",
        "completed",
        "cancelled",
        "failed",
        "unknown",
      ],
      promotion_recommendation_status: [
        "pending",
        "approved",
        "skipped",
        "promoted",
        "rejected",
        "expired",
      ],
      social_content_type: [
        "video",
        "photo",
        "carousel",
        "text",
        "document",
        "mixed",
        "unknown",
      ],
      social_metric_source: [
        "upload_post_api",
        "platform_api",
        "manual",
        "computed",
        "imported",
        "unknown",
      ],
      social_platform: [
        "tiktok",
        "youtube",
        "instagram",
        "facebook",
        "linkedin",
        "x",
        "threads",
        "pinterest",
        "reddit",
        "bluesky",
        "discord",
        "telegram",
        "other",
      ],
      social_publish_status: [
        "draft",
        "queued",
        "scheduled",
        "publishing",
        "published",
        "partially_published",
        "failed",
        "cancelled",
        "unknown",
      ],
      video_length: ["Short", "Long", "Both"],
    },
  },
} as const
