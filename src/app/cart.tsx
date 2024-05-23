import { createFileRoute } from '@tanstack/react-router'

const CartPage = () => {
  return <div className="page"></div>
}

export const Route = createFileRoute('/cart')({
  component: CartPage,
})
