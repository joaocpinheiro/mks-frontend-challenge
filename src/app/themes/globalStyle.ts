import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   html,
  body {
    padding: 0;
    margin: 0;
    max-width: 1440px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
