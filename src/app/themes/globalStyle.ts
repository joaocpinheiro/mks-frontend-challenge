'use client'

import styled, { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './defaultTheme'

const GlobalStyle = createGlobalStyle`
   html,
  body {
    font-family: "Montserrat", sans-serif;
    padding: 0;
    margin: 0 auto;
    border: 0;
    max-width: 1440px;
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
  }
  p{
  }
`

export const PriceButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  font-family: inherit;
  background-color: ${defaultTheme.colors.mainBrown};
  padding: 5px 11px;
  height: 30px;
  border-radius: 5px;
  border: none;
  color: white;
  line-height: 15px;
  cursor: pointer;

  margin-left: auto;
  margin-right: 11px;
`

export const BuyButton = styled.button`
  width: 100%;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  height: 36px;
  line-height: 18px;
  background-color: ${defaultTheme.colors.mainBlue};
  color: white;
  border-radius: 0 0 8px 8px;
  padding: 9px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  border-bottom: 0;
  cursor: pointer;

  & > img {
    padding: 0;
    translate: 0 -35%;
    max-width: 18px;
    max-height: 30px;
    display: flex;
    margin-right: 16px;
  }
`

export default GlobalStyle
