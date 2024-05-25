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

        <ul className="flex flex-wrap gap-6">
          <li className="card w-full bg-base-200 md:max-w-72">
            <article className="card-body gap-7">
              <img
                src="/assets/3d-relax.png"
                alt="Homem relaxando em posição de lótus de yoga"
                className="max-h-28 object-contain object-center drop-shadow-2xl"
              />
              <div>
                <strong className="card-title mb-3">Relaxamento Natural</strong>
                <p>
                  Desfrute de uma combinação única de ingredientes que promovem
                  relaxamento e alívio do estresse.
                </p>
              </div>
            </article>
          </li>
          <li className="card w-full bg-base-200 md:max-w-72">
            <article className="card-body gap-7">
              <img
                src="/assets/3d-sleep.png"
                alt="Travesseiro"
                className="max-h-28 object-contain object-center drop-shadow-2xl"
              />
              <div>
                <strong className="card-title mb-3">Bem-Estar Noturno</strong>
                <p>
                  Saboreie nossa sobremesa como parte da sua rotina noturna para
                  uma noite tranquila e revigorante.
                </p>
              </div>
            </article>
          </li>
          <li className="card w-full bg-base-200 md:max-w-72">
            <article className="card-body gap-7">
              <img
                src="/assets/3d-strawberry.png"
                alt="Morango"
                className="max-h-28 object-contain object-center drop-shadow-2xl"
              />
              <div>
                <strong className="card-title mb-3">Sabor e Nutrição</strong>
                <p>
                  Uma explosão de sabor delicioso combinada com os benefícios
                  nutritivos da aveia e das frutas vermelhas.
                </p>
              </div>
            </article>
          </li>
          <li className="card w-full bg-base-200 md:max-w-72">
            <article className="card-body gap-7">
              <img
                src="/assets/3d-relaxing.png"
                alt="3d-sleep"
                className="max-h-28 object-contain object-center drop-shadow-2xl"
              />
              <div>
                <strong className="card-title mb-3">
                  Alívio da Insônia e Ansiedade
                </strong>
                <p>
                  Experimente os efeitos calmantes e relaxantes que nossa
                  sobremesa oferece, ajudando a melhorar a qualidade do sono.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </section>

      <section className="page wrapper">
        <div className="flex flex-col gap-8 text-center">
          <h2 id="contato" className="text-3xl font-bold md:text-5xl">
            Entre em Contato Conosco
          </h2>

          <p className="mx-auto max-w-lg text-lg">
            Fale conosco para mais informações sobre nossa sobremesa ou para
            tirar qualquer dúvida que você tenha.
          </p>
        </div>
      </section>
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
