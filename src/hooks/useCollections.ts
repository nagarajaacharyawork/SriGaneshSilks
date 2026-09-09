import { useState, useEffect } from 'react'
import { collectionsService, Collection } from '@/lib/collections'

export function useCollections() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadCollections()
  }, [])

  const loadCollections = async () => {
    try {
      const { data, error } = await collectionsService.getAll()
      if (error) {
        setError(error.message)
      } else {
        setCollections(data || [])
      }
    } catch (err) {
      setError('Failed to load collections')
    } finally {
      setLoading(false)
    }
  }

  return { collections, loading, error, refetch: loadCollections }
}

export function useFeaturedCollections() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadFeatured()
  }, [])

  const loadFeatured = async () => {
    try {
      const { data, error } = await collectionsService.getFeatured()
      if (error) {
        setError(error.message)
      } else {
        setCollections(data || [])
      }
    } catch (err) {
      setError('Failed to load featured collections')
    } finally {
      setLoading(false)
    }
  }

  return { collections, loading, error, refetch: loadFeatured }
}

export function useCollectionsByCategory(category: string) {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (category) {
      loadByCategory()
    }
  }, [category])

  const loadByCategory = async () => {
    try {
      const { data, error } = await collectionsService.getByCategory(category)
      if (error) {
        setError(error.message)
      } else {
        setCollections(data || [])
      }
    } catch (err) {
      setError('Failed to load collections')
    } finally {
      setLoading(false)
    }
  }

  return { collections, loading, error, refetch: loadByCategory }
}