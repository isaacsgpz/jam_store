import { AppHeader } from '@/components/app-header'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <div
      className="relative flex min-h-screen max-w-[100vw] flex-col 
    overflow-y-auto overflow-x-hidden"
    >
      <AppHeader />
      <Outlet />
    </div>
  )
}

export const Route = createRootRoute({ component: RootLayout })
