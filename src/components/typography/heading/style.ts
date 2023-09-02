/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { HeadingProps } from './index'
import theme from '../../../theme/brave-default'

const StyledSharedHeading = styled('span')<HeadingProps>`
  box-sizing: border-box;
  font-family: ${theme.fontFamily.heading};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  margin: 0;
`

export const StyledH1 = styled(StyledSharedHeading.withComponent('h1'))`
  font-size: 48px;
`

export const StyledH2 = styled(StyledSharedHeading.withComponent('h2'))`
  font-size: 40px;
`

export const StyledH3 = styled(StyledSharedHeading.withComponent('h3'))`
  font-size: 32px;
`

export const StyledH4 = styled(StyledSharedHeading.withComponent('h4'))`
  font-size: 24px;
`

export const StyledH5 = styled(StyledSharedHeading.withComponent('h5'))`
  font-size: 20px;
`

export const StyledH6 = styled(StyledSharedHeading.withComponent('h6'))`
  font-size: 16px;
`
