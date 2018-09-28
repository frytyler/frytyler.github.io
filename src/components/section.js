import styled from 'styled-components'

import colors from '../colors'

export const Section = styled.section`
  position: relative;
  padding: ${({ top }) => top || '100'}px 0 100px 0;
  &::after {
    ${({ noDivider }) => (noDivider ? '' : `content: ''`)};
    width: 140px;
    height: 1px;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -70px;
    background-color: ${colors.primary};
  }
`

export const Heading = styled.h1`
  text-align: center;
  margin: 0;
  text-transform: uppercase;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
`

export const Description = styled.p`
  line-height: 1.5rem;
  text-align: ${({ align }) => align || 'center'};
  margin: 0;
  margin-bottom: 3rem;
  font-weight: 200;
  ${({ top }) => top && `margin-top: ${top}rem`};
`

export const SubHeading = styled.h4`
  text-align: ${({ align }) => align || 'center'};
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  position: relative;
  padding-bottom: 0.75rem;
  @media (max-width: 500px) {
    margin-top: 2rem;
  }
  &::after {
    content: '';
    width: 40px;
    height: 3px;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -20px;
    background-color: ${colors.primary};
  }
`

export const LeftSubHeading = styled.h4`
  text-align: ${({ align }) => align || 'left'};
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  position: relative;
  padding-bottom: 0.75rem;
  &::after {
    content: '';
    width: 40px;
    height: 3px;
    display: block;
    position: absolute;
    bottom: 0px;
    left: 0;
    background-color: ${colors.primary};
  }
`
