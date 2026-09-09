import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useAuth } from '@/contexts/AuthContext'
import { AdminLogin } from '@/components/admin/AdminLogin'
import { AdminLayout } from '@/components/admin/AdminLayout'

export const Route = createFileRoute('/admin')({
  component: AdminRoute,
})

function AdminRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-burgundy mx-auto mb-2"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <AdminLogin />
  }

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}