import { supabase } from './supabase'
import { v4 as uuidv4 } from 'uuid'

export interface Collection {
  id: string
  title: string
  description: string
  image_url: string
  category: string
  subcategory?: string | null
  is_featured: boolean
  display_order: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface CreateCollectionData {
  title: string
  description: string
  image_url: string
  category: string
  subcategory?: string | null
  is_featured?: boolean
  display_order?: number
}

export const collectionsService = {
  // Get all collections
  async getAll(): Promise<{ data: Collection[] | null; error: any }> {
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true })

    return { data, error }
  },

  // Get collections by category
  async getByCategory(category: string): Promise<{ data: Collection[] | null; error: any }> {
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('display_order', { ascending: true })

    return { data, error }
  },

  // Get featured collections for homepage
  async getFeatured(): Promise<{ data: Collection[] | null; error: any }> {
    const { data, error } = await supabase
      .from('collections')
      .select('*')
      .eq('is_featured', true)
      .eq('is_active', true)
      .order('display_order', { ascending: true })
      .limit(8)

    return { data, error }
  },

  // Create new collection
  async create(collectionData: CreateCollectionData): Promise<{ data: Collection | null; error: any }> {
    const { data, error } = await supabase
      .from('collections')
      .insert([{
        id: uuidv4(),
        ...collectionData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }])
      .select()
      .single()

    return { data, error }
  },

  // Update collection
  async update(id: string, updates: Partial<Collection>): Promise<{ data: Collection | null; error: any }> {
    const { data, error } = await supabase
      .from('collections')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single()

    return { data, error }
  },

  // Delete collection (soft delete)
  async delete(id: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('collections')
      .update({
        is_active: false,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)

    return { error }
  },

  // Hard delete collection
  async hardDelete(id: string): Promise<{ error: any }> {
    const { error } = await supabase
      .from('collections')
      .delete()
      .eq('id', id)

    return { error }
  },

  // Upload image to Supabase Storage
  async uploadImage(file: File, folder: string = 'collections'): Promise<{ data: string | null; error: any }> {
    const fileExt = file.name.split('.').pop()
    const fileName = `${uuidv4()}.${fileExt}`
    const filePath = `${folder}/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file)

    if (uploadError) {
      return { data: null, error: uploadError }
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath)

    return { data: publicUrl, error: null }
  },

  // Delete image from Supabase Storage
  async deleteImage(imageUrl: string): Promise<{ error: any }> {
    // Extract file path from URL
    const urlParts = imageUrl.split('/images/')
    if (urlParts.length < 2) {
      return { error: new Error('Invalid image URL') }
    }
    
    const filePath = urlParts[1]

    const { error } = await supabase.storage
      .from('images')
      .remove([filePath])

    return { error }
  }
}

// Categories configuration
export const CATEGORIES = {
  'sarees': {
    label: 'Sarees',
    subcategories: ['Silk Sarees', 'Wedding Sarees', 'Bridal Sarees', 'Designer Sarees', 'Cotton Sarees', 'Printed Sarees']
  },
  'occasion': {
    label: 'Everyday & Occasion',
    subcategories: ['Dress Materials', 'Festival Collection']
  },
  'family': {
    label: 'The Family',
    subcategories: ['Women\'s Collection', 'Men\'s Collection', 'Kids Wear', 'Accessories']
  }
} as const

export type CategoryKey = keyof typeof CATEGORIES