import { useCart } from '@/contexts/cart-context'
import { CardCart } from './cardCart'
import {
  SidebarWrapper,
  SidebarBody,
  BlackCloseButton,
  HeaderSidebarContent,
  TotalContainer,
  FinishButton,
} from './sidebarStyles'

type props = {
  active: React.Dispatch<boolean>
}

export function Sidebar({ active }: props) {
  const closeSidebar = () => {
    active(false)
  }

  const { items } = useCart()

  function getTotal() {
    let sum = 0
    items?.map((item) => {
      sum += +item.product.price * item.quantity
      return sum
    })
    return sum
  }

  return (
    <>
      <SidebarWrapper>
        <SidebarBody>
          <HeaderSidebarContent>
            <h2>
              Carrinho <br /> de compras
            </h2>
            <BlackCloseButton onClick={closeSidebar}>
              <span>X</span>
            </BlackCloseButton>
          </HeaderSidebarContent>
          <CardCart></CardCart>
          <TotalContainer>
            <h2>Total:</h2>
            <span>
              {getTotal().toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </TotalContainer>
          <FinishButton>Finalizar compra</FinishButton>
        </SidebarBody>
      </SidebarWrapper>
    </>
  )
}
