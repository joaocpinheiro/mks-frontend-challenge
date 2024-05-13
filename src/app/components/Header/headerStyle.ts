'use client'

import styled from 'styled-components'
import { defaultTheme } from '../../themes/defaultTheme'

export const HeadLogo = styled.header`
  background-color: ${defaultTheme.colors.mainBlue};
  display: flex;
  align-items: center;
  margin: 0;
  height: 48px;

  & > h1 {
    margin-left: 20px;
    color: white;
    padding: 0;
    font-weight: 600;
  }

  & > p {
    margin-left: 4px;
    color: white;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    margin-bottom: 90px;
    height: 100px;

    & > h1 {
      margin-left: 65px;
      font-size: 40px;
      line-height: 19px;
    }

    & > p {
      font-size: 20px;
      line-height: 19px;
    }
  }
`

export const ButtonCart = styled.button`
  display: flex;
  font-family: inherit;
  background-color: white;
  margin-left: auto;
  margin-right: 23px;
  width: 52px;
  height: 26px;
  align-items: center;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  justify-content: space-around;
  font-size: 12px;
  cursor: pointer;

  & img {
    width: 10.98px;
    height: 10.4px;
  }

  & span {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 35px;

    & > img {
      width: 19px;
      height: 18px;
    }
  }
`
