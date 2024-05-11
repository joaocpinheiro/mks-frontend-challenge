'use client'

import styled from 'styled-components'

export const ArticleWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 0;
  margin-top: 18px;
`

export const CardCartWrapper = styled.div`
  max-width: 250.5px;
  background: white;
  max-height: 328px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1352);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;

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

export const CardButtonAmountWrapper = styled.div`
  height: 34px;
  min-width: 97px;
  border-radius: 4px;
  border: rgba(255, 255, 255, 1);
`

export const CardButtonAmountDecrement = styled.span``

export const CardButtonAmountNumber = styled.span``

export const CardButtonAmountIncrement = styled.span``
