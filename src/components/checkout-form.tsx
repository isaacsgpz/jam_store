import { Icons } from '@/components/ui/icons'
import { mt } from '@/utils/tailwind'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const CheckoutFormSchema = z.object({
  street: z.string().min(2, { message: 'Rua inválida' }),
  number: z.string().min(1, { message: 'Número inválido' }),
  neighborhood: z.string().min(2, { message: 'Bairro inválido' }),
  city: z.string().min(2, { message: 'Cidade inválida' }),
  state: z.string().min(2, { message: 'Estado inválido' }),
  zip: z.string().min(8, { message: 'CEP inválido' }),
})

type CheckoutFormValues = z.infer<typeof CheckoutFormSchema>

interface CheckoutFormProps {
  formId: string
  className?: string
}

export const CheckoutForm = (props: CheckoutFormProps) => {
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutFormSchema),
  })
  const { errors } = form.formState

  const handleSubmit = (values: CheckoutFormValues) => {
    console.log(values)
    form.reset()
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className={mt(
        'mb-auto flex flex-col items-center sm:items-baseline',
        props.className,
      )}
      id={props.formId}
      noValidate
    >
      <div className="w-full flex-1 gap-2">
        <div className="mb-8 flex items-center gap-2">
          <Icons.MapPin />
          <div>
            <h3 className="text-xl font-bold">Endereço de entrega</h3>
            <p className="text-sm">
              Informe o endereço de onde deseja receber seu pedido
            </p>
          </div>
        </div>

        <label className="form-control w-full">
          <span className="label label-text ml-2">Rua</span>
          <input
            type="text"
            placeholder="Rua"
            className="input input-bordered w-full"
            {...form.register('street', { required: true })}
          />
          {errors?.street && (
            <span className="label label-text-alt ml-2 text-error">
              {errors.street.message}
            </span>
          )}
        </label>

        <label className="form-control w-full">
          <span className="label label-text ml-2">Número</span>
          <input
            type="text"
            placeholder="Número"
            className="input input-bordered w-full"
            {...form.register('number', { required: true })}
          />
          {errors?.number && (
            <span className="label label-text-alt ml-2 text-error">
              {errors.number.message}
            </span>
          )}
        </label>

        <div className="flex w-full items-center gap-2">
          <label className="form-control w-full">
            <span className="label label-text ml-2">Bairro</span>
            <input
              type="text"
              placeholder="Bairro"
              className="input input-bordered w-full"
              {...form.register('neighborhood', { required: true })}
            />
            {errors?.neighborhood && (
              <span className="label label-text-alt ml-2 text-error">
                {errors.neighborhood.message}
              </span>
            )}
          </label>

          <label className="form-control w-full">
            <span className="label label-text ml-2">Cidade</span>
            <input
              type="text"
              placeholder="Cidade"
              className="input input-bordered w-full"
              {...form.register('city', { required: true })}
            />
            {errors?.city && (
              <span className="label label-text-alt ml-2 text-error">
                {errors.city.message}
              </span>
            )}
          </label>
        </div>

        <div className="flex w-full items-center gap-2">
          <label className="form-control w-full">
            <span className="label label-text ml-2">Estado</span>
            <input
              type="text"
              placeholder="Estado"
              className="input input-bordered w-full"
              {...form.register('state', { required: true })}
            />
            {errors?.state && (
              <span className="label label-text-alt ml-2 text-error">
                {errors.state.message}
              </span>
            )}
          </label>

          <label className="form-control w-full">
            <span className="label label-text ml-2">CEP</span>
            <input
              type="text"
              placeholder="CEP"
              className="input input-bordered w-full"
              {...form.register('zip', { required: true })}
            />
            {errors?.zip && (
              <span className="label label-text-alt ml-2 text-error">
                {errors.zip.message}
              </span>
            )}
          </label>
        </div>
      </div>
    </form>
  )
}
