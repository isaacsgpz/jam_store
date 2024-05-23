import { CartDropdown } from '@/components/cart-dropdown'
import { APP_ROUTES } from '@/constants/app-routes'
import { mt } from '@/utils/tailwind'
import { Link } from '@tanstack/react-router'
import * as React from 'react'
import { Icons } from './ui/icons'

export const AppHeader = () => {
  const [isScrolling, setIsScrolling] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = () => setIsScrolling(window.scrollY > 0)

    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <div className="fixed inset-x-4 top-0 bg-base-100">
      <div
        className={mt('wrapper navbar rounded-btn', isScrolling && 'shadow-md')}
      >
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
                  <Link to={route.path}>{route.name}</Link>
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
                <Link to={route.path}>{route.name}</Link>
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
