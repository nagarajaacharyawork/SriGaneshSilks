import { createFileRoute } from '@tanstack/react-router'
import { CollectionsManager } from '@/components/admin/CollectionsManager'

export const Route = createFileRoute('/admin/collections')({
  component: CollectionsManager,
})