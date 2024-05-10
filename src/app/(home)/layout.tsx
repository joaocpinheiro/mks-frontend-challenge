import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import GlobalThemeWrapper from '../themes/GlobalThemeWrapper'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Mks Sistemas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <GlobalThemeWrapper>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
