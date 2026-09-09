# Sri Ganesh Silks Admin Panel Setup Guide

This guide will help you set up the admin panel for managing collections on the Sri Ganesh Silks website.

## Overview

The admin panel allows you to:
- Upload collection images to Supabase storage
- Create and manage collections with titles, descriptions, and categories  
- Mark collections as featured to show on the homepage
- Show/hide collections from the website
- Organize collections by category and display order

## Prerequisites

1. **Supabase Account**: Create a free account at [supabase.com](https://supabase.com)
2. **Node.js**: Ensure you have Node.js installed (version 16 or higher)

## Step 1: Supabase Setup

### 1.1 Create a New Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project" 
3. Choose your organization and enter:
   - Project name: `sri-ganesh-silks`
   - Database password: Generate a secure password
   - Region: Choose closest to your location
4. Wait for the project to be created (2-3 minutes)

### 1.2 Get Project Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **Anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`)

### 1.3 Create Database Tables

1. Go to SQL Editor in your Supabase dashboard
2. Run this SQL code:

\`\`\`sql
-- Create collections table
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

-- Enable Row Level Security
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for collections table
CREATE POLICY "Anyone can read active collections" ON collections 
  FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can manage collections" ON collections 
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for admin_users table  
CREATE POLICY "Authenticated users can read admin_users" ON admin_users
  FOR SELECT USING (auth.role() = 'authenticated');
\`\`\`

### 1.4 Create Storage Bucket

1. Go to Storage in your Supabase dashboard
2. Click "New Bucket"
3. Name: `images`
4. Make it **public** 
5. Click "Create Bucket"

### 1.5 Set Storage Policies

1. Go to Storage > Policies
2. Click "New Policy" for the `images` bucket
3. Create these policies:

\`\`\`sql
-- Allow public access to read images
CREATE POLICY "Public Access" ON storage.objects 
  FOR SELECT USING (bucket_id = 'images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated Upload" ON storage.objects 
  FOR INSERT WITH CHECK (
    bucket_id = 'images' AND 
    auth.role() = 'authenticated'
  );

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated Delete" ON storage.objects 
  FOR DELETE USING (
    bucket_id = 'images' AND 
    auth.role() = 'authenticated'
  );
\`\`\`

## Step 2: Authentication Setup

### 2.1 Create Admin User

1. Go to Authentication > Users in Supabase
2. Click "Add User"
3. Enter your admin email and a secure password
4. Click "Create User"
5. The user will be created and you can use these credentials to log in

### 2.2 Configure Authentication Settings

1. Go to Authentication > Settings
2. Under "Site URL" add your domain: `https://www.sriganeshsilksthekkatte.com`
3. Under "Redirect URLs" add: `https://www.sriganeshsilksthekkatte.com/admin`

## Step 3: Environment Configuration

Create a `.env` file in your project root:

\`\`\`env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Admin Panel Configuration (optional)
VITE_ADMIN_EMAIL=admin@sriganeshsilks.com
VITE_ADMIN_PASSWORD=your-secure-password
\`\`\`

Replace:
- `your-project-ref` with your actual Supabase project reference
- `your-anon-key` with your actual anon key
- Update the admin email and password as needed

## Step 4: Build and Deploy

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

3. Deploy the built files to your web server

## Step 5: Access Admin Panel

1. Go to `https://www.sriganeshsilksthekkatte.com/admin`
2. Log in with your admin credentials
3. You should see the admin dashboard

## How to Use the Admin Panel

### Dashboard
- View statistics about your collections
- See recently added items
- Quick access to common actions

### Upload Images
1. Go to "Upload Images" 
2. Select multiple image files
3. Click "Upload All"
4. Copy the generated URLs for use in collections

### Manage Collections
1. Go to "Collections"
2. Click "Add Collection" 
3. Fill in:
   - **Title**: Name of the collection (e.g., "Silk Sarees")
   - **Description**: Brief description 
   - **Category**: Choose from predefined categories
   - **Subcategory**: Optional, more specific classification
   - **Image**: Upload or paste image URL
   - **Featured**: Check to show on homepage
   - **Display Order**: Number for sorting (lower numbers appear first)

### Managing Visibility
- Use the eye icon to show/hide collections
- Hidden collections won't appear on the website
- Featured collections appear on the homepage

## Categories Structure

The system supports these categories:

- **Sarees**: Silk Sarees, Wedding Sarees, Bridal Sarees, Designer Sarees, Cotton Sarees, Printed Sarees
- **Everyday & Occasion**: Dress Materials, Festival Collection  
- **The Family**: Women's Collection, Men's Collection, Kids Wear, Accessories

## Website Integration

### Homepage
- Featured collections automatically appear in the "Featured Collections" section
- New arrivals show in the "Recently Added" section

### Collections Page  
- All active collections are displayed
- Organized by category with the static collections

### Category Pages
- Collections are filtered by category when viewing specific pages (Women, Men, Kids, etc.)

## Troubleshooting

### "Failed to upload image"
- Check that the storage bucket is created and public
- Verify storage policies are set correctly
- Ensure the image file is under 10MB

### "Failed to create collection" 
- Check that database tables exist
- Verify RLS policies allow authenticated users to insert
- Make sure all required fields are filled

### Login Issues
- Verify the admin user exists in Supabase Authentication
- Check that environment variables are set correctly
- Ensure Site URL is configured in Supabase settings

### Collections not showing on website
- Make sure collections are marked as "active" 
- For homepage display, collections must be marked as "featured"
- Check that image URLs are accessible

## Security Notes

1. **Database Security**: RLS is enabled with appropriate policies
2. **Authentication**: Only authenticated users can manage collections  
3. **Storage Security**: Public read access, authenticated write access
4. **Environment Variables**: Keep your Supabase keys secure
5. **HTTPS**: Always use HTTPS in production

## Support

If you encounter any issues:

1. Check the browser console for error messages
2. Verify your Supabase configuration
3. Ensure all database tables and policies are created correctly
4. Check that your environment variables are set properly

The admin panel provides a user-friendly way to keep your website collections up to date without needing to modify code or redeploy the website.