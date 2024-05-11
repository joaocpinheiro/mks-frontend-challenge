'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './react-query'
import { PropsWithChildren } from 'react'

export const ProvidesTheQueryClient = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
