/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { HeadingProps } from './index'
import theme from '../../../theme/brave-default'

const StyledSharedHeading = styled<HeadingProps, 'span'>('span')`
  box-sizing: border-box;
  font-family: ${theme.fontFamily.heading};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  margin: 0;
`

export const StyledH1 = StyledSharedHeading.withComponent('h1').extend`
  font-size: 48px;
`

export const StyledH2 = StyledSharedHeading.withComponent('h2').extend`
  font-size: 40px;
`

export const StyledH3 = StyledSharedHeading.withComponent('h3').extend`
  font-size: 32px;
`

export const StyledH4 = StyledSharedHeading.withComponent('h4').extend`
  font-size: 24px;
`

export const StyledH5 = StyledSharedHeading.withComponent('h5').extend`
  font-size: 20px;
`

export const StyledH6 = StyledSharedHeading.withComponent('h6').extend`
  font-size: 16px;
`
