import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Sidebar } from '@/app/components/Sidebar/sidebar'

describe('Sidebar testing group', () => {
  it('renders a heading', () => {
    render(<Sidebar />)

    const heading = screen.getByText('Finalizar compra')

    expect(heading).toBeDefined()
  })

  it('renders a Total', () => {
    render(<Sidebar />)

    const total = screen.getByText('Total:')

    expect(total).toBeDefined()
  })
})
