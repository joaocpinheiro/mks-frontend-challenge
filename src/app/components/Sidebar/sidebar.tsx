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
            <span>R$ 798</span>
          </TotalContainer>
          <FinishButton>Finalizar compra</FinishButton>
        </SidebarBody>
      </SidebarWrapper>
    </>
  )
}
