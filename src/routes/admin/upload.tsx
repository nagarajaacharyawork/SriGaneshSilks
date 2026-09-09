import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { collectionsService } from '@/lib/collections'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Upload, Image as ImageIcon, CheckCircle, X } from 'lucide-react'
import { toast } from 'sonner'

export const Route = createFileRoute('/admin/upload')({
  component: UploadImages,
})

function UploadImages() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})
  const [uploadedUrls, setUploadedUrls] = useState<Record<string, string>>({})
  const [uploading, setUploading] = useState(false)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setSelectedFiles(prev => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const uploadFiles = async () => {
    if (selectedFiles.length === 0) return

    setUploading(true)
    
    for (const file of selectedFiles) {
      const fileName = file.name
      setUploadProgress(prev => ({ ...prev, [fileName]: 0 }))

      try {
        // Simulate progress
        const progressInterval = setInterval(() => {
          setUploadProgress(prev => ({
            ...prev,
            [fileName]: Math.min((prev[fileName] || 0) + 20, 90)
          }))
        }, 200)

        const { data: url, error } = await collectionsService.uploadImage(file)
        
        clearInterval(progressInterval)

        if (error) {
          toast.error(`Failed to upload ${fileName}`)
          setUploadProgress(prev => ({ ...prev, [fileName]: -1 }))
        } else {
          setUploadProgress(prev => ({ ...prev, [fileName]: 100 }))
          setUploadedUrls(prev => ({ ...prev, [fileName]: url! }))
          toast.success(`${fileName} uploaded successfully`)
        }
      } catch (err) {
        toast.error(`Error uploading ${fileName}`)
        setUploadProgress(prev => ({ ...prev, [fileName]: -1 }))
      }
    }

    setUploading(false)
  }

  const clearAll = () => {
    setSelectedFiles([])
    setUploadProgress({})
    setUploadedUrls({})
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url)
    toast.success('URL copied to clipboard')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-burgundy mb-2">Upload Images</h1>
        <p className="text-muted-foreground">
          Upload images to Supabase storage for use in collections
        </p>
      </div>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Image Upload
          </CardTitle>
          <CardDescription>
            Select multiple images to upload to your collection storage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="images">Select Images</Label>
              <Input
                id="images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                disabled={uploading}
              />
            </div>

            {selectedFiles.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {selectedFiles.length} file(s) selected
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearAll}
                      disabled={uploading}
                    >
                      Clear All
                    </Button>
                    <Button
                      onClick={uploadFiles}
                      disabled={uploading}
                      className="bg-burgundy hover:bg-burgundy-deep"
                    >
                      {uploading ? 'Uploading...' : 'Upload All'}
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {selectedFiles.map((file, index) => {
                    const progress = uploadProgress[file.name] || 0
                    const url = uploadedUrls[file.name]
                    const isComplete = progress === 100
                    const hasError = progress === -1

                    return (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <ImageIcon className="h-5 w-5 text-muted-foreground" />
                            <span className="font-medium">{file.name}</span>
                            {isComplete && (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            )}
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            disabled={uploading}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">
                            Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>

                          {progress > 0 && (
                            <div className="space-y-2">
                              <Progress 
                                value={hasError ? 0 : progress} 
                                className={hasError ? 'bg-red-100' : ''} 
                              />
                              <div className="text-sm text-muted-foreground">
                                {hasError ? 'Upload failed' : `${progress}%`}
                              </div>
                            </div>
                          )}

                          {url && (
                            <div className="space-y-2">
                              <div className="text-sm font-medium text-green-600">
                                Upload successful!
                              </div>
                              <div className="flex items-center gap-2">
                                <Input
                                  value={url}
                                  readOnly
                                  className="text-sm"
                                />
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => copyUrl(url)}
                                >
                                  Copy URL
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use Uploaded Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p>
              1. <strong>Upload Images:</strong> Select and upload your collection images using the form above
            </p>
            <p>
              2. <strong>Copy URLs:</strong> Once uploaded, copy the image URLs from the success messages
            </p>
            <p>
              3. <strong>Create Collections:</strong> Go to the Collections page and create new collections using these image URLs
            </p>
            <p>
              4. <strong>Homepage Display:</strong> Mark collections as "Featured" to show them on the homepage
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}