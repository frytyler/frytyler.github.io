import { injectGlobal } from 'styled-components'
import colors from './colors'

injectGlobal`
  * {
    font-family: 'Montserrat', sans-serif;
    /* font-size: 16px; */
    color: ${colors.typography.primary};
  }
`
