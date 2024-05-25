export const BenefitsList = () => {
  return (
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
              Saboreie nossa sobremesa como parte da sua rotina noturna para uma
              noite tranquila e revigorante.
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
              Experimente os efeitos calmantes e relaxantes que nossa sobremesa
              oferece, ajudando a melhorar a qualidade do sono.
            </p>
          </div>
        </article>
      </li>
    </ul>
  )
}
