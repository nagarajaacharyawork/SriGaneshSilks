import { useState, useEffect } from 'react'
import { collectionsService, Collection, CATEGORIES, CategoryKey, CreateCollectionData } from '@/lib/collections'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  Star, 
  Eye,
  EyeOff,
  Image as ImageIcon
} from 'lucide-react'
import { toast } from 'sonner'

export function CollectionsManager() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCollection, setEditingCollection] = useState<Collection | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form state
  const [formData, setFormData] = useState<CreateCollectionData>({
    title: '',
    description: '',
    image_url: '',
    category: '',
    subcategory: null,
    is_featured: false,
    display_order: 0
  })

  useEffect(() => {
    loadCollections()
  }, [])

  const loadCollections = async () => {
    setLoading(true)
    try {
      const { data, error } = await collectionsService.getAll()
      if (error) {
        toast.error('Failed to load collections')
        console.error(error)
      } else {
        setCollections(data || [])
      }
    } catch (err) {
      toast.error('Failed to load collections')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      let imageUrl = formData.image_url

      // Upload image if a new one is selected
      if (selectedImage) {
        const { data: uploadedUrl, error: uploadError } = await collectionsService.uploadImage(selectedImage)
        if (uploadError) {
          toast.error('Failed to upload image')
          return
        }
        imageUrl = uploadedUrl!
      }

      const collectionData = {
        ...formData,
        image_url: imageUrl
      }

      if (editingCollection) {
        // Update existing collection
        const { error } = await collectionsService.update(editingCollection.id, collectionData)
        if (error) {
          toast.error('Failed to update collection')
          return
        }
        toast.success('Collection updated successfully')
      } else {
        // Create new collection
        const { error } = await collectionsService.create(collectionData)
        if (error) {
          toast.error('Failed to create collection')
          return
        }
        toast.success('Collection created successfully')
      }

      resetForm()
      loadCollections()
      setIsDialogOpen(false)
    } catch (err) {
      toast.error('An error occurred')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (collection: Collection) => {
    setEditingCollection(collection)
    setFormData({
      title: collection.title,
      description: collection.description,
      image_url: collection.image_url,
      category: collection.category,
      subcategory: collection.subcategory,
      is_featured: collection.is_featured,
      display_order: collection.display_order
    })
    setImagePreview(collection.image_url)
    setIsDialogOpen(true)
  }

  const handleDelete = async (collection: Collection) => {
    if (!confirm('Are you sure you want to delete this collection?')) return

    try {
      const { error } = await collectionsService.delete(collection.id)
      if (error) {
        toast.error('Failed to delete collection')
        return
      }
      toast.success('Collection deleted successfully')
      loadCollections()
    } catch (err) {
      toast.error('An error occurred')
      console.error(err)
    }
  }

  const toggleVisibility = async (collection: Collection) => {
    try {
      const { error } = await collectionsService.update(collection.id, {
        is_active: !collection.is_active
      })
      if (error) {
        toast.error('Failed to update collection')
        return
      }
      toast.success(`Collection ${collection.is_active ? 'hidden' : 'shown'} successfully`)
      loadCollections()
    } catch (err) {
      toast.error('An error occurred')
      console.error(err)
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image_url: '',
      category: '',
      subcategory: null,
      is_featured: false,
      display_order: 0
    })
    setEditingCollection(null)
    setSelectedImage(null)
    setImagePreview('')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-burgundy mx-auto mb-2"></div>
          <p className="text-muted-foreground">Loading collections...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-burgundy">Collections Manager</h1>
          <p className="text-muted-foreground">Manage your website collections and images</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-burgundy hover:bg-burgundy-deep" onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Collection
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingCollection ? 'Edit Collection' : 'Add New Collection'}
              </DialogTitle>
              <DialogDescription>
                {editingCollection ? 'Update the collection details' : 'Create a new collection for your website'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Silk Sarees"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData({ ...formData, category: value, subcategory: null })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(CATEGORIES).map(([key, category]) => (
                        <SelectItem key={key} value={key}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {formData.category && (
                <div className="space-y-2">
                  <Label htmlFor="subcategory">Subcategory (Optional)</Label>
                  <Select 
                    value={formData.subcategory || ''} 
                    onValueChange={(value) => setFormData({ ...formData, subcategory: value || null })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES[formData.category as CategoryKey]?.subcategories.map((sub) => (
                        <SelectItem key={sub} value={sub}>
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the collection"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Collection Image</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="flex-1"
                  />
                  {imagePreview && (
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                    placeholder="0"
                  />
                </div>
                
                <div className="flex items-center space-x-2 pt-6">
                  <Switch
                    id="is_featured"
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                  />
                  <Label htmlFor="is_featured">Featured on homepage</Label>
                </div>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting} className="bg-burgundy hover:bg-burgundy-deep">
                  {isSubmitting ? 'Saving...' : (editingCollection ? 'Update' : 'Create')}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Collections Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <Card key={collection.id} className={`${!collection.is_active ? 'opacity-60' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {collection.title}
                    {collection.is_featured && (
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    )}
                    {!collection.is_active && (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    )}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {CATEGORIES[collection.category as CategoryKey]?.label || collection.category}
                    </Badge>
                    {collection.subcategory && (
                      <Badge variant="outline" className="text-xs">
                        {collection.subcategory}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {collection.image_url ? (
                <img
                  src={collection.image_url}
                  alt={collection.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              ) : (
                <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center mb-3">
                  <ImageIcon className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {collection.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Order: {collection.display_order}
                </span>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleVisibility(collection)}
                  >
                    {collection.is_active ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(collection)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(collection)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {collections.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center h-64 text-center">
            <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Collections Yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by adding your first collection to showcase on the website
            </p>
            <Button onClick={() => setIsDialogOpen(true)} className="bg-burgundy hover:bg-burgundy-deep">
              <Plus className="h-4 w-4 mr-2" />
              Add Your First Collection
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}