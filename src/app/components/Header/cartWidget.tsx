'use client'

import { useCart } from '@/contexts/cart-context'
import { useState } from 'react'
import { Sidebar } from '../Sidebar/sidebar'
import { ButtonCart } from './headerStyle'
import Image from 'next/image'

export function CartWidget() {
  const [sidebar, setSidebar] = useState(false)

  function showSidebar() {
    setSidebar(!sidebar)
  }

  const { items } = useCart()

  return (
    <>
      {sidebar && <Sidebar active={setSidebar} />}
      <h1>MKS</h1>
      <p>Sistemas</p>

      <ButtonCart onClick={showSidebar}>
        <Image
          src="/header/shoppChart.png"
          priority
          width={19}
          height={18}
          alt=""
        />
        <span>{items?.length}</span>
      </ButtonCart>
    </>
  )
}
