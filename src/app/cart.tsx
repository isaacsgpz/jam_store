import { createFileRoute } from '@tanstack/react-router'

const CartPage = () => {
  return (
    <section className="wrapper page flex flex-1 flex-col">
      <h2>Cart</h2>
    </section>
  )
}

export const Route = createFileRoute('/cart')({
  component: CartPage,
})
