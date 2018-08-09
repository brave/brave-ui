/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { HeadingProps } from './index'
import { setTheme } from '../../../helpers'

// All feature-based text inherits from StyledSharedHeading
// which excludes normal h1...h6 headings
const StyledSharedHeading = styled.span`
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
` as any

const StyledH1 = StyledSharedHeading.withComponent('h1').extend`
  color: ${(p: HeadingProps) => setTheme(p.theme, 'color') || '#4b4c5c'};
  margin: ${(p: HeadingProps) => setTheme(p.theme, 'margin') || '0'};
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.2px;
`

const StyledH2 = StyledSharedHeading.withComponent('h2').extend`
  color: ${(p: HeadingProps) => setTheme(p.theme, 'color') || '#4b4c5c'};
  margin: ${(p: HeadingProps) => setTheme(p.theme, 'margin') || '20px 0 10px'};
  font-size: 22px;
  font-weight: 600;
  line-height: 1.27;
  letter-spacing: normal;
`

const StyledH3 = StyledSharedHeading.withComponent('h3').extend`
  color: ${(p: HeadingProps) => setTheme(p.theme, 'color') || '#4b4c5c'};
  margin: ${(p: HeadingProps) => setTheme(p.theme, 'margin') || '0'};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: normal;
`

export {
  StyledH1,
  StyledH2,
  StyledH3
}
