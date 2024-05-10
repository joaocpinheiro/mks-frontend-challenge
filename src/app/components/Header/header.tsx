import React from 'react'
import { ButtonChart, HeadLogo } from './headerStyle'
import Image from 'next/image'

export function Header() {
  return (
    <HeadLogo>
      <h1>MKS</h1>
      <p>Sistemas</p>
      <ButtonChart>
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
