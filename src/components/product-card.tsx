import { CartProduct } from '@/@types/product'
import { useCartStore } from '@/stores/cart-store'
import { formatCurrency } from '@/utils/currency'
import { IncrementInput } from './increment-input'
import { Icons } from './ui/icons'

interface ProductCardProps {
  product: CartProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const cart = useCartStore()

  const totalPrice = product.price * product.amount
  const formattedTotalPrice = formatCurrency({ value: totalPrice })

  const handleProductAmountChange = (value: number) =>
    cart.update(product.id, value)

  const handleRemoveProduct = () => cart.remove(product.id)

  return (
    <li className="card w-full bg-base-100">
      <article className="card-body flex-row items-center gap-4 !p-0">
        <img
          src={`assets/${product.image}`}
          alt={product.name}
          className="mask mask-squircle size-12 bg-base-200"
        />

        <div>
          <strong className="card-title w-full text-sm">{product.name}</strong>

          <div className="flex items-center justify-between gap-2 py-1">
            <IncrementInput
              defaultValue={product.amount}
              onValueChange={handleProductAmountChange}
            />

            <span className="text-[1rem] font-bold text-primary">
              {formattedTotalPrice}
            </span>
          </div>
        </div>

        <div className="card-actions self-start">
          <button
            className="btn btn-square btn-xs"
            onClick={handleRemoveProduct}
          >
            <Icons.X />
          </button>
        </div>
      </article>
    </li>
  )
}
