import { Icons } from '@/components/ui/icons'
import { PRODUCTS } from '@/constants/products'
import { useCartStore } from '@/stores/cart-store'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

const HomePage = () => {
  const cart = useCartStore()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    cart.add({ ...PRODUCTS[0], amount: 1 })
    navigate({ to: '/cart' })
  }

  return (
    <main className="flex flex-1 flex-col">
      <section className="page wrapper pt-16">
        <div className="wrapper grid flex-1 grid-cols-1 items-center gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h1 id="inicio" className="text-3xl font-bold md:text-5xl">
              Transforme seu momento doce com benefícios para o corpo e a mente!
            </h1>

            <p className="text-muted-foreground text-lg">
              Descubra a combinação perfeita de sabor e bem-estar com nossa
              Sobremesa de Aveia com Mel e Frutas Vermelhas.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                className="btn btn-primary w-full sm:flex-1"
                onClick={handleAddToCart}
              >
                Compre Agora
                <Icons.ShoppingCart />
              </button>
              <a href="#sobre" className="btn btn-ghost w-full sm:flex-1">
                Saiba Mais
                <Icons.ChevronDown />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/assets/3d-jam.png"
              alt="3d-jam"
              className="max-h-[40vh] object-contain object-center drop-shadow-2xl 2xl:max-h-[32vh]"
            />
          </div>
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
