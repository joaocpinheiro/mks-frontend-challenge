'use client'

import styled from 'styled-components'
import { defaultTheme } from '../themes/defaultTheme'

export const Head = styled.main`
  background-color: ${defaultTheme.colors.mainBlue};
  display: flex;
  align-items: center;
  margin: 0;
  padding-top: 48px;

  & > h1 {
    margin-left: 20px;
    color: white;
  }

  & > p {
    margin-left: 4px;
    color: white;
  }
`
