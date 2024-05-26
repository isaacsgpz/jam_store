import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  price: z.number(),
})

export const CartProductSchema = z
  .object({
    amount: z.number(),
  })
  .merge(ProductSchema)

export type Product = z.infer<typeof ProductSchema>
export type CartProduct = z.infer<typeof CartProductSchema>
