'use client'

import Image from 'next/image'
import {
  ArticleWrapper,
  CardButtonAmountContent,
  CardButtonAmountDecrement,
  CardButtonAmountIncrement,
  CardButtonAmountNumber,
  CardButtonsWrapper,
  CardCartContent,
  CardCartWrapper,
  ProductCardCartText,
  TextButtonContent,
} from './cardCartStyles'
import { PriceButton } from '@/app/themes/globalStyle'
import { useCart } from '@/contexts/cart-context'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/api/products'

export function CardCart() {
  const { addToCart, items } = useCart()

  const { data: productsApi } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <ArticleWrapper>
      {productsApi &&
        items.map((product, i) => {
          return (
            <CardCartWrapper key={i}>
              <span>X</span>
              <Image
                src={product.product.photo}
                width={1002}
                height={1244}
                priority
                alt=""
              />
              <CardCartContent>
                <ProductCardCartText>
                  {product.product.name}
                </ProductCardCartText>

                <CardButtonsWrapper>
                  <TextButtonContent>
                    <p>Qtd</p>
                    <CardButtonAmountContent>
                      <CardButtonAmountDecrement>-</CardButtonAmountDecrement>

                      <CardButtonAmountNumber>
                        {product.quantity}
                      </CardButtonAmountNumber>
                      <CardButtonAmountIncrement>+</CardButtonAmountIncrement>
                    </CardButtonAmountContent>
                  </TextButtonContent>
                  <PriceButton>R${product.product.price}</PriceButton>
                </CardButtonsWrapper>
              </CardCartContent>
            </CardCartWrapper>
          )
        })}
    </ArticleWrapper>
  )
}
