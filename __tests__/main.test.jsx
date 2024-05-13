import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainContent } from '../src/app/components/Main/mainContent'

// Mock the API response
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(() => ({
    data: {
      /* Mock your API response data here */
    },
    isLoading: false,
    isError: false,
  })),
}))

const queryClient = new QueryClient()

describe('MainContent component', () => {
  it('renders properly', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MainContent />
      </QueryClientProvider>,
    )

    await screen.findByText('Redesigned from scratch and completely revised.')

    expect(
      screen.getByText('Redesigned from scratch and completely revised.'),
    ).toBeInTheDocument()
  })
})
