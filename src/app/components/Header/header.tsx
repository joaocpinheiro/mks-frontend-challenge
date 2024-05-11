'use client'

import React, { useState } from 'react'
import { ButtonChart, HeadLogo } from './headerStyle'
import Image from 'next/image'
import { Sidebar } from '../Sidebar/sidebar'

export function Header() {
  const [sidebar, setSidebar] = useState(false)
  function showSidebar() {
    setSidebar(!sidebar)
  }

  return (
    <HeadLogo>
      {sidebar && <Sidebar active={setSidebar} />}
      <h1>MKS</h1>
      <p>Sistemas</p>
      <ButtonChart onClick={showSidebar}>
        <Image
          src="/header/shoppChart.png"
          priority
          width={19}
          height={18}
          alt=""
        />
        <span>0</span>
      </ButtonChart>
    </HeadLogo>
  )
}
