'use client'
import styled from 'styled-components'

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 0;
  margin-top: 18px;
`

export const CardWrapper = styled.div`
  max-width: 250.5px;
  max-height: 328px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1352);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px auto 18px auto;

  & img {
    margin-top: 20px;
    width: 127px;
    height: 158.82px;
  }
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h2 {
    flex-basis: 60%;
  }
`

export const ProductText = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-left: 0;
`

export const SubText = styled.p`
  font-weight: 300;
  width: 221px;
  font-size: 10px;
  line-height: 12px;
`
