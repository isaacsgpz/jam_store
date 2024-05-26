import { Icons } from '@/components/ui/icons'
import { PRODUCTS } from '@/constants/products'
import { useCartStore } from '@/stores/cart-store'
import { formatCurrency } from '@/utils/currency'
import { Link } from '@tanstack/react-router'
import { ProductCard } from '@/components/product-card'

export const CartDropdown = () => {
  const cart = useCartStore()

  const cartTotalPrice = formatCurrency({ value: cart.totalPrice })
  const hasProducts = cart.productsCount > 0

  const productsLabel = cart.productsCount > 1 ? 'produtos' : 'produto'

  const handleAddToCart = () => cart.add({ ...PRODUCTS[0], amount: 1 })

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
          className="card dropdown-content card-compact mt-3 w-[19rem] bg-base-100 shadow sm:w-80"
        >
          <div className="card-body">
            {hasProducts && (
              <span className="ml-2 text-lg font-bold">
                <span>{cart.productsCount} </span>
                <span>{productsLabel}</span>
              </span>
            )}

            {hasProducts ? (
              <ul className="max-h-72 space-y-4 overflow-y-auto px-1">
                {cart.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ul>
            ) : (
              <div className="grid place-items-center gap-2">
                <Icons.Frown />
                <span>Seu carrinho está vazio</span>
              </div>
            )}

            {hasProducts ? (
              <>
                <span className="ml-2 text-lg font-bold">
                  <span>Total: </span>
                  <span>{cartTotalPrice}</span>
                </span>

                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    Ir para o carrinho
                  </Link>
                </div>
              </>
            ) : (
              <button
                className="btn btn-primary w-full sm:flex-1"
                onClick={handleAddToCart}
              >
                Adicionar ao carrinho
                <Icons.Plus />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
