'use client'

import Image from 'next/image'

import {
  CardContent,
  CardWrapper,
  MainWrapper,
  ProductText,
  SubText,
} from './mainContentStyle'

import { BuyButton, PriceButton } from '../../themes/globalStyle'
import shoppingBag2 from '@/../public/icons/shoppingBag2.svg'
import { getProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'

export function MainContent() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <MainWrapper>
      {products &&
        products.products.map((product, i) => {
          return (
            <CardWrapper key={i}>
              <Image
                src={product.photo}
                width={1002}
                height={1244}
                priority
                alt=""
              />
              <CardContent>
                <ProductText>{product.name}</ProductText>
                <PriceButton>R${Number(product.price)}</PriceButton>
              </CardContent>
              <SubText>Redesigned from scratch and completely revised.</SubText>
              <BuyButton>
                <Image src={shoppingBag2} width={17} height={19} alt="" />
                COMPRAR
              </BuyButton>
            </CardWrapper>
          )
        })}
    </MainWrapper>
  )
}
