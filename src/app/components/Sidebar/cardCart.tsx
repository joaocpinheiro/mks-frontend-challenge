import Image from 'next/image'
import { ProductText } from '../Main/mainContentStyle'
import {
  ArticleWrapper,
  CardCartContent,
  CardCartWrapper,
} from './cardCartStyles'
import { PriceButton } from '@/app/themes/globalStyle'

export function CardCart() {
  return (
    <ArticleWrapper>
      {Array.from({ length: 1 }).map((_, i) => {
        return (
          <CardCartWrapper key={i}>
            <Image
              src="/relogio.png"
              width={1002}
              height={1244}
              priority
              alt=""
            />
            <CardCartContent>
              <ProductText>Apple Watch Series 4 GPS</ProductText>
              <PriceButton>R$399</PriceButton>
            </CardCartContent>
          </CardCartWrapper>
        )
      })}
    </ArticleWrapper>
  )
}
