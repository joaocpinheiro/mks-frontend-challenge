import { CardCart } from './cardCart'
import { BgBlackButton, SidebarWrapper, SidebarBody } from './sidebarStyles'

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
          <h2>
            Carrinho <br /> de compras
          </h2>
          <BgBlackButton onClick={closeSidebar}>
            <span>X</span>
          </BgBlackButton>
          <CardCart></CardCart>
        </SidebarBody>
      </SidebarWrapper>
    </>
  )
}
