'use client'

import { Product } from '@/data/products'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface CartItem {
  product: Product
  id: string
  quantity: number
}

interface CartContextType {
  items: CartItem[] | undefined
  addToCart: (product: Product, id: string) => void
  decrement: (id: string) => void
  increment: (id: string) => void
  deleteCart: (id: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>([])

  function decrement(id: string) {
    setCartItems((state) => {
      const product = state?.some((item) => item.id === id)
      if (product) {
        return state?.map((item) => {
          if (item.id === id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function increment(id: string) {
    setCartItems((state) => {
      const product = state?.some((item) => item.id === id)
      if (product) {
        return state?.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function addToCart(product: Product, id: string) {
    setCartItems((state) => {
      const productInCart = state?.some((item) => item.id === id)
      if (productInCart) {
        return state?.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        if (state) return [...state, { product, id, quantity: 1 }]
      }
    })
  }

  function deleteCart(id: string) {
    setCartItems((state) => {
      const product = state?.filter((item) => item.id !== id)
      return product
    })
  }

  return (
    <CartContext.Provider
      value={{
        deleteCart,
        items: cartItems,
        addToCart,
        decrement,
        increment,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
