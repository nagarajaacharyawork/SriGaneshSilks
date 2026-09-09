# Sri Ganesh Silks Admin Panel

## Quick Start

The admin panel is now integrated into your website at `/admin`. Here's what you need to know:

## Accessing the Admin Panel

1. **URL**: Visit `https://www.sriganeshsilksthekkatte.com/admin`
2. **Login**: Use your Supabase authentication credentials
3. **Setup Required**: Follow the setup guide in `ADMIN_PANEL_SETUP.md`

## Features

### 📊 Dashboard
- View collection statistics
- See recently added items  
- Monitor website activity

### 🖼️ Collections Manager
- Add new collections with images
- Edit existing collections
- Set featured status for homepage display
- Organize by categories and display order
- Show/hide collections from website

### 📤 Image Upload  
- Upload multiple images to Supabase storage
- Get shareable URLs for collections
- Automatic image optimization

### ⚙️ Settings
- View account information
- Access setup instructions
- Database configuration help

## How It Works

### Website Integration

**Homepage (`/`):**
- Featured collections automatically appear in the "Featured Collections" section
- New arrivals show in the dynamic sections

**Collections Page (`/collections`):**
- Dynamic collections appear at the top
- Static collections remain below for continuity

**Category Pages:**
- Collections are filtered by category automatically
- Enhanced with dynamic content

### Collection Categories

Collections are organized into these categories:
- **Sarees**: Silk, Wedding, Bridal, Designer, Cotton, Printed
- **Everyday & Occasion**: Dress Materials, Festival Collection
- **The Family**: Women's, Men's, Kids Wear, Accessories

## Admin Workflow

1. **Upload Images**: Start by uploading collection images
2. **Create Collections**: Use uploaded image URLs to create collections
3. **Set Featured**: Mark important collections as featured for homepage
4. **Organize**: Set display order and categories
5. **Manage Visibility**: Show/hide collections as needed

## Important Files Modified

- `src/lib/supabase.ts` - Database configuration
- `src/contexts/AuthContext.tsx` - Authentication system
- `src/components/admin/` - Admin panel components
- `src/routes/admin/` - Admin routes
- `src/hooks/useCollections.ts` - Data fetching hooks
- `src/components/collections/DynamicCollections.tsx` - Dynamic display components

## Next Steps

1. **Complete Setup**: Follow `ADMIN_PANEL_SETUP.md` for full configuration
2. **Create Admin User**: Set up authentication in Supabase
3. **Upload First Collection**: Test the system with a sample collection
4. **Train Team**: Share login credentials with team members

## Security Features

- ✅ Row Level Security (RLS) enabled
- ✅ Authenticated-only access to admin functions  
- ✅ Public read access to active collections
- ✅ Secure image storage with proper policies
- ✅ Environment variable configuration

## Support

The admin panel integrates seamlessly with your existing website design and maintains all current functionality while adding dynamic content management capabilities.

For setup help, see `ADMIN_PANEL_SETUP.md` or check the Settings page in the admin panel for detailed configuration instructions.