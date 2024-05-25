import { BenefitsList } from '@/components/benefits-list'
import { ContactForm } from '@/components/contact-form'
import { IngredientsTable } from '@/components/ingredients-table'
import { NutritionalFactsTable } from '@/components/nutritional-facts-table'
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
      <section className="page wrapper">
        <div className="wrapper grid flex-1 grid-cols-1 items-center gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h1 id="inicio" className="text-3xl font-bold md:text-5xl">
              Transforme seu momento doce com benefícios para o corpo e a mente!
            </h1>

            <p className="text-lg">
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
              alt="Geleia de frutas vermelhas em um pote de vidro"
              className="max-h-[40vh] object-contain object-center drop-shadow-2xl 2xl:max-h-[32vh]"
            />
          </div>
        </div>
      </section>

      <section className="page wrapper gap-24 ">
        <div className="flex flex-col gap-8 text-center">
          <h2 id="sobre" className="text-3xl font-bold md:text-5xl">
            Sobre a sobremesa
          </h2>

          <p className="mx-auto max-w-lg text-lg">
            Descubra a combinação perfeita de sabor e bem-estar com nossa
            Sobremesa de Aveia com Mel e Frutas Vermelhas.
          </p>
        </div>

        <BenefitsList />

        <div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" name="details-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Ingredientes
            </div>
            <div className="collapse-content overflow-x-auto overflow-y-hidden">
              <IngredientsTable />
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" name="details-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Informação nutricional
            </div>
            <div className="collapse-content overflow-x-auto overflow-y-hidden">
              <NutritionalFactsTable />
            </div>
          </div>
        </div>
      </section>

      <section className="page wrapper">
        <div className="flex flex-col gap-24 text-center">
          <div className="space-y-8">
            <h2 id="contato" className="text-3xl font-bold md:text-5xl">
              Entre em contato conosco
            </h2>

            <p className="mx-auto max-w-lg text-lg">
              Fale conosco para mais informações sobre nossa sobremesa ou para
              tirar qualquer dúvida que você tenha.
            </p>
          </div>

          <div className="wrapper grid flex-1 grid-cols-1 items-center gap-6 sm:grid-cols-2">
            <div className="hidden items-center justify-center sm:flex">
              <img
                src="/assets/3d-contact.png"
                alt="Formulário de contato"
                className="mt-3 max-h-[40vh] object-contain object-center drop-shadow-2xl 2xl:max-h-[32vh]"
              />
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
