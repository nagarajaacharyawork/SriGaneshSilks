import { useState, useEffect } from 'react'
import { collectionsService, Collection } from '@/lib/collections'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ImageIcon, 
  Star, 
  Eye,
  TrendingUp,
  Calendar,
  Users
} from 'lucide-react'

interface DashboardStats {
  totalCollections: number
  featuredCollections: number
  activeCollections: number
  recentlyAdded: number
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCollections: 0,
    featuredCollections: 0,
    activeCollections: 0,
    recentlyAdded: 0
  })
  const [recentCollections, setRecentCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    setLoading(true)
    try {
      const { data: allCollections } = await collectionsService.getAll()
      
      if (allCollections) {
        // Calculate stats
        const totalCollections = allCollections.length
        const featuredCollections = allCollections.filter(c => c.is_featured).length
        const activeCollections = allCollections.filter(c => c.is_active).length
        
        // Get collections added in last 7 days
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        const recentlyAdded = allCollections.filter(c => 
          new Date(c.created_at) > weekAgo
        ).length

        setStats({
          totalCollections,
          featuredCollections,
          activeCollections,
          recentlyAdded
        })

        // Get 5 most recent collections
        const recent = allCollections
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 5)
        
        setRecentCollections(recent)
      }
    } catch (err) {
      console.error('Failed to load dashboard data:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-burgundy mx-auto mb-2"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-burgundy mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to Sri Ganesh Silks Admin Panel. Manage your collections and monitor your website.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collections</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-burgundy">{stats.totalCollections}</div>
            <p className="text-xs text-muted-foreground">
              All collections in database
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Collections</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.activeCollections}</div>
            <p className="text-xs text-muted-foreground">
              Currently visible on website
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Featured Collections</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.featuredCollections}</div>
            <p className="text-xs text-muted-foreground">
              Shown on homepage
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recently Added</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.recentlyAdded}</div>
            <p className="text-xs text-muted-foreground">
              Added in last 7 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Collections */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Collections
          </CardTitle>
          <CardDescription>
            Your most recently added collections
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recentCollections.length > 0 ? (
            <div className="space-y-4">
              {recentCollections.map((collection) => (
                <div key={collection.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {collection.image_url ? (
                      <img
                        src={collection.image_url}
                        alt={collection.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <ImageIcon className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-medium flex items-center gap-2">
                        {collection.title}
                        {collection.is_featured && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {collection.category} • {formatDate(collection.created_at)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant={collection.is_active ? "default" : "secondary"}>
                      {collection.is_active ? "Active" : "Hidden"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Collections Yet</h3>
              <p className="text-muted-foreground">
                Start by adding your first collection to see it here
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks for managing your website
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <ImageIcon className="h-8 w-8 text-burgundy mb-2" />
              <h4 className="font-medium mb-1">Add New Collection</h4>
              <p className="text-sm text-muted-foreground">
                Upload new images and create collections
              </p>
            </div>
            
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <Eye className="h-8 w-8 text-burgundy mb-2" />
              <h4 className="font-medium mb-1">Manage Visibility</h4>
              <p className="text-sm text-muted-foreground">
                Show or hide collections from the website
              </p>
            </div>
            
            <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <Star className="h-8 w-8 text-burgundy mb-2" />
              <h4 className="font-medium mb-1">Update Featured</h4>
              <p className="text-sm text-muted-foreground">
                Change which collections appear on homepage
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}