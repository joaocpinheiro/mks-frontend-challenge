'use client'
import styled from 'styled-components'

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 0;
  margin-top: 18px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
  }
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

  @media (min-width: 1024px) {
    margin-right: 22px;
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
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    line-height: 17px;
  }
`

export const SubText = styled.p`
  font-weight: 300;
  width: 221px;
  font-size: 10px;
  line-height: 12px;
`
