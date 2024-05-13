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

export function CardCart() {
  const { items, decrement, increment, deleteCart } = useCart()

  function handleDecrement(id: string) {
    decrement(id)
  }

  function handleIncrement(id: string) {
    increment(id)
  }

  function handleDelete(id: string) {
    deleteCart(id)
  }

  return (
    <ArticleWrapper>
      {items &&
        items?.map((product, i) => {
          return (
            <CardCartWrapper key={i}>
              <span onClick={() => handleDelete(product.id)}>X</span>
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
                      <CardButtonAmountDecrement
                        onClick={() => handleDecrement(product.id)}
                      >
                        -
                      </CardButtonAmountDecrement>

                      <CardButtonAmountNumber>
                        {product.quantity}
                      </CardButtonAmountNumber>
                      <CardButtonAmountIncrement
                        onClick={() => handleIncrement(product.id)}
                      >
                        +
                      </CardButtonAmountIncrement>
                    </CardButtonAmountContent>
                  </TextButtonContent>
                  <PriceButton onClick={() => handleIncrement(product.id)}>
                    R${product.product.price}
                  </PriceButton>
                </CardButtonsWrapper>
              </CardCartContent>
            </CardCartWrapper>
          )
        })}
    </ArticleWrapper>
  )
}
