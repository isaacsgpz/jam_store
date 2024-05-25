import { AppHeader } from '@/components/app-header'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <main className="relative flex min-h-screen flex-col overflow-y-auto overflow-x-hidden">
      <AppHeader />
      <Outlet />
    </main>
  )
}

export const Route = createRootRoute({ component: RootLayout })
