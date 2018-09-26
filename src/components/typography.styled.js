import styled from 'styled-components'
import colors from '../colors'

export const Intro = styled.p`
  font-size: 1.185rem;
  color: ${colors.typography.primary};
  line-height: 1.9rem;
  b {
    /* font-size: 1em; */
    font-weight: 500;
    margin-bottom: 0.65rem;
    display: inline-block;
  }
`

export const Anchor = styled.a`
  font-weight: 600;
  border-bottom: 3px solid ${colors.primary};
  transition: color 0.3s ease;
  color: ${colors.typography.primary};
  text-decoration: none;
  &:hover {
    color: black;
  }
`
