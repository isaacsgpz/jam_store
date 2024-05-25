import { Icons } from '@/components/ui/icons'
import { useCartStore } from '@/stores/cart-store'
import { formatCurrency } from '@/utils/currency'
import { Link } from '@tanstack/react-router'

export const CartDropdown = () => {
  const cart = useCartStore()

  const cartTotalPrice = formatCurrency({ value: cart.totalPrice })
  const hasProducts = cart.productsCount > 0

  const productsLabel = cart.productsCount > 1 ? 'produtos' : 'produto'

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
          <div className="indicator">
            <Icons.ShoppingCart />
            <span className="badge indicator-item badge-sm">
              {cart.productsCount}
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold">
              <span>{cart.productsCount} </span>
              <span>{productsLabel}</span>
            </span>

            {hasProducts ? (
              <span className="">{cartTotalPrice}</span>
            ) : (
              <span>Seu carrinho está vazio</span>
            )}

            <div className="card-actions">
              <Link to="/cart" className="btn btn-primary btn-block">
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
