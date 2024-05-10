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

export function MainContent() {
  return (
    <MainWrapper>
      {Array.from({ length: 6 }).map((_, i) => {
        return (
          <CardWrapper key={i}>
            <Image
              src="/relogio.png"
              width={1002}
              height={1244}
              priority
              alt=""
            />
            <CardContent>
              <ProductText>Apple Watch Series 4 GPS</ProductText>
              <PriceButton>R$399</PriceButton>
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
