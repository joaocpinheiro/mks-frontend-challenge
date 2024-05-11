'use client'

import styled from 'styled-components'

export const ArticleWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 0;
  margin-top: 18px;
  margin-top: 102px;
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
  }

  & img {
    margin-top: 20px;
    width: 80px;
    height: 95px;
  }
`

export const CardCartContent = styled.div`
  align-items: center;
  justify-content: center;
`

export const CardButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 21px;
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
`

export const CardButtonAmountDecrement = styled.span`
  width: 33%;
  text-align: center;
  cursor: pointer;
`

export const CardButtonAmountNumber = styled.span`
  width: 33%;
  border-right: 0.2px solid rgba(191, 191, 191, 1);
  border-left: 0.2px solid rgba(191, 191, 191, 1);
  text-align: center;
`

export const CardButtonAmountIncrement = styled.span`
  width: 33%;
  text-align: center;
  cursor: pointer;
`
