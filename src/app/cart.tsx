import { CheckoutForm } from '@/components/checkout-form'
import { ProductCard } from '@/components/product-card'
import { Icons } from '@/components/ui/icons'
import { useCartStore } from '@/stores/cart-store'
import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

const CartPage = () => {
  const cart = useCartStore()
  const checkoutFormId = React.useId()

  const hasProducts = cart.productsCount > 0

  return (
    <section className="wrapper page flex-1 flex-col gap-16">
      <h2 className="text-2xl font-bold md:text-4xl">Complete seu pedido</h2>

      <div className="grid flex-1 grid-cols-1 items-center gap-y-4 sm:grid-cols-2">
        <CheckoutForm
          formId={checkoutFormId}
          className="order-last md:-order-1"
        />

        <div className="order-first mx-auto mb-auto w-full flex-1 gap-2 md:order-none md:max-w-md">
          <div className="mb-8 flex items-center gap-2">
            <Icons.List />
            <div>
              <h3 className="text-xl font-bold">Resumo do Pedido</h3>
              <p className="text-sm">
                Aqui estão todos os itens do seu pedido.
              </p>
            </div>
          </div>

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
        </div>

        <div></div>

        <div className="order-last mx-auto mb-auto w-full max-w-md md:order-none">
          <div className="mx-4 ">
            <div className="flex items-center justify-between">
              <strong className="text-lg font-bold">Total</strong>
              <span className="text-lg font-bold">{cart.totalPrice}</span>
            </div>
          </div>
          <button className="btn btn-primary mt-4 w-full" form={checkoutFormId}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/cart')({
  component: CartPage,
})
