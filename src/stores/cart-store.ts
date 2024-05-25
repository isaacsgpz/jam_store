import { CartProduct } from '@/@types/product'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface CartStore {
  products: CartProduct[]
  totalPrice: number
  productsCount: number
  add: (product: CartProduct) => void
  clear: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],
      totalPrice: 0,
      productsCount: 0,
      add: (product) => {
        set((state) => {
          const { products } = state

          const alreadyExists = products.find((p) => p.id === product.id)
          const updatedProducts = alreadyExists
            ? products.map((p) =>
                p.id === product.id
                  ? { ...p, amount: p.amount + product.amount }
                  : p,
              )
            : [...products, { ...product }]

          return {
            products: updatedProducts,
            totalPrice: updatedProducts.reduce(
              (acc, p) => acc + p.price * p.amount,
              0,
            ),
            productsCount: updatedProducts.length,
          }
        })
      },
      clear: () => set({ products: [], totalPrice: 0, productsCount: 0 }),
    }),
    {
      name: '@jam_store::cart',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
)
