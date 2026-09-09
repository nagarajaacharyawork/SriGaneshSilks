import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '@/contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Database, 
  Key, 
  Globe, 
  Shield,
  ExternalLink
} from 'lucide-react'

export const Route = createFileRoute('/admin/settings')({
  component: AdminSettings,
})

function AdminSettings() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-burgundy mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your admin account and system configuration
        </p>
      </div>

      {/* User Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Account Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Email:</span>
              <span className="text-sm text-muted-foreground">{user?.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">User ID:</span>
              <span className="text-sm text-muted-foreground font-mono">{user?.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Role:</span>
              <Badge variant="secondary">Admin</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Database Setup Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Setup
          </CardTitle>
          <CardDescription>
            Required Supabase configuration for the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">1. Create Supabase Tables</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Run these SQL commands in your Supabase SQL editor:
              </p>
              <pre className="text-xs bg-background p-3 rounded border overflow-x-auto">
{`-- Create collections table
CREATE TABLE collections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  subcategory VARCHAR,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create admin_users table
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  role VARCHAR DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust as needed)
CREATE POLICY "Anyone can read collections" ON collections FOR SELECT USING (true);
CREATE POLICY "Authenticated users can modify collections" ON collections FOR ALL USING (auth.role() = 'authenticated');`}
              </pre>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">2. Create Storage Bucket</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Create a storage bucket named "images" in Supabase Storage
              </p>
              <pre className="text-xs bg-background p-3 rounded border overflow-x-auto">
{`-- Create storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true);

-- Allow public access to images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Authenticated users can upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environment Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Environment Configuration
          </CardTitle>
          <CardDescription>
            Required environment variables for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Create a .env file with:</p>
            <pre className="text-xs bg-background p-3 rounded border overflow-x-auto">
{`VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_ADMIN_EMAIL=admin@sriganeshsilks.com
VITE_ADMIN_PASSWORD=your-secure-password`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-burgundy rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Strong Passwords:</strong> Use a strong, unique password for your admin account
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-burgundy rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Regular Backups:</strong> Backup your Supabase database regularly
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-burgundy rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>HTTPS Only:</strong> Ensure your admin panel is only accessible via HTTPS
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-burgundy rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong>Limited Access:</strong> Only share admin credentials with trusted team members
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Useful Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Useful Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <Button 
              variant="outline" 
              className="justify-start"
              onClick={() => window.open('https://supabase.com/docs', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Supabase Documentation
            </Button>
            <Button 
              variant="outline" 
              className="justify-start"
              onClick={() => window.open('/', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Website
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}