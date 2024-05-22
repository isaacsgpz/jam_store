import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Outlet />
    </div>
  )
}

export const Route = createRootRoute({ component: RootLayout })
