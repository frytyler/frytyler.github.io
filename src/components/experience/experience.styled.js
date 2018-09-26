import React from 'react'
import styled from 'styled-components'

import { LeftSubHeading } from '../section'
import colors from '../../colors'

const Main = styled.div`
  text-align: right;
  @media (max-width: 800px) {
    text-align: left;
  }
`
const Company = styled.p`
  margin: 0;
`
const DateRange = styled.em`
  font-size: 0.725rem;
  color: #8a8a8a;
`
const Present = styled.b.attrs({ children: 'Present' })``

export const Item = ({ company, start, end }) => {
  return (
    <Main>
      <Company>{company}</Company>
      <DateRange>
        {start} - {end || <Present />}
      </DateRange>
    </Main>
  )
}

const Description = styled.div`
  position: relative;
  &::before {
    content: '';
    border: 3px solid ${colors.primary};
    border-radius: 50%;
    background: #fff;
    width: 1rem;
    height: 1rem;
    display: block;
    position: absolute;
    top: 0.25rem;
    left: -68px;
    z-index: 1;
  }
  &::after {
    content: '';
    width: 1px;
    height: 110%;
    background: #aaa;
    display: block;
    position: absolute;
    top: 5px;
    left: -58px;
  }
`

const Content = styled.p`
  line-height: 1.5rem;
`

export const ItemDescription = ({ position, children }) => {
  return (
    <Description>
      <LeftSubHeading>{position}</LeftSubHeading>
      <Content>{children}</Content>
    </Description>
  )
}
