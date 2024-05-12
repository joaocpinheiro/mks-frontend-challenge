import { CartProvider } from '@/contexts/cart-context'
import { Footer } from '../components/Footer/footer'
import { Header } from '../components/Header/header'
import { MainContent } from '../components/Main/mainContent'
import { ProvidesTheQueryClient } from '../lib/ProvidesTheQueryClient'

export default function Home() {
  return (
    <>
      <ProvidesTheQueryClient>
        <CartProvider>
          <Header />
          <MainContent />
          <Footer />
        </CartProvider>
      </ProvidesTheQueryClient>
    </>
  )
}
