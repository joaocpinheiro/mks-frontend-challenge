'use client'

import { defaultTheme } from '@/app/themes/defaultTheme'
import styled from 'styled-components'

export const ArticleWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 0;
  margin-top: 18px;
  margin-top: 102px;

  @media (min-width: 768px) {
    margin-top: 110px;
  }
`

export const CardCartWrapper = styled.div`
  width: 250.5px;
  background: white;
  max-height: 328px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1352);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
  margin-bottom: 13px;

  & > span {
    position: absolute;
    top: 6px;
    right: 14px;
    font-weight: 400;
    font-size: 26px;
    color: black;
    width: 21px;
    cursor: pointer;

    @media (min-width: 768px) {
      background-color: black;
      color: white;
      font-size: 14px;
      text-align: center;
      top: -10px;
      right: -10px;
      border-radius: 50%;
    }
  }

  & img {
    margin-top: 20px;
    width: 80px;
    height: 95px;
  }

  @media (min-width: 768px) {
    width: 379px;
    height: 95px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    margin-bottom: 13px;

    & img {
      width: 46px;
      height: 57px;
      translate: 0 -10px;
      margin-left: 10px;
      margin-right: 0px;
    }
  }
`

export const CardCartContent = styled.div`
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    width: 85%;

    & h2 {
      max-width: 100%;
    }
  }
`

export const ProductCardCartText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: start;
    line-height: 17px;
    font-size: 13px;
    margin-left: 10px;
    width: 110px;
  }
`

export const CardButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 21px;

  @media (min-width: 768px) {
    justify-content: space-between;
    margin-bottom: 0;
  }
`

export const TextButtonContent = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > p {
    display: none;
  }

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    & > p {
      margin-right: auto;
      display: flex;
      flex-direction: column;
      margin-bottom: 1px;
      margin-top: -10px;
      font-size: 9px;
    }
  }
`

export const CardButtonAmountContent = styled.div`
  height: 34px;
  min-width: 97px;
  border-radius: 4px;
  border: 0.3px solid rgba(191, 191, 191, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: black;
  margin-right: 29px;

  @media (min-width: 768px) {
    justify-content: space-around;
    min-width: 60px;
    font-size: 14px;
  }
`

export const CardButtonAmountDecrement = styled.button`
  width: 33%;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  height: 100%;
  &:hover {
    background: ${defaultTheme.colors.mainBlue};
    transition: 0.3s;
  }
`

export const CardButtonAmountNumber = styled.span`
  width: 33%;
  border-right: 0.2px solid rgba(191, 191, 191, 1);
  border-left: 0.2px solid rgba(191, 191, 191, 1);
  text-align: center;
  background-color: transparent;
  border-top: none;
  border-bottom: none;

  @media (min-width: 768px) {
  }
`

export const CardButtonAmountIncrement = styled.button`
  width: 33%;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  height: 100%;
  margin-right: auto;
  &:hover {
    background: ${defaultTheme.colors.mainBlue};
    transition: 0.3s;
  }
`
