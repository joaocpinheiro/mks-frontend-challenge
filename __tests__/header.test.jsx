import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CartWidget } from '@/app/components/Header/cartWidget'

describe('Sidebar testing group', () => {
  it('renders a MKS', () => {
    render(<CartWidget />)

    const heading = screen.getByText('MKS')

    expect(heading).toBeDefined()
  })
})
