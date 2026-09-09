import { createClient } from '@supabase/supabase-js'

// Get configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-ref.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
})

export type Database = {
  public: {
    Tables: {
      collections: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          category: string
          subcategory: string | null
          is_featured: boolean
          display_order: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          category: string
          subcategory?: string | null
          is_featured?: boolean
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          category?: string
          subcategory?: string | null
          is_featured?: boolean
          display_order?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      admin_users: {
        Row: {
          id: string
          email: string
          name: string
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}