import { Link } from '@tanstack/react-router'
import { Reveal } from '@/components/site/Reveal'
import { useFeaturedCollections, useCollectionsByCategory } from '@/hooks/useCollections'
import { Collection } from '@/lib/collections'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Image as ImageIcon } from 'lucide-react'

interface DynamicCollectionsProps {
  category?: string
  featured?: boolean
  limit?: number
  className?: string
}

export function DynamicCollections({ 
  category, 
  featured = false, 
  limit,
  className = ""
}: DynamicCollectionsProps) {
  const { collections: featuredCollections, loading: featuredLoading } = useFeaturedCollections()
  const { collections: categoryCollections, loading: categoryLoading } = useCollectionsByCategory(category || '')
  
  const collections = featured ? featuredCollections : categoryCollections
  const loading = featured ? featuredLoading : categoryLoading

  // Apply limit if specified
  const displayCollections = limit ? collections.slice(0, limit) : collections

  if (loading) {
    return (
      <div className={`grid gap-4 md:gap-6 ${className}`}>
        {Array.from({ length: limit || 8 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-square bg-muted rounded-lg mb-3"></div>
            <div className="h-4 bg-muted rounded mb-2"></div>
            <div className="h-3 bg-muted rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  if (collections.length === 0) {
    return (
      <div className="text-center py-12">
        <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">No Collections Yet</h3>
        <p className="text-muted-foreground">
          {featured ? 'No featured collections available' : 'No collections found for this category'}
        </p>
      </div>
    )
  }

  return (
    <div className={`grid gap-4 md:gap-6 ${className}`}>
      {displayCollections.map((collection, i) => (
        <CollectionCard key={collection.id} collection={collection} index={i} />
      ))}
    </div>
  )
}

interface CollectionCardProps {
  collection: Collection
  index: number
}

function CollectionCard({ collection, index }: CollectionCardProps) {
  // Map categories to routes - you can customize this based on your routing structure
  const getCollectionRoute = (category: string, subcategory?: string | null) => {
    switch (category) {
      case 'sarees':
        if (subcategory?.includes('Wedding') || subcategory?.includes('Bridal')) {
          return '/wedding'
        }
        return '/women'
      case 'family':
        if (subcategory?.includes('Men')) return '/men'
        if (subcategory?.includes('Kids')) return '/kids'
        return '/women'
      case 'occasion':
        return '/festival'
      default:
        return '/collections'
    }
  }

  const route = getCollectionRoute(collection.category, collection.subcategory)

  return (
    <Reveal delay={(index % 4) * 80}>
      <Link to={route} className="group zoom-media relative block">
        <Card className="overflow-hidden border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={collection.image_url}
              alt={collection.title}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Featured badge */}
            {collection.is_featured && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-gold text-burgundy-deep font-medium">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Featured
                </Badge>
              </div>
            )}

            {/* Title overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display text-xl text-ivory md:text-2xl font-medium mb-1">
                {collection.title}
              </h3>
              <p className="text-ivory/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {collection.description}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    </Reveal>
  )
}

// Specialized components for different sections
export function FeaturedCollections({ limit = 8, className = "grid-cols-2 md:grid-cols-4" }) {
  return <DynamicCollections featured={true} limit={limit} className={className} />
}

export function CategoryCollections({ category, limit, className = "grid-cols-2 lg:grid-cols-4" }: { 
  category: string
  limit?: number 
  className?: string 
}) {
  return <DynamicCollections category={category} limit={limit} className={className} />
}