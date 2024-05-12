'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  id: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (id: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(id: string) {
    setCartItems((state) => {
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
        return [...state, { id, quantity: 1 }]
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
