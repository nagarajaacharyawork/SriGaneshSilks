import { ReactNode } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  LogOut, 
  Home, 
  ImageIcon, 
  Settings, 
  BarChart3, 
  Upload 
} from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { user, signOut } = useAuth()
  const location = useLocation()

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: BarChart3 },
    { href: '/admin/collections', label: 'Collections', icon: ImageIcon },
    { href: '/admin/upload', label: 'Upload Images', icon: Upload },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ]

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              <span className="font-display text-lg text-burgundy">Sri Ganesh Silks</span>
            </Link>
            <span className="text-muted-foreground">/ Admin Panel</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Welcome, {user?.email}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white p-6 hidden md:block">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'bg-burgundy text-white'
                      : 'text-muted-foreground hover:bg-burgundy/5 hover:text-burgundy'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
          <nav className="flex items-center justify-around p-2">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg ${
                    isActive ? 'text-burgundy' : 'text-muted-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">{item.label.split(' ')[0]}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 pb-20 md:pb-6">
          {children}
        </main>
      </div>
    </div>
  )
}