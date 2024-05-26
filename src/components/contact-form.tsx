import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Nome inválido' }),
  email: z.string().email({ message: 'Email inválido' }),
  message: z.string().min(2, { message: 'Mensagem inválida' }),
})

type ContactFormValues = z.infer<typeof ContactFormSchema>

export const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  })
  const { errors } = form.formState

  console.log(errors)

  const handleSubmit = (values: ContactFormValues) => {
    console.log(values)
    form.reset()
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex max-w-sm flex-col items-center gap-2 sm:items-baseline"
      noValidate
    >
      <label className="form-control w-full">
        <span className="label label-text ml-2">Nome</span>
        <input
          type="text"
          placeholder="Seu nome completo"
          className="input input-bordered w-full"
          {...form.register('name', { required: true })}
        />
        {errors?.name && (
          <span className="label label-text-alt ml-2 text-error">
            {errors.name.message}
          </span>
        )}
      </label>
      <label className="form-control w-full">
        <span className="label label-text ml-2">Email</span>
        <input
          type="email"
          placeholder="Seu email"
          className="input input-bordered w-full"
          {...form.register('email', { required: true })}
        />
        {errors?.email && (
          <span className="label label-text-alt ml-2 text-error">
            {errors.email.message}
          </span>
        )}
      </label>
      <label className="form-control w-full">
        <span className="label label-text ml-2">Mensagem</span>

        <textarea
          className="textarea textarea-bordered w-full resize-none"
          placeholder="Mensagem"
          {...form.register('message', { required: true })}
        />
        {errors?.message && (
          <span className="label label-text-alt ml-2 text-error">
            {errors.message.message}
          </span>
        )}
      </label>
      <button className="btn btn-primary mt-2 w-full">Enviar</button>
    </form>
  )
}
