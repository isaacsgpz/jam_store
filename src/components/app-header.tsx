import { CartDropdown } from '@/components/cart-dropdown'
import { Icons } from '@/components/ui/icons'
import { IdLink } from '@/components/ui/id-link'
import { APP_ROUTES } from '@/constants/app-routes'
import { Link } from '@tanstack/react-router'

export const AppHeader = () => {
  return (
    <div className="fixed inset-x-4 top-0 z-[9999] bg-base-100">
      <div className="wrapper navbar h-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Icons.AlignLeft />
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content menu-md z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {APP_ROUTES.map((route) => (
                <li key={route.path}>
                  <IdLink href={route.path} isRoot={route.root}>
                    {route.name}
                  </IdLink>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl">
            Jam
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal menu-md px-1">
            {APP_ROUTES.map((route) => (
              <li key={route.path}>
                <IdLink href={route.path} isRoot={route.root}>
                  {route.name}
                </IdLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <CartDropdown />
        </div>
      </div>
    </div>
  )
}
