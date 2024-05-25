import { useCartStore } from '@/stores/cart-store'
import { createFileRoute, Link } from '@tanstack/react-router'

const HomePage = () => {
  const cart = useCartStore()

  const handleAddCartProduct = () =>
    cart.add({
      id: '4',
      name: 'product 1',
      price: 10,
      tags: ['tag1'],
      amount: 2,
    })

  console.log('products', cart.products)
  console.log('total', cart.productsCount)
  // console.log('productsCount', cart.productsCount)

  return (
    <main className="flex flex-1 flex-col">
      <section className="page wrapper">
        <h2 id="inicio">Home</h2>

        <Link to="/cart">go to cart</Link>
        <div>
          <button onClick={handleAddCartProduct}> add to cart</button>
        </div>
      </section>

      <section className="page wrapper">
        <h2 id="sobre">About</h2>
      </section>

      <section className="page wrapper">
        <h2 id="contato">Contact</h2>
      </section>
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
