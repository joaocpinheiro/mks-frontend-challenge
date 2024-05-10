import React from 'react'
import { ButtonChart, HeadLogo } from './headerStyle'
import Image from 'next/image'
import shoppChart from '../../../public/header/shoppChart.png'

export function Header() {
  return (
    <HeadLogo>
      <h1>MKS</h1>
      <p>Sistemas</p>
      <ButtonChart>
        <Image src={shoppChart} priority width={19} height={18} alt="" />
        <span>0</span>
      </ButtonChart>
    </HeadLogo>
  )
}
