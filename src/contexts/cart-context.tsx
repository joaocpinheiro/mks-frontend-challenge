'use client'

import { Product } from '@/data/products'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface CartItem {
  product: Product
  id: string
  quantity: number
}

interface CartContextType {
  products: Product[]
  items: CartItem[]
  addToCart: (product: Product, id: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product, id: string) {
    console.log(product.name)
    setCartItems((state) => {
      console.log(state)

      const productInCart = state.some((item) => item.id === id)
      if (productInCart) {
        return state.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { product, id, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
