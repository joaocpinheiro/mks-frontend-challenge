import Image from 'next/image'
import { ProductText } from '../Main/mainContentStyle'
import {
  ArticleWrapper,
  CardButtonAmountContent,
  CardButtonAmountDecrement,
  CardButtonAmountIncrement,
  CardButtonAmountNumber,
  CardButtonsWrapper,
  CardCartContent,
  CardCartWrapper,
  TextButtonContent,
} from './cardCartStyles'
import { PriceButton } from '@/app/themes/globalStyle'

export function CardCart() {
  return (
    <ArticleWrapper>
      {Array.from({ length: 6 }).map((_, i) => {
        return (
          <CardCartWrapper key={i}>
            <span>X</span>
            <Image
              src="/relogio.png"
              width={1002}
              height={1244}
              priority
              alt=""
            />
            <CardCartContent>
              <ProductText>Apple Watch Series 4 GPS</ProductText>

              <CardButtonsWrapper>
                <TextButtonContent>
                  <p>Qtd</p>
                  <CardButtonAmountContent>
                    <CardButtonAmountDecrement>-</CardButtonAmountDecrement>

                    <CardButtonAmountNumber>1</CardButtonAmountNumber>
                    <CardButtonAmountIncrement>+</CardButtonAmountIncrement>
                  </CardButtonAmountContent>
                </TextButtonContent>
                <PriceButton>R$399</PriceButton>
              </CardButtonsWrapper>
            </CardCartContent>
          </CardCartWrapper>
        )
      })}
    </ArticleWrapper>
  )
}
