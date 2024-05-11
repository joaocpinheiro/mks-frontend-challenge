'use client'

import { defaultTheme } from '@/app/themes/defaultTheme'
import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 330px;
  height: 100vh;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
`

export const SidebarBody = styled.div`
  background-color: ${defaultTheme.colors.mainBlue};
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
`

export const HeaderSidebarContent = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  z-index: 10;
  background: ${defaultTheme.colors.mainBlue};

  & > h2 {
    font-weight: 700;
    line-height: 32px;
    font-size: 27px;
    color: white;
    margin-left: 32px;
    max-width: 178px;
    z-index: 10;
  }
`

export const UnorderList = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  display: block;
  transition: all 0.5s ease;
`
export const BlackCloseButton = styled.button`
  background-color: black;
  color: ${defaultTheme.colors.mainBlue};
  font-family: inherit;
  font-weight: 400;
  font-size: 38px;
  top: 26px;
  right: 15px;
  border: none;
  position: fixed;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  max-width: 330px;
  z-index: 10;
  cursor: pointer;
`

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: white;
  }

  & > span {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: white;
  }
`

export const FinishButton = styled.button`
  border: none;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  font-weight: 700;
  font-size: 20px;
  margin-top: 5px;
`
