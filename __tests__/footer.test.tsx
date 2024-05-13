import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/app/components/Footer/footer'

describe('Sidebar testing group', () => {
  it('renders a Footer', () => {
    render(<Footer />)

    const heading = screen.getByText(
      'MKS Sistemas © Todos os direitos reservados',
    )

    expect(heading).toBeDefined()
  })
})
