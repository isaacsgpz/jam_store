import '@/styles/globals.css'

import { NotFoundRoute } from '@/app/-not-found'

import { routeTree } from '@/routes/routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundRoute,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {
  return (
    <>
      {process.env.NODE_ENV === 'development' && (
        <TanStackRouterDevtools router={router} position="bottom-right" />
      )}
      <RouterProvider router={router} />
    </>
  )
}
