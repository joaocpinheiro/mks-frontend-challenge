'use client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './defaultTheme'
import { useLocalStorage } from 'usehooks-ts'
import GlobalStyle from './globalStyle'

export default function GlobalThemeWrapper({
  children,
}: React.PropsWithChildren) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
